# Mondrian on Git
An HTML5/CSS3/Javascript rendering of Mondrian Compositions accessible online from [here](http://www.whatupmiked.com/mondrian/index.html).
![Example Canvas](https://user-images.githubusercontent.com/15186057/28240127-4fe1ef96-6973-11e7-8978-e854a2c1e3b7.png)

On page load an api request is made to github for the commit history and repository file contents. Each time the slider is moved the javascript file for that canvas and that point in the commit history is loaded from rawgithub.com.

## Adding to the repository
 1. Modify the values of an existing `mondrian.NAME.js` file and push your changes.
 2. Add a new file named `mondrian.NAME.js` to the repository.

## File Relationship
 - **index.html:** This file is is the main HTML page that contains references to the location of the javascript to execute in the `<script>` tag, the main template to use for the site, and the CSS file to use for styling the web-page elements.
 - **site.xml:** This is a CSS file used to change the look and feel of the web-page. Right now it is commented out in the index.html file using the !.
 - **gitlog.js:** This is the script that dynamically generates the slide bar, mondrian canvas displays, and the 3 column table based on the contents of the git respository hosted on github.
 - **mondrian.NAME.js:** The javascript file that generates the lines and regions to display on the respective mondrian canvas.

## Generating a new canvas or altering an existing canvas
The best way to test your canvas is using https://jsfiddle.net/.
![jsfiddle example](https://user-images.githubusercontent.com/15186057/27844852-74c8b3d2-611f-11e7-993d-a1ac30187703.png)

 1. Place the contents of your `mondrian.NAME.js` file into the 'javascript' portion of jsfiddle window.
 ```javascript
 var c = document.getElementById("yourID");

 var verticalOne = c.getContext("2d");
 verticalOne.beginPath();
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
 regionOne.fillStyle = "#FF0000";
 regionOne.fillRect(0,0,79,99);

 var regionTwo = c.getContext("2d");
 regionTwo.fillStyle = "#FFFFFF";
 regionTwo.fillRect(81,0,139,99);

 var regionThree = c.getContext("2d");
 regionThree.fillStyle = "#FFFFFF";
 regionThree.fillRect(0,101,79,99);

 var regionFour = c.getContext("2d");
 regionFour.fillStyle = "#FFFFFF";
 regionFour.fillRect(81,101,98,88);

 var regionFive = c.getContext("2d");
 regionFive.fillStyle = "#01579B";
 regionFive.fillRect(181,101,19,38);

 var regionSix = c.getContext("2d");
 regionSix.fillStyle = "#FFC300";
 regionSix.fillRect(81,191,58,9);

 var regionSeven = c.getContext("2d");
 regionSeven.fillStyle = "#000000";
 regionSeven.fillRect(141,191,38,9);

 var regionEight = c.getContext("2d");
 regionEight.fillStyle = "#FFFFFF";
 regionEight.fillRect(181,141,19,59);

 var sLast = c.getContext("2d");
 sLast.moveTo(0,0);
 sLast.lineTo(0,0);
 sLast.stroke();

 var lLast = c.getContext("2d");
 lLast.moveTo(0,0);
 lLast.lineTo(0,0);
 lLast.stroke();
 ```
 2. Place the following code in the 'html' portion of your window.
 ```html
 <canvas id="yourID" height="200" width="200"></canvas>
 ```
 3. Change the value of `yourID` to the value between the double quotes in `var c = document.getElementById("no3");` line of the javascript.
 4. Once you are happy with the way the image looks, create a new `mondrian.NAME.js` file and place the javascript from your jsFiddle window into this file in your local repository. Commit the new file to the repository and it should automatically render on the webpage.

## Ignoring the gitlog
To display the web-page without the repository generated gitlog change:
```html
<script src="gitlog.js"> type="text/javascript">
</script>
```
To:
```html
<canvas id="yourID" height="200" width="200"></canvas>
<script src="mondrian.yourID.js" type="text/javascript"></script>
```

## Generating the page from your repository
1. Fork the repository.
2. Change the value of `repository` on line 1 in gitlog.js
```javascript
var repository = "yourusername\yourrepository"
```
3. In a browser like Chrome point your browser to the file-path on your local system. (i.e. `file:///SYSTEMPATH/index.html`)
