
$(document).ready(function(){

  $(".hamberger").click (function(){
    $('.header__nav').slideToggle();
  })
    
  $("#tab-btn ul li").click(function(event) {
    event.preventDefault();
    var selectAtt = $(this).attr("data-category");

    $("#tab-btn ul li").removeClass("active__tab");
    $(this).addClass("active__tab");

    $(".wrap__img").hide();
    $("." + selectAtt).fadeIn();
  });








})