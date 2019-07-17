var request;
var data;
var jsonUrl = "https://raw.githubusercontent.com/vand458/strangerThingsInRTP/master/data/en_US.json";
var jsonUrl_en = "https://raw.githubusercontent.com/vand458/strangerThingsInRTP/master/data/en_US.json";
var jsonUrl_la = "https://raw.githubusercontent.com/vand458/strangerThingsInRTP/master/data/la_PG.json";

  //TODO change jsonUrl based on language selection
updateJsonUrl();

	document.getElementById("english").addEventListener('click', updateJsonUrl);
	document.getElementById("latin").addEventListener('click', updateJsonUrl);
	function updateJsonUrl(event) {
		//event.preventDefault();
		console.log("You change the radio value");

		if (document.querySelector('input[name=lang]:checked').id === "english") {
			jsonUrl = jsonUrl_en;
	} else if (document.querySelector('input[name=lang]:checked').id === "latin")
	{
		jsonUrl = jsonUrl_la;
	}
  console.log (jsonUrl);
  parseJson();
	}



function parseJson() {


  //parsing data
  if (window.XMLHttpRequest) {
  	console.log("hereeeee");
  	//create a new XMLHttpRequest
  	request = new XMLHttpRequest();
  } else {
  	request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  /* TODO work around for now, develop own Cross-Origin Resource Sharing implementation */
  //initializes a newly-created request, or re-initializes an existing one
  request.open('GET', 'https://cors-anywhere.herokuapp.com/' + jsonUrl);
  //sets the value of an HTTP request header
  request.setRequestHeader("Accept", 'application/json');
  request.onreadystatechange = function () {
  	// if fetch operation is completed
  	if ((request.readyState === 4) && (request.status === 200)) {
  		//converts a json string representation to a javascript obj
  		data = JSON.parse(request.responseText);
  	}

  	//update page elements - home sesstion
  	document.getElementById("heading").innerHTML = data.heading;
  	document.getElementById("description").innerHTML = data.description;
  	document.getElementById("snippet1").innerHTML = data.snippets[0];
  	document.getElementById("snippet2").innerHTML = data.snippets[1];
  	document.getElementById("snippet3").innerHTML = data.snippets[2];
  	document.getElementById("video-embed").src = data['video-embed'];

  	//update page elements - rtpReferencesSection sesstion
  	document.getElementById("quoteText").innerHTML = data.quote.text;
  	document.getElementById("quoteAuthor").innerHTML = data.quote.author;
  	document.getElementById("locationKerleyCornwally").alt = data.locations[0];
  	document.getElementById("locationLochNora").alt = data.locations[0];
  	document.getElementById("locationLochNora").innerHTML = data.locations[1];
  	document.getElementById("locationKerleyCornwally").src = data.gallery[0].src;
  	document.getElementById("trickOrTreatLochNoraImg").src = data.gallery[1].src;
  	document.getElementById("trickOrTreatLochNora").innerHTML = data.gallery[1].text;
  	document.getElementById("drawingEnoJordanImg").src = data.gallery[2].src;
  	document.getElementById("drawingEnoJordan").innerHTML = data.gallery[2].text;
  	document.getElementById("mapHawkinsImg").src = data.gallery[3].src;
  	document.getElementById("mapHawkins").innerHTML = data.gallery[3].text;

  	//update page elements - episodeList sesstions

  	document.getElementById("episodeLi2_9Season").innerHTML = data['episode-list'][0].season;
  	document.getElementById("episodeLi2_9Name").innerHTML = data['episode-list'][0].name;
  	document.getElementById("episodeLi2_9Rating").innerHTML = data['episode-list'][0].rating;

  	document.getElementById("episodeLi2_8Season").innerHTML = data['episode-list'][1].season;
  	document.getElementById("episodeLi2_8Name").innerHTML = data['episode-list'][1].name;
  	document.getElementById("episodeLi2_8Rating").innerHTML = data['episode-list'][1].rating;

  	document.getElementById("episodeLi1_8Season").innerHTML = data['episode-list'][2].season;
  	document.getElementById("episodeLi1_8Name").innerHTML = data['episode-list'][2].name;
  	document.getElementById("episodeLi1_8Rating").innerHTML = data['episode-list'][2].rating;

  	document.getElementById("episodeLi2_6Season").innerHTML = data['episode-list'][3].season;
  	document.getElementById("episodeLi2_6Name").innerHTML = data['episode-list'][3].name;
  	document.getElementById("episodeLi2_6Rating").innerHTML = data['episode-list'][3].rating;

  	document.getElementById("episodeLi1_7Season").innerHTML = data['episode-list'][4].season;
  	document.getElementById("episodeLi1_7Name").innerHTML = data['episode-list'][4].name;
  	document.getElementById("episodeLi1_7Rating").innerHTML = data['episode-list'][4].rating;


  	document.getElementById("episodeLi2_5Season").innerHTML = data['episode-list'][5].season;
  	document.getElementById("episodeLi2_5Name").innerHTML = data['episode-list'][5].name;
  	document.getElementById("episodeLi2_5Rating").innerHTML = data['episode-list'][5].rating;

  	document.getElementById("episodeLi1_3Season").innerHTML = data['episode-list'][6].season;
  	document.getElementById("episodeLi1_3Name").innerHTML = data['episode-list'][6].name;
  	document.getElementById("episodeLi1_3Rating").innerHTML = data['episode-list'][6].rating;

  	document.getElementById("episodeLi1_4Season").innerHTML = data['episode-list'][7].season;
  	document.getElementById("episodeLi1_4Name").innerHTML = data['episode-list'][7].name;
  	document.getElementById("episodeLi1_4Rating").innerHTML = data['episode-list'][7].rating;

  	document.getElementById("episodeLi1_6Season").innerHTML = data['episode-list'][8].season;
  	document.getElementById("episodeLi1_6Name").innerHTML = data['episode-list'][8].name;
  	document.getElementById("episodeLi1_6Rating").innerHTML = data['episode-list'][8].rating;

  	document.getElementById("episodeLi2_4Season").innerHTML = data['episode-list'][9].season;
  	document.getElementById("episodeLi2_4Name").innerHTML = data['episode-list'][9].name;
  	document.getElementById("episodeLi2_4Rating").innerHTML = data['episode-list'][9].rating;

  	document.getElementById("episodeLi2_3Season").innerHTML = data['episode-list'][10].season;
  	document.getElementById("episodeLi2_3Name").innerHTML = data['episode-list'][10].name;
  	document.getElementById("episodeLi2_3Rating").innerHTML = data['episode-list'][10].rating;

  	document.getElementById("episodeLi1_5Season").innerHTML = data['episode-list'][11].season;
  	document.getElementById("episodeLi1_5Name").innerHTML = data['episode-list'][11].name;
  	document.getElementById("episodeLi1_5Rating").innerHTML = data['episode-list'][11].rating;

  	document.getElementById("episodeLi1_1Season").innerHTML = data['episode-list'][12].season;
  	document.getElementById("episodeLi1_1Name").innerHTML = data['episode-list'][12].name;
  	document.getElementById("episodeLi1_1Rating").innerHTML = data['episode-list'][12].rating;

  	document.getElementById("episodeLi2_2Season").innerHTML = data['episode-list'][13].season;
  	document.getElementById("episodeLi2_2Name").innerHTML = data['episode-list'][13].name;
  	document.getElementById("episodeLi2_2Rating").innerHTML = data['episode-list'][13].rating;

  	document.getElementById("episodeLi1_2Season").innerHTML = data['episode-list'][14].season;
  	document.getElementById("episodeLi1_2Name").innerHTML = data['episode-list'][14].name;
  	document.getElementById("episodeLi1_2Rating").innerHTML = data['episode-list'][14].rating;

  	document.getElementById("episodeLi2_1Season").innerHTML = data['episode-list'][15].season;
  	document.getElementById("episodeLi2_1Name").innerHTML = data['episode-list'][15].name;
  	document.getElementById("episodeLi2_1Rating").innerHTML = data['episode-list'][15].rating;

  	document.getElementById("episodeLi2_7Season").innerHTML = data['episode-list'][16].season;
  	document.getElementById("episodeLi2_7Name").innerHTML = data['episode-list'][16].name;
  	document.getElementById("episodeLi2_7Rating").innerHTML = data['episode-list'][16].rating;

  }
  //send the request to the server
  request.send();


}
