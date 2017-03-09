function getToken() {
	// return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb24iOiJkMTU1ZTk2NS5odWxsYmV0YS5pbyIsInNoaXAiOiI1OGJmZWM3ZThmN2RlMzhhODAwMDAzMzUiLCJzZWNyZXQiOiI4Mjg3ZDI2YzVlNWNmNzI4NDM5ZmM1ZGQzZTI0ZmYzMyJ9.OQCK5zFmEPJS7djuRqLCkjQs-KR6ZgC-5GdWgD1hmzA"
  	return new Promise(function(resolve, reject) {
  		chrome.storage.sync.get("token", function(items) {
  			resolve(items.token);
  		});
  	});
}
