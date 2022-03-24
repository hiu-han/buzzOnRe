$(document).ready(function () {
  const NOWON_CLASSNAME = "now-on"; 

  $("#detailOpen").on("click", function () {
    $(".detail-slider").toggleClass(NOWON_CLASSNAME);
  })
})