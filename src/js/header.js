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
})