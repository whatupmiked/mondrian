var c = document.getElementById("no3");

var verticalOne = c.getContext("2d");
verticalOne.moveTo(80,0);
verticalOne.lineTo(80,200);
verticalOne.stroke();

var verticalTwo = c.getContext("2d");
verticalTwo.moveTo(140,191);
verticalTwo.lineTo(140,200);
verticalTwo.stroke();

var verticalThree = c.getContext("2d");
verticalThree.moveTo(180,101);
verticalThree.lineTo(180,200);
verticalThree.stroke();

var horizontalOne = c.getContext("2d");
horizontalOne.moveTo(0,100);
horizontalOne.lineTo(200,100);
horizontalOne.stroke();

var horizontalTwo = c.getContext("2d");
horizontalTwo.moveTo(181,140);
horizontalTwo.lineTo(200,140);
horizontalTwo.stroke();

var horizontalThree = c.getContext("2d");
horizontalThree.moveTo(81,190);
horizontalThree.lineTo(179,190);
horizontalThree.stroke();

var regionOne = c.getContext("2d");
regionOne.fillStyle = "#000000";
regionOne.fillRect(0,0,79,99);

var regionTwo = c.getContext("2d");
regionTwo.fillStyle = "#FF0000";
regionTwo.fillRect(81,0,139,99);

var regionThree = c.getContext("2d");
regionThree.fillStyle = "#000000";
regionThree.fillRect(0,101,79,99);

var regionFour = c.getContext("2d");
regionFour.fillStyle = "#01579B";
regionFour.fillRect(81,101,98,88);

var regionFive = c.getContext("2d");
regionFive.fillStyle = "#FFFFFF";
regionFive.fillRect(181,101,19,38);

var regionSix = c.getContext("2d");
regionSix.fillStyle = "#FFC300";
regionSix.fillRect(81,191,58,9);

var regionSeven = c.getContext("2d");
regionSeven.fillStyle = "#FFFFFF";
regionSeven.fillRect(141,191,38,9);

var regionEight = c.getContext("2d");
regionEight.fillStyle = "#000000";
regionEight.fillRect(181,141,19,59);

var sLast = c.getContext("2d");
sLast.moveTo(0,0);
sLast.lineTo(0,0);
sLast.stroke();

var lLast = c.getContext("2d");
lLast.moveTo(0,0);
lLast.lineTo(0,0);
lLast.stroke();
