function loadIframe(src) {
  if (document.getElementById("hull-preview-iframe")) {
    return document.getElementById("hull-preview-iframe").src = src
  }

  document.getElementById("hull-preview-placeholder").style.display = "none";
  var iframe = document.createElement('iframe');
  iframe.id = "hull-preview-iframe"
  iframe.src = src;
  iframe.setAttribute("style", "width: 100%;height: 100%;border: none;")
  document.getElementById("hull-preview").appendChild(iframe);
  return iframe;
}

function hideIframe(iframe) {
  document.body.removeChild(iframe);
}
