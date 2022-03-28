$(document).ready(function () {
  const NOWON_CLASSNAME = "now-on";

  $(".article-list-wrap .item-subs").on("click", function () {
    let thisH = $(this).children("ul").length;
    if (thisH > 1) {
      // $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);  
      $(this).toggleClass(NOWON_CLASSNAME);
      $(this).css("height", thisH * 38);

      if(!$(this).hasClass(NOWON_CLASSNAME)) {
        $(this).css("height", 38);
      }
    }
  });


  // 임시 데이터
  $(".detailPostSNS").css("width", "40%");
  $(".detailPostTwit").css("width", "12%");
  $(".detailPostInsta").css("width", "50%");
  $(".detailPostYout").css("width", "26%");
  $(".detailPostFaceb").css("width", "12%");
  
  $(".detailPostCommu").css("width", "45%");
})