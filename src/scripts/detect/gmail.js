function detectGmail() {
  if (window.location.hash === "#inbox") {
    return toggleSidebar(false);
  }

  if (window.location.hash.match("#inbox/")) {
    try {
      var newIdent = {
        email: document.querySelector('[role="presentation"] [email]').getAttribute("email")
      };
      var loaded = loadIdent(newIdent);
      toggleSidebar(loaded ? true : undefined);
    } catch (e) {}
  }
}

window.addEventListener("hashchange", detectGmail, false);
window.addEventListener("load", detectGmail, false);
