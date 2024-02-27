
function getRandomIndex(totalItems) 
{
	return Math.floor(Math.random() * totalItems);
}

    // kallar random inehållet
    function displayRandomContent() 
    {
	// lista med bilder
	var imageFiles = ["meny1.png", "meny2.png", "meny3.png"];
    
	// random nummer av hur många bilder
	var randomIndex = getRandomIndex(imageFiles.length);
    
	// får element av bild
	var imageElement = document.querySelector(".image-container img");
    
	// ger källan för attribut
	imageElement.src = imageFiles[randomIndex];
    }
    
    // kallar på funktion
	window.onload = function() 
	{
		displayRandomContent();
	};
	