let animTimer;
let animTwoTimer;
let headerOpTimer;
let clipData;
let hambergurMenu;
// function anim(){
//     clipData = document.getElementById("clipData");
//     clipData.style.clipPath = "ellipse(8% 18% at 50% 50%)";
//     clearInterval(animTimer);
// }

// function animTwo(){
//     clipData = document.getElementById("clipData");
//     clipData.style.clipPath = "ellipse(80% 180% at 50% 50%)";
//     clearInterval(animTwoTimer);
// }

function hambergurMenuControl(){
    if(hambergurMenu.className == "hambergur-icon-open"){
        hambergurMenu.className = "hambergur-icon-close";
        document.getElementsByClassName("hamburger-menu")[0].style.right = "0";
        document.getElementsByClassName("hamburger-menu")[0].style.opacity = "1";
    }else{
        hambergurMenu.className = "hambergur-icon-open";
        document.getElementsByClassName("hamburger-menu")[0].style.right = "-450px";
        document.getElementsByClassName("hamburger-menu")[0].style.opacity = "0";
    }
}
function init(){
    hambergurMenu = document.querySelector("#hambergurControl");
    hambergurMenu.onclick = hambergurMenuControl;
}

window.addEventListener("load",init,false);
// window.addEventListener("scroll", function(){
//     document.getElementsByClassName("nav-block")[0].style.background = "orange";
// })