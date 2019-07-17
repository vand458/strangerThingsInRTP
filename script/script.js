/* var data = {
    "heading": "Stranger Things in RTP",
    "description": "The Duffer Brothers, born and raised in Durham, drop quite a few Durham-area references in the Emmy-winning hit sci-fi series 'Stranger Things' that they write, direct and produce.",
    "snippets": [
        "It's where Cornwallis and Kerley meet. - Hopper",
        "Described as 'A love letter to the ’80s classics that captivated a generation,' \"Stranger Things\" is set in 1983 in Indiana, \"where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.\"",
        "Despite the fact that none of the series was filmed in Durham or North Carolina (it was filmed in Georgia), a ton of references to the region are hidden in the show."
    ],
    "locations": [
        "Kerley Road, Durham",
        "Loch Ora",
        "Eno River",
        "Forest Hills Park",
        "Jordan Lake"
    ],
    "video-embed": "https://www.newsobserver.com/news/local/article182498126.html/video-embed",
    "quote": {
        "text": "We have Mirkwood which is, of course, at the intersection of Cornwallis and Kerley, which is really close to where we grew up",
        "author": "Matt Duffer"
    },
    "gallery": [{
            "src": "https://vignette.wikia.nocookie.net/strangerthings8338/images/6/6b/The_Vanishing_of_Will_Byers_S01-E01_SS_005.png/revision/latest/scale-to-width-down/620",
            "text": "Intersection of Cornwallis and Kerley"
        },
        {
            "src": "https://www.newsobserver.com/news/local/rjhbpb/picture182497786/alternates/FREE_768/IMG_DISPLAY-ST_201-202_U_2_1_C9CM2NMI_L350297312",
            "text": "Trick-or-treating on Loch Nora"
        },
        {
            "src": "https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1",
            "reference": "https://nationalpost.com/entertainment/television/inside-the-upside-down-the-life-of-will-byers-continues-to-spiral-in-episode-5-of-stranger-things-2",
            "text": "Drawings on the wall between Eno river and Jordan Lake"
        },
        {
            "src": "https://vignette.wikia.nocookie.net/strangerthings8338/images/1/1d/ST-Hawkins-Map.png",
            "text": "Map of Hawkins"
        }
    ],
    "episode-list": [{
            "season": 2,
            "name": "Chapter Nine: The Gate",
            "rating": 9.4
        },
        {
            "season": 2,
            "name": "Chapter Eight: The Mind Flayer",
            "rating": 9.3
        },
        {
            "season": 1,
            "name": "Chapter Eight: The Upside Down",
            "rating": 9.3
        },
        {
            "season": 2,
            "name": "Chapter Six: The Spy",
            "rating": 9.2
        },
        {
            "season": 1,
            "name": "Chapter Seven: The Bathtub",
            "rating": 9.1
        },
        {
            "season": 2,
            "name": "Chapter Five: Dig Dug",
            "rating": 8.9
        },
        {
            "season": 1,
            "name": "Chapter Three: Holly, Jolly",
            "rating": 8.9
        },
        {
            "season": 1,
            "name": "Chapter Four: The Body",
            "rating": 8.9
        },
        {
            "season": 1,
            "name": "Chapter Six: The Monster",
            "rating": 8.8
        },
        {
            "season": 2,
            "name": "Chapter Four: Will the Wise",
            "rating": 8.7
        },
        {
            "season": 2,
            "name": "Chapter Three: The Pollywog",
            "rating": 8.7
        },
        {
            "season": 1,
            "name": "Chapter Five: The Flea and the Acrobat",
            "rating": 8.7
        },
        {
            "season": 1,
            "name": "Chapter One: The Vanishing of Will Byers",
            "rating": 8.6
        },
        {
            "season": 2,
            "name": "Chapter Two: Trick or Treat, Freak",
            "rating": 8.5
        },
        {
            "season": 1,
            "name": "Chapter Two: The Weirdo on Maple Street",
            "rating": 8.5
        },
        {
            "season": 2,
            "name": "Chapter One: MADMAX",
            "rating": 8.4
        },
        {
            "season": 2,
            "name": "Chapter Seven: The Lost Sister",
            "rating": 6.1
        }
    ]
}
*/

var request;
var data;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
/* TODO work around for now, develop own Cross-Origin Resource Sharing implementation */
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/vand458/strangerThingsInRTP/master/data/en_US.json');
request.setRequestHeader("Accept", 'application/json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		data = JSON.parse(request.responseText);
		console.log(data);
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
	
}
request.send();





//console.log(data.description);
//console.log(data["episode-list"]);
