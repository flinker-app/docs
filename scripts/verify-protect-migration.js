const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const migrations = [
  {
    slug: "sharepoint-who-viewed-file",
    target: "https://protect.flinker.app/docs/sharepoint-who-viewed-file/",
    title: "See who viewed files in SharePoint",
    contentAnchor: "option-1-enable-and-use-sharepoint-viewers",
  },
  {
    slug: "tutorial-to-share-sharepoint-folders-with-externals",
    target: "https://protect.flinker.app/docs/tutorial-to-share-sharepoint-folders-with-externals/",
    title: "Share SharePoint folders with external users",
    contentAnchor: "share-the-access-link",
  },
];

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, "i"))?.[1];
}

async function verifyTarget(migration, fetchPage = fetch) {
  const { target, title, contentAnchor } = migration;
  const response = await fetchPage(target, {
    redirect: "manual",
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(response.status, 200, "The destination must return HTTP 200 directly.");
  assert.match(response.headers.get("content-type") || "", /text\/html/i, "The destination must be HTML.");
  assert.doesNotMatch(response.headers.get("x-robots-tag") || "", /\b(noindex|none)\b/i, "The destination must allow indexing.");

  const html = await response.text();
  const canonicals = [...html.matchAll(/<link\b[^>]*>/gi)]
    .map(([tag]) => tag)
    .filter((tag) => attribute(tag, "rel")?.toLowerCase() === "canonical");
  assert.equal(canonicals.length, 1, "The destination must have exactly one canonical link.");
  assert.equal(attribute(canonicals[0], "href"), target, "The destination canonical must match the new article URL, not the SPA homepage.");

  for (const [tag] of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (/^(robots|googlebot)$/i.test(attribute(tag, "name") || "")) {
      assert.doesNotMatch(attribute(tag, "content") || "", /\b(noindex|none)\b/i, "The destination must allow indexing.");
    }
    assert.notEqual(attribute(tag, "http-equiv")?.toLowerCase(), "refresh", "The destination must not redirect again.");
  }

  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert.equal(headings.length, 1, "The destination must contain one article heading in its server-rendered HTML.");
  assert.equal(headings[0][1].replace(/<[^>]*>/g, "").trim(), title, "The destination must serve the migrated article, not a fallback page.");
  const ids = [...html.matchAll(/\bid=["']([^"']*)["']/g)].map((match) => match[1]);
  assert.ok(ids.includes(contentAnchor), "The article content and legacy section links must be present before JavaScript runs.");
}

async function verifyMigrations(fetchPage = fetch) {
  for (const migration of migrations) {
    const source = fs.readFileSync(path.join(__dirname, `../docs/${migration.slug}.md`), "utf8");
    for (const key of ["redirect_url", "canonical_url"]) {
      const value = source.match(new RegExp(`^${key}:\\s*(\\S+)`, "m"))?.[1];
      assert.equal(value, migration.target, `${migration.slug}: ${key} must point directly to the Protect article.`);
    }
    try {
      await verifyTarget(migration, fetchPage);
    } catch (error) {
      throw new Error(`${migration.target}: ${error.message}`, { cause: error });
    }
  }
}

if (require.main === module) {
  verifyMigrations().then(() => {
    console.log(`Migration destinations verified:\n${migrations.map(({ target }) => target).join("\n")}`);
  }).catch((error) => {
    console.error(`Migration blocked: ${error.message}\nDeploy the permissions repository first, then rerun this docs deployment. The existing GitHub Pages site remains live.`);
    process.exitCode = 1;
  });
}

module.exports = { verifyTarget, verifyMigrations, migrations };
