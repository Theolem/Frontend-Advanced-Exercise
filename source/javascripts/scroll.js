$(document).ready(function() {
  $(window).scroll(function(e){
    console.log("test");
    if ($(this).scrollTop() > 300) {
      $(".navbar-wagon").css({
        "margin-top": "-70px"
      });
    }
    else {
      $(".navbar-wagon").css({
        "margin-top": "0px"
      });
    }
  });
});
