
function getVendorList(e) {
  var instance = "instance-name";

  Logger.log("getVendorList running");
  
  var api_key = "abcd";
  var api_secret = "1234";

  var basic_auth_encoded = "Basic " + Utilities.base64Encode(api_key + ":" + api_secret)
    
  // Because payload is a JavaScript object, it is interpreted as
  // as form data. (No need to specify contentType; it automatically
  // defaults to either 'application/x-www-form-urlencoded'
  // or 'multipart/form-data')
  var options = {
    'method' : 'GET',
    //'payload' : JSON.stringify(data),
    'muteHttpExceptions': true,
    'contentType': 'application/json',
    'headers': {
      'Authorization': basic_auth_encoded
    }
  };
  var response = UrlFetchApp.fetch(`https://${instance}.api.zengrc.com/api/v2/vendors`, options);
  Logger.log(response.getContentText());
}


