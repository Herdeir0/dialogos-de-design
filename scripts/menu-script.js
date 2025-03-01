const elementBody = document.querySelector('html'); 

function toggleDisplay() {
    var element = document.getElementById("menu");
    if (element.style.display === "none") {
        element.style.display = "flex";
        elementBody.style.overflow = "hidden";
    } else {
        element.style.display = "none";
        elementBody.style.overflow = "auto";
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
}