$(document).ready(function(){
	// Funk tabellceller
	$("td").click(function(){
	    $(this).animate({
		fontSize: "+=150%", // Ändra fontstorlek till dubbelt så stor har ocksås += för att den ska kunna bli större hela tiden
		color: "red"
	    }, "slow"); // Animeringshastighet
	});
    
	// Funk  videospelaren
	$("video").click(function(){
	    $(this).animate({
		width: "+=20", // Öka bredden med 100px
		height: "+=20" // Öka höjden med 100px
		
	    }, "slow"); // Animeringshattighet
	});
	$(document).ready(function(){
		$("td").click(function(){
		    $(this).toggleClass("red-text"); // Växla mellan att lägga till/ta bort klassen "red-text"
		});
	    });
    });
    