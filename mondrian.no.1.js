var c = document.getElementById("no1");

        var verticalOne = c.getContext("2d");
        verticalOne.moveTo(90,0);
        verticalOne.lineTo(90,200);
        verticalOne.stroke();

        var verticalTwo = c.getContext("2d");
        verticalTwo.moveTo(95,0);
        verticalTwo.lineTo(95,200);
        verticalTwo.stroke();

        var verticalThree = c.getContext("2d");
        verticalThree.moveTo(165,120);
        verticalThree.lineTo(165,200);
        verticalThree.stroke();

        var horizontalOne = c.getContext("2d");
        horizontalOne.moveTo(0,90);
        horizontalOne.lineTo(200,90);
        horizontalOne.stroke();

        var horizontalTwo = c.getContext("2d");
        horizontalTwo.moveTo(0,95);
        horizontalTwo.lineTo(200,95);
        horizontalTwo.stroke();

        var horizontalThree = c.getContext("2d");
        horizontalThree.moveTo(0,120);
        horizontalThree.lineTo(200,120);
        horizontalThree.stroke();
        
        var horizontalFour = c.getContext("2d");
        horizontalThree.moveTo(95,185);
        horizontalThree.lineTo(166,185);
        horizontalThree.stroke();

        var regionOne = c.getContext("2d");
        regionOne.fillStyle = "#E2E2E2";
        regionOne.fillRect(0,0,90,90);
        
        var regionTwo = c.getContext("2d");
        regionOne.fillStyle = "#CCCCFF";
        regionOne.fillRect(90,0,5,90);
        
        var regionThree = c.getContext("2d");
        regionOne.fillStyle = "#CCCCFF";
        regionOne.fillRect(95,0,105,90);
        
        var regionFour = c.getContext("2d");
        regionOne.fillStyle = "#008000";
        regionOne.fillRect(0,90,90,5);
        
        var regionFive = c.getContext("2d");
        regionOne.fillStyle = "#FFC300";
        regionOne.fillRect(90,90,5,5);
        
        var regionSix = c.getContext("2d");
        regionOne.fillStyle = "#008000";
        regionOne.fillRect(95,90,105,5);
        
        var regionSeven = c.getContext("2d");
        regionOne.fillStyle = "#CCCCFF";
        regionOne.fillRect(0,95,90,25);
        
        var regionEnight = c.getContext("2d");
        regionOne.fillStyle = "#CCCCFF";
        regionOne.fillRect(90,95,5,25);
        
        var regionNine = c.getContext("2d");
        regionOne.fillStyle = "#FFC300";
        regionOne.fillRect(95,95,105,25);
        
        var regionTen = c.getContext("2d");
        regionOne.fillStyle = "#CCCCFF";
        regionOne.fillRect(0,120,90,80);
       
        var regionEleven = c.getContext("2d");
        regionOne.fillStyle = "#008000";
        regionOne.fillRect(90,120,5,80);
        
        var regionTwelve = c.getContext("2d");
        regionOne.fillStyle = "#ffffff";
        regionOne.fillRect(95,120,70,65);
        
        var regionThirteen = c.getContext("2d");
        regionOne.fillStyle = "#66FF99";
        regionOne.fillRect(95,185,70,65);
        
        var regionFourteen = c.getContext("2d");
        regionOne.fillStyle = "#ffffff";
        regionOne.fillRect(165,120,35,80);
        
        var sLast = c.getContext("2d");
        sLast.moveTo(0,0);
        sLast.lineTo(0,0);
        sLast.stroke();

        var lLast = c.getContext("2d");
        lLast.moveTo(0,0);
        lLast.lineTo(0,0);
        lLast.stroke();
