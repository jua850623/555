$(".icon1").click(
    function(){
        $(".sub_icon").toggleClass("on");
    }
    
);

$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 0,
    mode:"fade"
    
  });

  $('.bxslider2').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 0,
    
    
  });
  $('.bxslider3').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    slideWidth: 0,
    
    
  });

  $('.bxslider4').bxSlider({

    slideWidth: 200,
  
    minSlides: 5,
    maxSlides: 5,
    slideMargin: 10
    
  });
  



  // $(".bxslider4 li").hover(
  //   function(){
  //     $(".front-bg").slideUp();
  //   },
  //   function(){
  //     $(".front-bg").slideDown();
  //   }
  // );
