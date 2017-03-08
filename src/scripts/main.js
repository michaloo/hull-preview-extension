var loaded = false;

function init() {
  var token = getToken();
  var ident = getIdent();
  var connectorUrl = getConnectorUrl();

  if (JSON.stringify(ident) === "{}") {
    return false;
  }

  ident = encodeIdent(ident);

  injectIframe(connectorUrl + "/preview?hullToken=" + token + "&ident=" + ident);

  return true;
}


function checkInit(count) {
  if (loaded || count > 20) {
    return;
  }
  loaded = init();
  setTimeout(checkInit.bind(undefined, count + 1), 200);
}

checkInit();
