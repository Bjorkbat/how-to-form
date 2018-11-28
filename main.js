var form = document.getElementById("brickForm");

form.addEventListener('submit', function(event) {

		var inchesInFeet = 12;

		event.preventDefault();

		// Grab the dimensions of the bricks
		var brickWidth = document.getElementById("brickWidth").value;
		var brickHeight = document.getElementById("brickHeight").value;

		// Grab the dimensions of the wall (and convert to inches)
		var widthOfWallFeet = document.getElementById("brickWallWidth").value
		var heightOfWallFeet = document.getElementById("brickWallHeight").value;
		// Convert
		var widthOfWall = widthOfWallFeet * inchesInFeet;
		var heightOfWall = heightOfWallFeet * inchesInFeet;

		// Now let's see how many bricks it will take to build this thing
		var howManyWidthBricks = widthOfWall / brickWidth;
		var howManyHeightBricks = heightOfWall / brickHeight;
		var howManyBricks = howManyWidthBricks * howManyHeightBricks;

		// Now grab all the display elements
		var wallWidthDisplay = document.getElementById("wallWidthDisplay");
		var wallHeightDisplay = document.getElementById("wallHeightDisplay")
		var brickWidthDisplay = document.getElementById("brickWidthDisplay");
		var brickHeightDisplay = document.getElementById("brickHeightDisplay");
		var numberOfBricks = document.getElementById("numberOfBricks");

		// And change their inner html
		wallWidthDisplay.innerHTML = widthOfWallFeet;
		wallHeightDisplay.innerHTML = heightOfWallFeet;
		brickWidthDisplay.innerHTML = brickWidth;
		brickHeightDisplay.innerHTML = brickHeight;
		numberOfBricks.innerHTML = howManyBricks;

});
