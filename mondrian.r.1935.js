var c = document.getElementById("r1935");

var verticalOne = c.getContext("2d");
verticalOne.beginPath();
verticalOne.moveTo(5,60);
verticalOne.lineTo(5,140);
verticalOne.lineWidth=2.5;
verticalOne.stroke();

var verticalTwo = c.getContext("2d");
verticalTwo.moveTo(90,0);
verticalTwo.lineTo(90,200);
verticalTwo.stroke();

var verticalThree = c.getContext("2d");
verticalThree.moveTo(125,0);
verticalThree.lineTo(125,200);
verticalThree.stroke();

var horizontalOne = c.getContext("2d");
horizontalOne.moveTo(0,60);
horizontalOne.lineTo(200,60);
horizontalOne.stroke();

var horizontalTwo = c.getContext("2d");
horizontalTwo.moveTo(0,140);
horizontalTwo.lineTo(200,140);
horizontalTwo.stroke();

var regionOne = c.getContext("2d");
regionOne.fillStyle = "#FF0000";
regionOne.fillRect(0,0,89,59);

var regionTwo = c.getContext("2d");
regionTwo.fillStyle = "#FFFFFF";
regionTwo.fillRect(91,0,35,59);

var regionThree = c.getContext("2d");
regionThree.fillStyle = "#FFFFFF";
regionThree.fillRect(126,0,75,59);

var regionFour = c.getContext("2d");
regionFour.fillStyle = "#FFFFFF";
regionFour.fillRect(0,61,5,79);

var regionFive = c.getContext("2d");
regionFive.fillStyle = "#FFFFFF";
regionFive.fillRect(6,61,85,80);

var regionSix = c.getContext("2d");
regionSix.fillStyle = "#FFFFFF";
regionSix.fillRect(91,61,35,80);

var regionSeven = c.getContext("2d");
regionSeven.fillStyle = "#FFFFFF";
regionSeven.fillRect(126,61,85,80);

var regionEight = c.getContext("2d");
regionEight.fillStyle = "#FFFFFF";
regionEight.fillRect(0,141,85,60);

var regionNine = c.getContext("2d");
regionNine.fillStyle = "#FFFFFF";
regionNine.fillRect(91,141,85,60);

var regionTen = c.getContext("2d");
regionTen.fillStyle = "#FFFFFF";
regionTen.fillRect(126,141,85,60);

var sLast = c.getContext("2d");
sLast.moveTo(0,0);
sLast.lineTo(0,0);
sLast.stroke();

var lLast = c.getContext("2d");
lLast.moveTo(0,0);
lLast.lineTo(0,0);
lLast.stroke();
