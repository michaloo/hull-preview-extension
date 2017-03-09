var loaded = false;

function init() {
  Promise.all([
  	getSwitch(),
  	getToken(),
  	getIdent(),
  	getConnectorUrl()
  ]).then(function(input) {
  	var switchEnabled = input[0];
  	var token = input[1];
  	var ident = input[2];
  	var connectorUrl = input[3];

  	if (!switchEnabled || !token || !connectorUrl || JSON.stringify(ident) === "{}") {
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
