let hambergurMenu = document.querySelector("#hambergurControl");

function hambergurMenuControl(){
    if(hambergurMenu.className == "hambergur-icon-open"){
        hambergurMenu.className = "hambergur-icon-close";
        document.getElementsByClassName("hamburger-block")[0].style.right = "7.5%";
        document.getElementsByClassName("hamburger-block")[0].style.opacity = "1";
    }else{
        hambergurMenu.className = "hambergur-icon-open";
        document.getElementsByClassName("hamburger-block")[0].style.right = "-500px";
        document.getElementsByClassName("hamburger-block")[0].style.opacity = "0";
    }
}

$('#submenuSwitch').click(function(){
    if($('.submenu').css('max-height') == '300px'){
        $('.submenu').css('max-height','0');
        $('#submenuControl').css('transform','rotate(-180deg)');

    }else{
        $('.submenu').css('max-height','300px');
        $('#submenuControl').css('transform','rotate(0deg)');
    }
})


function init(){
    hambergurMenu.onclick = hambergurMenuControl;

}

window.addEventListener("load",init,false);