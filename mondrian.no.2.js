var c2 = document.getElementById("no2");

var verticalOne = c2.getContext("2d");
var horizontalOne = c2.getContext("2d");
var horizontalTwo = c2.getContext("2d");
var horizontalThree = c2.getContext("2d");
var regionOne = c2.getContext("2d");
var regionTwo = c2.getContext("2d");
var regionThree = c2.getContext("2d");
var regionFour = c2.getContext("2d");
var regionFive = c2.getContext("2d");
var regionSix = c2.getContext("2d")

// Create the first vertial line from left to right
verticalOne.beginPath();
verticalOne.moveTo(140,0);
verticalOne.lineTo(140,200);
verticalOne.lineWidth=3; <!--to increase the width of the stroke-->
verticalOne.stroke();

// Create the first horizontal line from top to bottom
horizontalOne.moveTo(0,60);
horizontalOne.lineTo(200,60);
horizontalOne.stroke();

// Create the second horizontal line from top to bottom
horizontalTwo.moveTo(140,120);
horizontalTwo.lineTo(200,120);
horizontalTwo.stroke();

// Create the third horizontal line from top to bottom
horizontalThree.moveTo(0,199);
horizontalThree.lineTo(140,199);
horizontalThree.stroke();

regionOne.fillStyle = "#FFFFFF";
regionOne.fillRect(0,0,140,60);

regionTwo.fillStyle = "#FFCCFF";
regionTwo.fillRect(140,0,60,60);

regionThree.fillStyle = "#FFCCFF";
regionThree.fillRect(0,60,140,200);

regionFour.fillStyle = "#01579B";
regionFour.fillRect(140,60,60,60);

regionFive.fillStyle = "#FFCCFF";
regionFive.fillRect(140,120,60,80);

// Extra blank lines to deal with layering issues
var sLast = c2.getContext("2d");
sLast.moveTo(0,0);
sLast.lineTo(0,0);
sLast.stroke();

var lLast = c2.getContext("2d");
lLast.moveTo(0,0);
lLast.lineTo(0,0);
lLast.stroke();
