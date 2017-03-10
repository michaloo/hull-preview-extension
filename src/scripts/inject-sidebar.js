function injectSidebar(src) {
  var div = document.createElement("div");
  div.id = "hull-preview";
  div.setAttribute("style", "display: none; position: fixed;top: 0;right: 0;bottom: 0;width: 20%;height: 100%;background: white;z-index:9999;border: none;border-left: 1px solid #7d7d84;");
  document.body.appendChild(div);

  var p = document.createElement("p");
  p.id = "hull-preview-placeholder";
  p.innerText = "Select an email address and use context menu to look up the user in Hull Database";
  p.setAttribute("style", "font-family: sans-serif; margin: 50px 20px 10px; text-align: center;");
  div.appendChild(p);

  return div;
}
