var c2 = document.getElementById("no2");

var verticalOne = c2.getContext("2d");
verticalOne.moveTo(140,0);
verticalOne.lineTo(140,200);
verticalOne.lineWidth=3; <!--to increase the width of the stroke-->
verticalOne.stroke();

var horizontalOne = c2.getContext("2d");
horizontalOne.moveTo(0,60);
horizontalOne.lineTo(200,60);
horizontalOne.stroke();

var horizontalTwo = c2.getContext("2d");
horizontalTwo.moveTo(140,120);
horizontalTwo.lineTo(200,120);
horizontalTwo.stroke();

var horizontalThree = c2.getContext("2d");
horizontalThree.moveTo(0,158);
horizontalThree.lineTo(140,158);
horizontalThree.stroke();

var regionOne = c2.getContext("2d");
regionOne.fillStyle = "#FF0000";
regionOne.fillRect(0,0,140,60);

var regionTwo = c2.getContext("2d");
regionOne.fillStyle = "#ffffff";
regionOne.fillRect(140,0,60,60);

var regionThree = c2.getContext("2d");
regionThree.fillStyle = "#ffffff";
regionThree.fillRect(0,60,140,98);

var regionFour = c2.getContext("2d");
regionFour.fillStyle = "#01579B";
regionFour.fillRect(140,60,60,60);

var regionFive = c2.getContext("2d");
regionFive.fillStyle = "#ffffff";
regionFive.fillRect(140,120,60,80);

var regionSix = c2.getContext("2d")
regionSix.fillStyle = "#ffff00"
regionSix.fillRect(0,160,140,60)

var sLast = c2.getContext("2d");
sLast.moveTo(0,0);
sLast.lineTo(0,0);
sLast.stroke();

var lLast = c2.getContext("2d");
lLast.moveTo(0,0);
lLast.lineTo(0,0);
lLast.stroke();
