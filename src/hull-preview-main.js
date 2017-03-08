function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var email = "";
  try {
    email = document.querySelectorAll('.detailList [href*="mailto:"')[0].text;
  } catch (e) {

  }

  if (email) {
    var iframe = document.createElement('iframe');
    iframe.src = "https://hull-preview.eu.ngrok.io/preview?hullToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb24iOiJkMTU1ZTk2NS5odWxsYmV0YS5pbyIsInNoaXAiOiI1OGJmZWM3ZThmN2RlMzhhODAwMDAzMzUiLCJzZWNyZXQiOiI4Mjg3ZDI2YzVlNWNmNzI4NDM5ZmM1ZGQzZTI0ZmYzMyJ9.OQCK5zFmEPJS7djuRqLCkjQs-KR6ZgC-5GdWgD1hmzA&email=" + email;
    iframe.setAttribute("style", "position: fixed;top: 0;right: 0;bottom: 0;width: 20%;height: 100%;background: white;z-index:9999;border: none;border-left: 1px solid black;")
    document.body.appendChild(iframe);
  }

})
