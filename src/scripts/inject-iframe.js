function injectIframe(src) {
  var iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.setAttribute("style", "position: fixed;top: 0;right: 0;bottom: 0;width: 20%;height: 100%;background: white;z-index:9999;border: none;border-left: 1px solid black;")
  document.body.appendChild(iframe);
}