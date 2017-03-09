var loaded = false;

function init() {
  Promise.all([
  	getToken(),
  	getIdent(),
  	getConnectorUrl()
  ]).then(function(input) {
  	var token = input[0];
  	var ident = input[1];
  	var connectorUrl = input[2];

  	if (!token || !connectorUrl || JSON.stringify(ident) === "{}") {
    	return false;
  	}

  	ident = encodeIdent(ident);

  	injectIframe(connectorUrl + "/preview?hullToken=" + token + "&ident=" + ident);

  	return true;
  })
}

function checkInit(count) {
  if (loaded || count > 20) {
    return;
  }
  loaded = init();
  setTimeout(checkInit.bind(undefined, count + 1), 200);
}

checkInit();
