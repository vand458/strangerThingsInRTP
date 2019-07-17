var data = {
    "heading": "angerStray ingsThay inyay RTP",
    "description": "ethay Duffer othersbray , ornbay andyay aisedray inyay Durham , opdray uiteqay ayay ewfay urham-areaday eferencesray inyay ethay emmy-winningyay ithay i-fiscay eriessay 'angerstray ings'thay atthay eythay itewray , irectday andyay oducepray .",
    "snippets": [
        "it'syay erewhay ornwalliscay andyay erleykay eetmay .  - Hopper",
        "escribedday asyay 'a ovelay etterlay otay ethay ’80s assicsclay atthay aptivatedcay ayay enerationgay , ' \"stranger things\" isyay etsay inyay 1983 inyay indianayay , \"where ayay oungyay oybay anishesvay intoyay inthay airyay . asyay iendsfray , amilyfay andyay ocallay olicepay earchsay orfay answersyay , eythay areyay awndray intoyay anyay extraordinaryyay erymystay involvingyay op-secrettay overnmentgay experimentsyay , errifyingtay upernaturalsay orcesfay andyay oneyay eryvay angestray ittlelay irlgay . \"",
        "espiteday ethay actfay atthay onenay ofyay ethay eriessay asway ilmedfay inyay Durham oryay orthnay arolinacay (it asway ilmedfay inyay georgia) , ayay ontay ofyay eferencesray otay ethay egionray areyay iddenhay inyay ethay owshay ."
    ],
    "locations" : [
        "Kerley Road, Durham",
        "Loch Ora",
        "Eno River",
        "Forest Hills Park",
        "Jordan Lake"
    ],
    "video-embed": "https://www.newsobserver.com/news/local/article182498126.html/video-embed",
    "quote": {
        "text": "eway avehay Mirkwood ichwhay isyay , ofyay oursecay , atyay ethay intersectionyay ofyay ornwalliscay andyay erleykay , ichwhay isyay eallyray oseclay otay erewhay eway ewgray upyay",
        "author": "Matt Duffer"
    },
    "gallery": [
        {
            "src": "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/The_Vanishing_of_Will_Byers_S01-E01_SS_005.png/revision/latest/scale-to-width-down/620",
            "text": "intersectionyay ofyay Cornwallis andyay Kerley"
        },
        {
            "src": "https://www.newsobserver.com/news/local/rjhbpb/picture182497786/alternates/FREE_768/IMG_DISPLAY-ST_201-202_U_2_1_C9CM2NMI_L350297312",
            "text": "ick-or-treatingtray onyay Loch Nora"
        },
        {
            "src": "https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1",
            "reference": "https://nationalpost.com/entertainment/television/inside-the-upside-down-the-life-of-will-byers-continues-to-spiral-in-episode-5-of-stranger-things-2",
            "text": "awingsdray onyay ethay allway etweenbay Eno iverray andyay Jordan akelay"
        },
        {
            "src": "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/1d/ST-Hawkins-Map.png",
            "text": "apmay ofyay Hawkins"
        }
    ],
    "episode-list": [
        {
            "season": 2,
            "name": "apterchay nine: ethay ategay",
            "rating": 9.4
        },
        {
            "season": 2,
            "name": "apterchay eight: ethay indmay ayerflay",
            "rating": 9.3
        },
        {
            "season": 1,
            "name": "apterchay eight: ethay upsideyay ownday",
            "rating": 9.3
        },
        {
            "season": 2,
            "name": "apterchay six: ethay yspay",
            "rating": 9.2
        },
        {
            "season": 1,
            "name": "apterchay seven: ethay athtubbay",
            "rating": 9.1
        },
        {
            "season": 2,
            "name": "apterchay five: igday ugday",
            "rating": 8.9
        },
        {
            "season": 1,
            "name": "apterchay three: ollyhay , ollyjay",
            "rating": 8.9
        },
        {
            "season": 1,
            "name": "apterchay four: ethay odybay",
            "rating": 8.9
        },
        {
            "season": 1,
            "name": "apterchay six: ethay onstermay",
            "rating": 8.8
        },
        {
            "season": 2,
            "name": "apterchay four: Will ethay iseway",
            "rating": 8.7
        },
        {
            "season": 2,
            "name": "apterchay three: ethay ollywogpay",
            "rating": 8.7
        },
        {
            "season": 1,
            "name": "apterchay five: ethay eaflay andyay ethay acrobatyay",
            "rating": 8.7
        },
        {
            "season": 1,
            "name": "apterchay one: ethay anishingvay ofyay Will Byers",
            "rating": 8.6
        },
        {
            "season": 2,
            "name": "apterchay two: icktray oryay eattray , eakfray",
            "rating": 8.5
        },
        {
            "season": 1,
            "name": "apterchay two: ethay eirdoway onyay aplemay eetstray",
            "rating": 8.5
        },
        {
            "season": 2,
            "name": "apterchay one: MADMAX",
            "rating": 8.4
        },
        {
            "season": 2,
            "name": "apterchay seven: ethay ostlay istersay",
            "rating": 6.1
        }
    ]
}

document.getElementById("heading").innerHTML = data.heading;
document.getElementById("description").innerHTML = data.description;
document.getElementById("snippet1").innerHTML = data.snippets[0];
document.getElementById("snippet2").innerHTML = data.snippets[1];
document.getElementById("snippet3").innerHTML = data.snippets[2];
document.getElementById("video-embed").src = data['video-embed'];

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

//episode list
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



/* TODO fix  blocked by CORS policy: error!

var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var items = JSON.parse(request.responseText);
		console.log(items);
	}
}
request.send();
*/
//console.log(data.description);
//console.log(data["episode-list"]);
