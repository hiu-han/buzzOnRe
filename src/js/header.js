$(document).ready(function () {
  const NOWON_CLASSNAME = "now-on"; 


  // detail-slider 핸들러
  $("#detailOpen").on("click", function () {
    $(this).toggleClass(NOWON_CLASSNAME);
    $(".detail-slider").toggleClass(NOWON_CLASSNAME);
  });
  $(".detail-slider .cls-btn").on("click", function () {
    $("#detailOpen").removeClass(NOWON_CLASSNAME);
    $(".detail-slider").removeClass(NOWON_CLASSNAME);
  });
  
  $("#moDetailOpen").on("click", function () {
    $(this).toggleClass(NOWON_CLASSNAME);
    $(".detail-slider").toggleClass(NOWON_CLASSNAME);
  });
  $(".detail-slider .cls-btn").on("click", function () {
    $("#moDetailOpen").removeClass(NOWON_CLASSNAME);
    $(".detail-slider").removeClass(NOWON_CLASSNAME);
  });
  
  $("#moChannelOpen").on("click", function () {
    $(this).toggleClass(NOWON_CLASSNAME);
    $(".detail-channel-area > fieldset").toggleClass(NOWON_CLASSNAME);
  });
  // $(".detail-slider .cls-btn").on("click", function () {
  //   $("#detailOpen").removeClass(NOWON_CLASSNAME);
  //   $(".detail-channel-area > fieldset").removeClass(NOWON_CLASSNAME);
  // });


  let sT = 0;
  $(window).scroll(function (e) {
    sT = $(this).scrollTop();
    // console.log(sT);
    
    if(sT > 62) {
      $("#header").addClass(NOWON_CLASSNAME);
    } else {
      $("#header").removeClass(NOWON_CLASSNAME);
    }
  });

})