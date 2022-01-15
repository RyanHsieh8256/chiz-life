
$('#hambergurControl').click(function(){
    console.log($('#hambergurControl').attr('class'));
    if($('#hambergurControl').attr('class') == "hambergur-icon-open"){
        $('#hambergurControl').addClass("hambergur-icon-close");
        $('#hambergurControl').removeClass("hambergur-icon-open");
        $(".hamburger-block").css({
            right: '7.5%' ,
            opacity: '1',
            maxWidth:'200px'
        });
    }else{
        $('#hambergurControl').addClass("hambergur-icon-open");
        $('#hambergurControl').removeClass("hambergur-icon-close");
        $(".hamburger-block").css({
            right: '7.5%' ,
            opacity: '0',
            maxWidth:'0'
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

// 捲到最上方按鈕
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

// 滑鼠特效
$("body").mousemove(function(e){
    let X = e.clientX;
    let Y = e.clientY;
    console.log(X,Y);
    setTimeout(function(){
    $('#mouseEffect').css({
        top:Y + "px",
        left:X + "px",
        opacity:'1'
    });
    },50)
    setTimeout(function(){
        $('#mouseEffect2').css({
        top:Y + "px",
        left:X + "px",
        opacity:'1'
    });
    },150)
});
