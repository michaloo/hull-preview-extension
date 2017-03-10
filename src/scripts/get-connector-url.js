function getConnectorUrl() {
  return new Promise(function(resolve, reject) {
    chrome.storage.sync.get("host", function(items) {
      resolve(items.host);
    });
  });
}
