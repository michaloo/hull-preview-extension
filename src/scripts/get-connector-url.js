function getConnectorUrl() {
	return "https://hull-preview.eu.ngrok.io";
  	return Promise(function(resolve, reject) {
  		chrome.storage.sync.get("host", function(items) {
  			resolve(items.host);
  		}
  	});
}
