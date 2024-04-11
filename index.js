console.log("Tejas' Codes :)");
function copy() {
    navigator.clipboard.writeText("tejasgupta.netlify.app");
    document.getElementById("copy").innerHTML = "Copied!&nbsp;✓";
}
function show2() {
    document.getElementById("blind").style.height = "100vh";
    document.getElementById("by").style.opacity = 1;
    document.getElementById("by").style.transitionDelay = "0.5s";
    document.getElementById("hide2").style = "display:block";
}
function hide2() {
    document.getElementById("blind").style.height = "0";
    document.getElementById("by").style.opacity = 0;
    document.getElementById("by").style.transitionDelay = "0s";
    document.getElementById("show2").style = "display:block";
    document.getElementById("hide2").style = "display:none";
}

function show() {
    document.getElementById("blind").style.height = "100vh";
    document.getElementById("right").style.opacity = 1;
    document.getElementById("share").style.opacity = 1;
    document.getElementById("share").style.right = "5vw";
    document.getElementById("share").style.display = "flex";
    document.getElementById("by").style.opacity = 1;
    document.getElementById("by").style.transitionDelay = "0.5s";
    document.getElementById("right").style.left = "5vw";
    document.getElementById("right").style.display = "flex";
    document.getElementById("hide").style = "display:block";
}
function hide() {
    document.getElementById("blind").style.height = "0";
    document.getElementById("right").style.opacity = 0;
    document.getElementById("share").style.opacity = 0;
    document.getElementById("share").style.right = "-80vw";
    document.getElementById("by").style.opacity = 0;
    document.getElementById("by").style.transitionDelay = "0s";
    document.getElementById("right").style.left = "-80vw";
    document.getElementById("show").style = "display:block";
    document.getElementById("hide").style = "display:none";
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function changeCss() {
    var bodyElement = document.getElementById("body");
    var cover = document.getElementById("cover");
    mybutton = document.getElementById("myBtn");
    this.scrollY > 80 ? cover.style.opacity = 0 : cover.style.opacity = 1;
    this.scrollY > 200 ? myBtn.style.opacity = 1 : myBtn.style.opacity = 0;
}

window.addEventListener("scroll", changeCss, false);

function parallax2() {
    var left = document.getElementById("left");
    var yP = 0 - window.scrollY / 13;
    left.style.top = 0 + yP + "%";
}

function parallax() {
    var s = document.getElementById("middle");
    var yPos = 0 - window.scrollY / 12;
    s.style.top = 0 + yPos + "%";
}

function parallax1() {
    var l = document.getElementById("last");
    var yPosition = 0 - window.scrollY / 100;
    l.style.top = 0 + yPosition + "%";
}


window.addEventListener("scroll", function () {
    parallax1();
    parallax();
    parallax2();
});


const targetCount2 = 5000;
const targetCount = 27800;
const counterElement = document.getElementById('loc');
const counterElement2 = document.getElementById('connections');
function updateCounter(count) {
    counterElement.textContent = count;
}
function startCounter() {
    let count = 27500;
    const intervalId = setInterval(function () {
        if (count < targetCount) {
            count++;
            updateCounter(count);
        } else {
            clearInterval2(intervalId);
        }
    }, 4);
}


function updateCounter2(count2) {
    counterElement2.textContent = count2;
}
function startCounter2() {
    let count2 = 4700;
    const intervalId2 = setInterval(function () {
        if (count2 < targetCount2) {
            count2++;
            updateCounter2(count2);
        } else {
            clearInterval(intervalId2);
        }
    }, 4);
}



var addFunctionOnWindowLoad = function(callback){
    if(window.addEventListener){
        window.addEventListener('load',callback,false);
    }else{
        window.attachEvent('onload',callback);
    }
}

addFunctionOnWindowLoad(startCounter);
addFunctionOnWindowLoad(startCounter2);