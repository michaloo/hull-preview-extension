function getSwitch() {
  	return new Promise(function(resolve, reject) {
  		chrome.storage.sync.get("switch", function(items) {
  			resolve(items.switch);
  		});
  	});
}
