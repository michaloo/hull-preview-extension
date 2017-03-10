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
      getToken(),
      getConnectorUrl()
  ]).then(function(input, err) {
      var token = input[0] || "";
      var connectorUrl = input[1] || "";

      console.log(token, connectorUrl);
      document.getElementById("token").value = token;
      document.getElementById("host").value = connectorUrl;
  });

  document.getElementById("token").addEventListener("change", onTextChange("token"));
  document.getElementById("host").addEventListener("change", onTextChange("host"));
}
