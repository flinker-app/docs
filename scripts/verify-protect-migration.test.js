const assert = require("node:assert/strict");
const test = require("node:test");
const { verifyTarget: verifyDestination, verifyMigrations, migrations } = require("./verify-protect-migration");

const articleHtml = ({ target, title, contentAnchor }) => `<html><head><link rel="canonical" href="${target}"><meta name="robots" content="index, follow"></head><body><h1>${title}</h1><h2 id="${contentAnchor}">Article section</h2></body></html>`;

for (const migration of migrations) {
  const { target, title, contentAnchor, slug } = migration;
  const verifyTarget = (fetchPage) => verifyDestination(migration, fetchPage);
  const article = articleHtml(migration);
  const page = (html = article, status = 200, headers = {}) => async () => new Response(html, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", ...headers },
  });

  test(`${slug}: accepts the published, prerendered article at its final URL`, async () => {
    await verifyTarget(async (url, options) => {
      assert.equal(url, target);
      assert.equal(options.redirect, "manual");
      assert.ok(options.signal);
      return page()();
    });
  });

  test(`${slug}: blocks a 200 OK SPA fallback with the homepage canonical`, async () => {
    await assert.rejects(verifyTarget(page(article.replace(target, "https://protect.flinker.app/"))), /canonical must match/);
  });

  test(`${slug}: blocks missing pages, failures, and additional redirect hops`, async () => {
    for (const status of [404, 503, 301, 302]) {
      await assert.rejects(verifyTarget(page(article, status)), /HTTP 200 directly/);
    }
  });

  test(`${slug}: blocks non-indexable destinations in HTML and HTTP headers`, async () => {
    for (const directive of ["noindex, follow", "none"]) {
      await assert.rejects(verifyTarget(page(article.replace("index, follow", directive))), /allow indexing/);
    }
    await assert.rejects(verifyTarget(page(article.replace('name="robots"', 'name="googlebot"').replace("index, follow", "noindex"))), /allow indexing/);
    await assert.rejects(verifyTarget(page(article, 200, { "x-robots-tag": "googlebot: noindex" })), /allow indexing/);
  });

  test(`${slug}: blocks another article, a client-only shell, and HTML redirects`, async () => {
    await assert.rejects(verifyTarget(page(article.replace(`<h1>${title}</h1>`, "<h1>Documentation page not found</h1>"))), /migrated article/);
    await assert.rejects(verifyTarget(page(article.replace(/<body>[\s\S]*<\/body>/, '<body><div id="root"></div></body>'))), /article heading/);
    await assert.rejects(verifyTarget(page(article.replace(`id="${contentAnchor}"`, ""))), /legacy section links/);
    await assert.rejects(verifyTarget(page(article.replace("</head>", '<meta http-equiv="refresh" content="0;url=/"></head>'))), /redirect again/);
  });

  test(`${slug}: blocks missing or conflicting canonical links and non-HTML responses`, async () => {
    const canonical = `<link rel="canonical" href="${target}">`;
    await assert.rejects(verifyTarget(page(article.replace(canonical, ""))), /exactly one canonical/);
    await assert.rejects(verifyTarget(page(article.replace(canonical, canonical + canonical))), /exactly one canonical/);
    await assert.rejects(verifyTarget(page(article, 200, { "content-type": "application/json" })), /must be HTML/);
  });

  test(`${slug}: fails closed when the destination cannot be reached`, async () => {
    await assert.rejects(verifyTarget(async () => { throw new Error("Network unavailable"); }), /Network unavailable/);
  });
}

test("verifies every migration before allowing the docs deployment", async () => {
  const requested = [];
  await verifyMigrations(async (url) => {
    requested.push(url);
    const migration = migrations.find(({ target }) => target === url);
    assert.ok(migration);
    return new Response(articleHtml(migration), { headers: { "content-type": "text/html" } });
  });
  assert.deepEqual(requested, migrations.map(({ target }) => target));
});

test("blocks deployment when the first article is live but the second is not", async () => {
  await assert.rejects(verifyMigrations(async (url) => new Response(
    url === migrations[0].target ? articleHtml(migrations[0]) : "<h1>Protect homepage</h1>",
    { headers: { "content-type": "text/html" } },
  )), /tutorial-to-share-sharepoint-folders-with-externals.*canonical/);
});
