var c = document.getElementById("rb1933");

var verticalOne = c.getContext("2d");
verticalOne.beginPath();
verticalOne.moveTo(40,0);
verticalOne.lineTo(40,200);
verticalOne.lineWidth=3;
verticalOne.stroke();

var horizontalOne = c.getContext("2d");
horizontalOne.moveTo(0,40);
horizontalOne.lineTo(200,40);
horizontalOne.stroke();

var horizontalTwo = c.getContext("2d");
horizontalTwo.moveTo(0,80);
horizontalTwo.lineTo(40,80);
horizontalTwo.stroke();

var horizontalThree = c.getContext("2d");
horizontalThree.moveTo(42,190);
horizontalThree.lineTo(200,190);
horizontalThree.stroke();

var regionOne = c.getContext("2d");
regionOne.fillStyle = "#FF0000";
regionOne.fillRect(0,0,40,40);

var regionTwo = c.getContext("2d");
regionTwo.fillStyle = "#FFFFFF";
regionTwo.fillRect(42,0,160,40);

var regionThree = c.getContext("2d");
regionThree.fillStyle = "#FF0000";
regionThree.fillRect(0,42,40,40);

var regionFour = c.getContext("2d");
regionFour.fillStyle = "#FFFFFF";
regionFour.fillRect(42,42,160,150);

var regionFive = c.getContext("2d");
regionFive.fillStyle = "#FFFFFF";
regionFive.fillRect(0,82,40,120);

var regionSix = c.getContext("2d");
regionSix.fillStyle = "#01579B";
regionSix.fillRect(42,192,160,10);

var sLast = c.getContext("2d");
sLast.moveTo(0,0);
sLast.lineTo(0,0);
sLast.stroke();

var lLast = c.getContext("2d");
lLast.moveTo(0,0);
lLast.lineTo(0,0);
lLast.stroke();
