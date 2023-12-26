function copy (){
    navigator.clipboard.writeText("https://multiverseweb.github.io/tejas/");
    document.getElementById("clipboard").src="check.png";
    document.getElementById("copy").innerHTML="Copied!";
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
    document.getElementById("share").style.right = "-25vw";
    document.getElementById("by").style.opacity = 0;
    document.getElementById("by").style.transitionDelay = "0s";
    document.getElementById("right").style.left = "-25vw";
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
    var blob = document.getElementById("blob");
    mybutton = document.getElementById("myBtn");
    this.scrollY < 1 ? blob.style.top = "-17%" : blob.style.left = "45vw";
    this.scrollY < 1 ? blob.style.left = "-20%" : blob.style.left = "170px";
    this.scrollY > 80 ? cover.style.opacity = 0 : cover.style.opacity = 1;
    this.scrollY > 200 ? myBtn.style.opacity = 1 : myBtn.style.opacity = 0;
    this.scrollY > 1700 ? blob.style.left = "-100px" : blob.style.left = "170px";
    this.scrollY > 1700 ? blob.style.top = "-35vw" : blob.style.top = "45vw";
}

window.addEventListener("scroll", changeCss, false);
