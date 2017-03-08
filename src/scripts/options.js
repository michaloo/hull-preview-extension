function onSwitch(event) {
	var switchChecked = event.target.checked;
	chrome.storage.sync.set({ switch: switchChecked }, function() {
		console.debug(`Options saved: switch=${switchChecked}`);
	});
}

function onTokenChange(event) {
	var token = event.target.value;
	chrome.storage.sync.set({ token: token }, function() {
		console.debug(`Options saved: token=${token}`);
	});
}

window.onload = function() {
	document.getElementById("token").addEventListener("change", onTokenChange);
	document.getElementById("switch").addEventListener("change", onSwitch); 
}
