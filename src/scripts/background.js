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


chrome.browserAction.onClicked.addListener(function callback() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { toggle: true });
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.found) {
    chrome.browserAction.setBadgeText({ text: "OK" });
    // chrome.browserAction.setBadgeBackgroundColor({ color: "green" });
  } else {
    chrome.browserAction.setBadgeText({ text: "" });
    // chrome.browserAction.setBadgeBackgroundColor({ color: "gray" });
  }
});
