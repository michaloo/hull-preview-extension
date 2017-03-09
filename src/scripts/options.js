function onSwitch(event) {
	var switchChecked = event.target.checked;
	chrome.storage.sync.set({ switch: switchChecked }, function() {
		console.debug(`Options saved: switch=${switchChecked}`);
	});
}

function onTextChange(key) {
	return function saveToStorage(event) {
		var value = event.target.value;
		chrome.storage.sync.set({ [key]: value }, function() {
			console.debug(`Options saved: ${key}=${value}`);
		});
	}
}

window.onload = function() {
	console.log("onload");
	Promise.all([
	  	getSwitch(),
	  	getToken(),
	  	getConnectorUrl()
	]).then(function(input, err) {
	  	var switchEnabled = input[0];
	  	var token = input[1];
	  	var connectorUrl = input[2];

	  	console.log(switchEnabled, token, connectorUrl);

	  	document.getElementById("switch").checked = switchEnabled;
	  	document.getElementById("token").value = token;
	  	document.getElementById("host").value = connectorUrl;
	});

	document.getElementById("switch").addEventListener("change", onSwitch);
	document.getElementById("token").addEventListener("change", onTextChange("token"));
	document.getElementById("host").addEventListener("change", onTextChange("host"));
}
