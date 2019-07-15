var request = new XMLHttpRequest();

if (this.readyState == 4 && this.status == 200) {
  var my_JSON_object = JSON.parse(this.responseText);
}
request.open("GET", "https://github.com/vand458/strangerThingsInRTP/blob/master/data/en_US.json", true);
request.send();
alert(my_JSON_object);
