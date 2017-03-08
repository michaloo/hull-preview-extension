onReady(function() {
  var token = getToken();
  var ident = getIdent();
  var connectorUrl = getConnectorUrl();

  if (JSON.stringify(ident) === "{}") {
    return;
  }

  ident = encodeIdent(ident);

  injectIframe(connectorUrl + "/preview?hullToken=" + token + "&ident=" + ident);
});
