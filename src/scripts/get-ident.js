function getIdent() {
  return new Promise(function(resolve, reject) {
    var ident = {};

    // Salesforce Leads
    try {
      ident.email = document.querySelector('.detailList [href*="mailto:"').text;
    } catch (e) {}

    // Salesforce Opportunities
    try {
      ident.email = document.querySelector('.listRelatedObject.contactBlock [href*="mailto:"').text;
    } catch (e) {}

    // Mailchimp
    try {
      ident.email = document.querySelector('#content .lastGroup h4').innerText;
    } catch (e) {}

    // Hubspot
    try {
      ident.email = document.querySelector('[data-field="email"]').value;
    } catch(e) {}

    resolve(ident);
  });
}
