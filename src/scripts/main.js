var loaded = false;
//var iframe = null;

function init() {
  return Promise.all([
  	getSwitch(),
  	getToken(),
  	getIdent(),
  	getConnectorUrl()
  ]).then(function(input, err) {
  	var switchEnabled = input[0];
  	var token = input[1];
  	var ident = input[2];
  	var connectorUrl = input[3];

  	if (!switchEnabled || !token || !connectorUrl || JSON.stringify(ident) === "{}") {
  		/*
  		if (iframe) {
  			hideIframe(iframe);
  			iframe = null;
  		}
  		*/
    	return false;
  	}

  	ident = encodeIdent(ident);

	/*
  	if (iframe) {
  		hideIframe(iframe);
  		iframe = null;
  	}
  	*/
  	iframe = injectIframe(connectorUrl + "/preview?hullToken=" + token + "&ident=" + ident);

  	return true;
  })
}

function checkInit(count) {
  console.log(loaded, count);
  if (loaded || count > 20) {
    return;
  }
  init().then(function(res, err) {
  	loaded = res;
  	setTimeout(checkInit.bind(undefined, count + 1), 200);
  });
}

checkInit(1);
