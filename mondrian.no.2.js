var c = document.getElementById("no2");

        var verticalOne = c.getContext("2d");
        verticalOne.moveTo(140,0);
        verticalOne.lineTo(140,200);
        verticalOne.lineWidth=3; <!--to increase the width of the stroke-->
        verticalOne.stroke();

        var horizontalOne = c.getContext("2d");
        horizontalOne.moveTo(0,60);
        horizontalOne.lineTo(200,60);
        horizontalOne.stroke();

        var horizontalTwo = c.getContext("2d");
        horizontalTwo.moveTo(140,120);
        horizontalTwo.lineTo(200,120);
        horizontalTwo.stroke();

        var horizontalThree = c.getContext("2d");
        horizontalThree.moveTo(0,198);
        horizontalThree.lineTo(140,198);
        horizontalThree.stroke();


        var regionOne = c.getContext("2d");
        regionOne.fillStyle = "#FF0000";
        regionOne.fillRect(0,0,140,60);
        
        var regionTwo = c.getContext("2d");
        regionOne.fillStyle = "#ffffff";
        regionOne.fillRect(140,0,60,60);
        
        var regionThree = c.getContext("2d");
        regionThree.fillStyle = "#ffffff";
        regionThree.fillRect(0,60,140,200);

				var regionFour = c.getContext("2d");
        regionThree.fillStyle = "#01579B";
        regionThree.fillRect(140,60,60,60);
        
        var regionFive = c.getContext("2d");
        regionThree.fillStyle = "#ffffff";
        regionThree.fillRect(140,120,60,80);
        
        var sLast = c.getContext("2d");
        sLast.moveTo(0,0);
        sLast.lineTo(0,0);
        sLast.stroke();

        var lLast = c.getContext("2d");
        lLast.moveTo(0,0);
        lLast.lineTo(0,0);
        lLast.stroke();
