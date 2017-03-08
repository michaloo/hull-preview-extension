function getIdent() {
  var ident = {};

  // Salesforce Leads
  try {
    ident.email = document.querySelectorAll('.detailList [href*="mailto:"')[0].text;
  } catch (e) {}


  // Next service to integrate with
  // try {
  //   ident.email = document.querySelectorAll('.detailList [href*="mailto:"')[0].text;
  // } catch (e) {}
  return ident;
}
