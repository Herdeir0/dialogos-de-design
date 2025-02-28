function toggleDisplay() {
    var element = document.getElementById("menu");
    if (element.style.top === "-100%") {
        element.style.top = "0%";
        element.style.maxWidth = "100%";
        element.style.padding = "32px 16px 32px 16px";
        element.style.position = "relative";
    } else {
        element.style.maxWidth = "100%";
        element.style.top = "-100%";
        element.style.padding = "0em 0em 0em 0em";
        element.style.position = "absolute";
    }

    var element = document.getElementById("line1");
    if (element.style.rotate === "0deg") {
        element.style.display = "block";
        element.style.rotate = "45deg";
        element.style.marginBottom = "19px";
    } else {
        element.style.display = "block";
        element.style.rotate = "0deg";
        element.style.marginBottom = "10px";
    }
    
    var element = document.getElementById("line3");
    if (element.style.rotate === "0deg") {
        element.style.display = "block";
        element.style.rotate = "-45deg";
    } else {
        element.style.display = "block";
        element.style.rotate = "0deg";
    }
    
    var element = document.getElementById("toggleButton");
    if (element.style.right === "17px") {
        element.style.right = "10px";
    } else {
        element.style.right = "17px";
    }

    var element = document.getElementById("list");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}