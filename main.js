var form = document.getElementById("brickForm");

form.addEventListener('submit', function(event) {

		// Set error paragraphs back to hidden
		document.getElementById("brickWidthError").hidden = true;
		document.getElementById("brickHeightError").hidden = true;
		document.getElementById("wallWidthError").hidden = true;
		document.getElementById("wallHeightError").hidden = true;

		var inchesInFeet = 12;

		event.preventDefault();

		// Grab the dimensions of the bricks
		var brickWidth = document.getElementById("brickWidth").value;
		var brickHeight = document.getElementById("brickHeight").value;

		if ( isNaN(brickWidth) ) {
			// Brick width is Not a Number.  Unhide the appropriate error text and
			// abort
			document.getElementById("brickWidthError").hidden = false;
			return;
		}

		if ( isNaN(brickHeight) ) {
			// Brick height is Not A Number.  Unhide the appropriate error text and
			// abort
			document.getElementById("brickHeightError").hidden = false;
			return;
		}

		// Grab the dimensions of the wall (and convert to inches)
		var widthOfWallFeet = document.getElementById("brickWallWidth").value
		var heightOfWallFeet = document.getElementById("brickWallHeight").value;

		if ( isNaN(widthOfWallFeet) ) {
			// Wall width is Not a Numnber.  Unhide the appropriate error text
			// and abort
			document.getElementById("wallWidthError").hidden = false;
			return;
		}

		if ( isNaN(heightOfWallFeet) ) {
			// Wall height is Not a Number.  Unhide the appropriate error text and
			// abort
			document.getElementById("wallHeightError").hidden = false;
			return;
		}

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
