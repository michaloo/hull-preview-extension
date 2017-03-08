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
	document.getElementById("switch").addEventListener("change", onSwitch); 
	document.getElementById("token").addEventListener("change", onTextChange("token"));
	document.getElementById("host").addEventListener("change", onTextChange("host"));
}
