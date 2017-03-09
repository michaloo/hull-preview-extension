var ident = {};
function init(count, options) {
  console.log(count, options);
  if (options && options.clear) {
    ident = {};
    chrome.runtime.sendMessage({ found: false });
  }

  if (JSON.stringify(ident) != "{}" || count > 20) {
    return;
  }

  getIdent()
    .then(function(foundIdent) {
      ident = foundIdent;
      chrome.runtime.sendMessage({ found: JSON.stringify(ident) != "{}" });
      // setTimeout(init.bind(undefined, count + 1), 200);
    });
}
