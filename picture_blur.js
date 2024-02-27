function enlargeImageOnHover(element) 
{
	element.addEventListener('mouseover', function() 
	{
	    element.style.transform = 'scale(1.05)'; // Öka storleken på bilden med 5%
	    element.style.transition = 'transform 0.3s'; // Lägg övergång
	});
    
	element.addEventListener('mouseout', function() 
	{
	    element.style.transform = 'scale(1)'; // Återställ till normal storlek
	});
}
    
    	// Hämta alla bild-element
    	var images = document.querySelectorAll('.PizzaBild, .Pastabild, .Saladbild, .Hamburgarebild, .Kebabbild, .Barnmenybild');
	
    	// kalla funktion för alla bilder
    		images.forEach(function(image) 
		{

			enlargeImageOnHover(image);

    		}
	);
	
    