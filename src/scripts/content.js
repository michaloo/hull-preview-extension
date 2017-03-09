var shown = false;

function toggle() {
  return Promise.all([
    getToken(),
    getConnectorUrl()
  ]).then(function(input, err) {
    var token = input[0];
    var connectorUrl = input[1];

    if (JSON.stringify(ident) === "{}" || shown) {
      shown = false;
      var iframe = document.getElementById("hull-preview");
      if (iframe) iframe.parentNode.removeChild(iframe);
      // document.body.style.width = "100%";
      return false;
    }


    encodedIdent = encodeIdent(ident);
    injectIframe(connectorUrl + "/preview?hullToken=" + token + "&ident=" + encodedIdent);

    shown = true;
    return true;
  })
}


window.onload = function() {

  // init(0, { clear: true });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.toggle) {
        toggle();
      } else {
        toggle();
      }
  });

  document.body.addEventListener('DOMSubtreeModified', function() {
    init(0, { clear: true });
  }, false)
}


