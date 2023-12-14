function show() {
    document.getElementById("right").style = "display:flex";
    document.getElementById("hide").style = "display:block";
    document.getElementById("show").style = "display:none";
}
function hide() {
    document.getElementById("right").style = "display:none";
    document.getElementById("show").style = "display:block";
    document.getElementById("hide").style = "display:none";
}
function changeCss() {
    var bodyElement = document.getElementById("body");
    var cover = document.getElementById("cover");
    var blob = document.getElementById("blob");
    this.scrollY > 30 ? cover.style.opacity = 0 : cover.style.opacity = 1;
    this.scrollY > 1700 ? blob.style.left = "-100px" : blob.style.left = "170px";
    this.scrollY > 1700 ? blob.style.top = "-35vw" : blob.style.top = "45vw";
}

window.addEventListener("scroll", changeCss, false);