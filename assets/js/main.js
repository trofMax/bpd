

// Slider Config

$(document).ready(function(){
  $('.reviews_slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
  
// Slider config END

$(document).ready(function() {  
  if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $(".choose-tours_content_item").click(function(){
    });
  }
});


