onReady(function() {
  var token = getToken();
  var ident = getIdent();
  var connectorUrl = "https://hull-preview.eu.ngrok.io";

  if (!ident) {
    return;
  }

  ident = encodeIdent(ident);

  injectIframe(connectorUrl + "/preview?hullToken=" + token + "&ident=" + ident);
});
