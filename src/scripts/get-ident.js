/**
 * Currently disabled
 * @return {Array}
 */
function getIdent() {
    var ident = {};

    // Salesforce Leads
    try {
      ident.email = document.querySelector('.detailList [href*="mailto:"').text;
      return [ident];
    } catch (e) {}

    // Salesforce Opportunities
    try {
      ident.email = document.querySelector('.listRelatedObject.contactBlock [href*="mailto:"').text;
      return [ident];
    } catch (e) {}

    // Mailchimp
    try {
      ident.email = document.querySelector('#content .lastGroup h4').innerText;
      return [ident];
    } catch (e) {}

    // Hubspot
    try {
      ident.email = document.querySelector('[data-field="email"]').value;
      return [ident];
    } catch(e) {}

    // Gmail
    try {
      var elements = document.querySelectorAll('[email]');
      return Array.prototype.map.call(elements, function(el, i){
        return {
          email: el.getAttribute("email")
        }
      });
    } catch(e) {}
}
