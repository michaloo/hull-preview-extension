var shown = false;

function loadIdent(newIdent) {

  return Promise.all([
    getToken(),
    getConnectorUrl()
  ]).then(function(input, err) {
    var token = input[0];
    var connectorUrl = input[1];
    var encodedIdent = encodeIdent(newIdent);
    loadIframe(connectorUrl + "/preview?key=" + token + "&ident=" + encodedIdent);
  });
}

function toggleSidebar(show) {
  if (shown && show !== true) {
    shown = false;
    return document.getElementById("hull-preview").style.display = "none";
  }

  shown = true;
  return document.getElementById("hull-preview").style.display = "block";
}

window.onload = function() {
  injectSidebar();
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      if (request.ident) {
        loadIdent(request.ident);
      }

      if (request.toggle !== undefined) {
        toggleSidebar(request.toggle);
      }
  });
}
