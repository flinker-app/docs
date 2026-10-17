// Normalize article metadata for the shared layout.

exports.preTransform = function (model) {
  return model;
};

exports.postTransform = function (model) {
  var manualDate = extractManualLastUpdated(model.conceptual);
  var metadataDate = model['ms.date'] || model.lastUpdated || model.last_updated;

  model.lastUpdated = normalizeDate(metadataDate || manualDate);
  model.lastUpdatedText = formatLastUpdatedText(model.lastUpdated);
  model.conceptual = removeManualLastUpdated(model.conceptual);

  if (model.exampleUrl && /^\/_media\/ifc-viewer-examples\/[\w-]+\/index\.html$/.test(model.exampleUrl)) {
    // Keep this native link outside DocFX's tab list, which expects a panel for every item.
    model.conceptual = model.conceptual.replace(
      /(<div class="tabGroup"[^>]*>\s*<ul role="tablist">[\s\S]*?<\/ul>)/,
      '$1\n<a class="example-open-tab" href="' + model.exampleUrl + '" target="_blank" rel="noopener">Open in new tab</a>'
    );
  }

  return model;
};

function extractManualLastUpdated(content) {
  if (!content) {
    return '';
  }

  var match = content.match(/<p[^>]*>\s*<em[^>]*>\s*Last updated:\s*([^<]+?)\s*<\/em>\s*<\/p>/i);
  return match ? match[1] : '';
}

function removeManualLastUpdated(content) {
  if (!content) {
    return content;
  }

  return content.replace(/<p[^>]*>\s*<em[^>]*>\s*Last updated:\s*[^<]+?\s*<\/em>\s*<\/p>\s*/gi, '');
}

function normalizeDate(value) {
  if (!value) {
    return '';
  }

  if (Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  var text = String(value).trim();
  var isoDate = text.match(/^(\d{4}-\d{2}-\d{2})/);

  if (isoDate) {
    return isoDate[1];
  }

  var parsedDate = Date.parse(text);

  if (!isNaN(parsedDate) && /\b\d{4}\b/.test(text) && /\b\d{1,2}\b/.test(text)) {
    return new Date(parsedDate).toISOString().slice(0, 10);
  }

  return text;
}

function formatLastUpdatedText(value) {
  if (!value) {
    return '';
  }

  return 'Last updated on ' + value;
}
