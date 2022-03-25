$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 10){
        $(".main_menu").addClass("nav_main")
    }else{
        $(".main_menu").removeClass("nav_main")
    }
    if(scrolling > 30){
        $(".back_btn").addClass("back_btn_ani")
    }else{
        $(".back_btn").removeClass("back_btn_ani")
    }

});
$(".back_btn").click(function(){
    $('html, body').animate({
        scrollTop:0
    },)
})

new VenoBox({
    selector: '.my-video-links',
});


$('.main_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: false,
    centerPadding: 0,

  });








