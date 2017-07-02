window.onload = createInputTag();
window.onload = createCanvas();
window.onload = loadGitLog("0");

function createInputTag() {
    // Create the commit log range slider
    var anchor = document.createElement("div")
    var input = document.createElement("input");
    var gLog = getGitLog();
    input.type = "range";
    input.min = "0";
    input.max = gLog.length - 1;
    input.setAttribute("value", "0");
    input.setAttribute("oninput", "loadGitLog(value)");
    anchor.appendChild(input);
    document.body.appendChild(anchor);
}

function loadGitLog(rangeVal) {
    // Dynamically load the canvas script values based on the location in the commit log
    var gitLog = getGitLog();
    var uName = gitLog[rangeVal].commit.author.name;
    var msg = gitLog[rangeVal].commit.message;

    //Clean up and script tags from previous commits
    var oldScript = document.getElementsByClassName("mondrianScript");
    if (oldScript != null) {
        while(oldScript.length > 0) {
            oldScript[0].parentNode.removeChild(oldScript[0]);
        }
    }

    var oldCommitInfo = document.getElementsByClassName("commitinfo");
    if (oldCommitInfo != null) {
        while(oldCommitInfo.length > 0) {
            oldCommitInfo[0].parentNode.removeChild(oldCommitInfo[0]);
        }
    }

    // Inject git commit info into body.
    var gitInfoDiv = document.getElementById("gitinfo");
    var commitNameP = document.createElement("p");
    var commitMsgP = document.createElement("p");
    commitNameP.setAttribute('class', 'commitinfo');
    commitMsgP.setAttribute('class', 'commitinfo');
    var commitName = document.createTextNode("Committer: " + uName);
    var commitMsg = document.createTextNode("Commit message: " + msg);
    commitNameP.appendChild(commitName);
    commitMsgP.appendChild(commitMsg);
    gitInfoDiv.appendChild(commitNameP);
    gitInfoDiv.appendChild(commitMsgP);

    // get the gitTree contents
    var gitTree = getGitTree(gitLog[rangeVal].commit.tree.url);
    // for each mondrian.*.js file in gitLog, run the script
    for ( i = 0; i < gitTree.length; i++ ) {
        if( gitTree[i].path.indexOf("mondrian") != -1 ) {
            var jsElement = document.createElement("script");
            jsElement.type = "application/javascript"
            jsElement.src = "http://rawgit.com/whatupmiked/mondrian/" + gitLog[rangeVal].sha + "/" + gitTree[i].path;
            jsElement.setAttribute('class', 'mondrianScript');
            document.body.appendChild(jsElement);
        }
    }
}

function getGitLog() {
    /// Retrieve the commit history of the github repo
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://api.github.com/repos/whatupmiked/mondrian/commits", false);
    xhttp.send();
    var logResponse = JSON.parse(xhttp.responseText);
    return logResponse;
}

function getGitTree(url) {
    // Fetch the commit.tree.url and return the tree list of contents
    var yhttp = new XMLHttpRequest();
    yhttp.open("GET",url,false);
    yhttp.send();
    var treeResponse = JSON.parse(yhttp.responseText);
    return treeResponse.tree;
}

function createCanvas() {
    // Create Canvas' for script injection based on the mondrian.*.js files in latest repository
    var theTree = getGitTree(getGitLog()[0].commit.tree.url);
    var len = theTree.length
    var mondrianTree = [];
    // Create an array of only the mondrian.js files to facilitate creation of table
    for ( j = 0; j < theTree.length; j++ ) {
        if ( theTree[j].path.indexOf("mondrian") != -1 ) {
            mondrianTree.push(theTree[j]);
        }
    }
    // Stage the table of canvas'
    var tbl = document.createElement('table');
    for ( i = 0; i < mondrianTree.length; i++ ) {
        // Create a 3 column table
        if ( i % 3 == 0 || i == 0 ) {
            var tr = tbl.insertRow(-1);
        }
        // Create a canvas description
        var canvasID = mondrianTree[i].path.replace("mondrian.","");
        canvasID = canvasID.replace(".js", "");
        canvasID = canvasID.replace(".","");
        // Create a canvas element
        var canvasElement = document.createElement("canvas");
        canvasElement.id = canvasID;
        canvasElement.width = "200";
        canvasElement.height = "200";
        // Create a description for the canvas
        var para = document.createElement("p");
        var description = document.createTextNode("Composition " + canvasID);
        para.appendChild(description);
        // Inject the description and the canvas into the table
        var td = tr.insertCell();
        td.appendChild(para);
        td.appendChild(canvasElement);
    }
    document.body.appendChild(tbl);
}
