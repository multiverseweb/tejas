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
    this.scrollY > 500 ? myBtn.style.display = "block" : myBtn.style.display = "none";
    this.scrollY > 1700 ? blob.style.left = "-100px" : blob.style.left = "170px";
    this.scrollY > 1700 ? blob.style.top = "-35vw" : blob.style.top = "45vw";
}

window.addEventListener("scroll", changeCss, false);
