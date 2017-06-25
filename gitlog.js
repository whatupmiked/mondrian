window.onload = createInputTag();
window.onload = loadGitLog("0");

function createInputTag() {
    var anchor = document.createElement("div")
    var input = document.createElement("input");
    var gitLog = getGitLog();
    input.type = "range";
    input.min = "0";
    input.max = gitLog.length - 1;
    input.setAttribute("value", "0");
    input.setAttribute("oninput", "loadGitLog(value)");
    anchor.appendChild(input);
    document.body.appendChild(anchor);
}

function loadGitLog(rangeVal) {
    var gitLog = getGitLog();
    var jsElement = document.createElement("script");
    jsElement.type = "application/javascript"
    jsElement.src = "http://rawgit.com/whatupmiked/mondrian/" + gitLog[rangeVal].sha + "/mondrian.no.3.js";
    document.body.appendChild(jsElement);
}

function getGitLog() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://api.github.com/repos/whatupmiked/mondrian/commits", false);
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    return response;
}
