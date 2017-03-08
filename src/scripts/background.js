chrome.contextMenus.create({
 title: "Lookup %s in Hull",
 contexts: ["selection", "link"],  // ContextType
 onclick: function(str) {
  var token = getToken();
  var connectorUrl = getConnectorUrl();

  ident = encodeIdent({ email: str.selectionText });

  // FIXME: how to perform that call?
  // chrome.tabs.executeScript({
  //   code: "window.injectIframe('" + connectorUrl + "/preview?hullToken=" + token + "&ident=" + ident + "')";
  // });
  return true;
 }
});
