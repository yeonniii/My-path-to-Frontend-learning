function ajax (type, url, param, dataType, callback) {
  var xhr = null
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = ActiveXObject("Microsoft.XMLHTTP")
  }
  if (type == 'get') {
    //    url=url+"?"+param
    url += "?" + encodeURI(param)
  }
  xhr.open(type, url, true)

  var data = null
  if (type == "post") {
    data = param
    xhr.setRequestHeader("content-Type", "application/x-www-form-urlencoded")
  }

  xhr.send(data)
  xhr.onload = function () {
    var data = xhr.responseText
    if (dataType == "json") {
      var data = JSON.parse(data)
    }
    callback(data);

  }

}