function changeImage(imageClass) {
	// Lista med bildkällor
	var imageFiles = ["meny1.png", "meny2.png", "meny3.png"];
	
	// Hitta den aktuella bilden med hjälp av klassnamnet
	var imageElement = document.querySelector("." + imageClass);
	
	// Generera ett slumpmässigt index för att välja en ny bildkälla
	var randomIndex = Math.floor(Math.random() * imageFiles.length);
	
	// Byt ut källan till bilden med den slumpmässigt valda bilden
	imageElement.src = imageFiles[randomIndex];
}