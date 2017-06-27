# Mondrian on Git
An HTML5/CSS3/Javascript rendering of Mondrian Compositions accessible online from [here](http://www.whatupmiked.com/mondrian/index.html)

## Adding to the repository
 1. Modify the values of an existing mondrian.<name>.js file and push your changes.
 2. Add a new file named 'mondrian.<name>.js' to the repository.

## File Relationship
<TODO>

## Generating a new canvas or altering an existing canvas
The best way to test your canvas is using https://jsfiddle.net/.
 1. Place the contents of your 'mondrian.<name>.js' file into the 'javascript' portion of jsfiddle window.
 2. Place the following code in the 'html' portion of your window.
 ```html
 <canvas id="yourID" height="200" width="200"></canvas>
 ```
 3. Change the value of "yourID" to the value between the double quotes in 'var c = document.getElementById("no3");' line of the javascript.

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
<TODO>
