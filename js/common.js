// let hambergurMenu = document.querySelector("#hambergurControl");

// function hambergurMenuControl(){
//     if(hambergurMenu.className == "hambergur-icon-open"){
//         hambergurMenu.className = "hambergur-icon-close";
//         document.getElementsByClassName("hamburger-block")[0].style.right = "7.5%";
//         document.getElementsByClassName("hamburger-block")[0].style.opacity = "1";
//     }else{
//         hambergurMenu.className = "hambergur-icon-open";
//         document.getElementsByClassName("hamburger-block")[0].style.right = "-500px";
//         document.getElementsByClassName("hamburger-block")[0].style.opacity = "0";
//     }
// }
$('#hambergurControl').click(function(){
    console.log($('#hambergurControl').attr('class'));
    if($('#hambergurControl').attr('class') == "hambergur-icon-open"){
        $('#hambergurControl').addClass("hambergur-icon-close");
        $('#hambergurControl').removeClass("hambergur-icon-open");
        $(".hamburger-block").css({
            right: '7.5%' ,
            opacity: '1',
            transform:'rotateY(0turn)'
        });
    }else{
        $('#hambergurControl').addClass("hambergur-icon-open");
        $('#hambergurControl').removeClass("hambergur-icon-close");
        $(".hamburger-block").css({
            right: '-300px' ,
            opacity: '0',
            transform:'rotateY(1turn)'
        })
    }
})



$('#submenuSwitch').click(function(){
    if($('.submenu').css('max-height') == '300px'){
        $('.submenu').css('max-height','0');
        $('#submenuControl').css('transform','rotate(-180deg)');

    }else{
        $('.submenu').css('max-height','300px');
        $('#submenuControl').css('transform','rotate(0deg)');
    }
})

$(function(){
	$('#toTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#toTop').fadeIn(222);
		} else {
			$('#toTop').stop().fadeOut(222);
		}
	}).scroll();
});



// function init(){
//     hambergurMenu.onclick = hambergurMenuControl;

// }

// window.addEventListener("load",init,false);