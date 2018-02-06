// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Bop to the Top",
	"artist":"High School Muscial",
	"mp3URL":"https://open.spotify.com/track/4gqjxYiEorFk0y9b92uFdE",
	"imageURL":"https://vignette.wikia.nocookie.net/hsm/images/0/07/Bop_to_the_Top.jpg/revision/latest?cb=20070510230153",
}

var myPlayList = [
	{
	"title":"Bop to the Top",
	"artist":"High School Muscial",
	"mp3URL":"https://open.spotify.com/track/4gqjxYiEorFk0y9b92uFdE",
	"imageURL":"https://vignette.wikia.nocookie.net/hsm/images/0/07/Bop_to_the_Top.jpg/revision/latest?cb=20070510230153",
	},
	{
		"title":"Get'cha Head in the Game",
		"artist":"High School Muscial",
		"mp3URL":"https://open.spotify.com/album/5t3TtafWdQEg3N38GNOx1T",
		"imageURL":"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/10/2/enhanced/buzzfeed-prod-web-03/enhanced-buzz-10695-1512889437-0.jpg?downsize=715:*&output-format=auto&output-quality=auto",
	},
	{
		"title":"What time is it",
		"artist":"High School Muscial",
		"mp3URL":"https://open.spotify.com/artist/2gUMs9PE8XZVQyzCDqaYmW",
		"imageURL":"https://media.giphy.com/media/ac5zQ3YDEvIpq/giphy.gif",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
displayList();


});

function displayList(){


  
for (var i=0; i < myPlayList.length; i = i + 1) {
	  	$('.songs').append("<p> Title: " + (myPlayList[i].title)+ "</p>");
        $('.songs').append("<p>Artist: " + myPlayList[i].artist + "</p>");
		$('.songs').append(" <a href=" + myPlayList[i].mp3URL + "> Listen </a>");
		$('.songs').append("<img src=" + myPlayList[i].imageURL + ">");
	}
}
  


function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
