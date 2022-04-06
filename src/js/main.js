$(document).ready(function () {
  let winWidth = 0;
  $(window).on("resize", function () {
    winWidth = window.innerWidth;
    return winWidth;
  })
  
  const NOWON_CLASSNAME = "now-on";

  $(".article-list-wrap .item-subs > .item-subs-opener").on("click", function () {
    let itemH = $(this).parent().children("ul").length;
    console.log(itemH);
    if (itemH > 1) {
      // $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);  
      $(this).parent().toggleClass(NOWON_CLASSNAME);
      $(this).parent().css("height", itemH * 38);

      if(!$(this).parent().hasClass(NOWON_CLASSNAME)) {
        $(this).parent().css("height", 38);
      }
    }
  });

  $(".article-list-wrap .item-subs .total-posts").on("click", function () {
    console.log("clicked");
  })

  const stmtTrdSwp = new Swiper('#postTrdSwpContainer, #stmtTrdSwpContainer, #enggTrdSwpContainer', {
    slidesPerView: 1,
    spaceBetween: 24,
    debugger: true,
    mousewheel:true,
    loop:false,
    centeredSlide: true,
    
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  // swiper test >> Trend page 시작
  const kwdTrdSwp = new Swiper('#kwdTrdSwpContainer', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      481: {
        slidesPerView: 4,
      }
    },
    debugger: true,
    mousewheel:true,
    loop:false,
    centeredSlide: true,
    
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
  // swiper test >> Trend page 끝

  
  // 임시 데이터
  $(".detailPostSNS").css("width", "40%");
  $(".detailPostTwit").css("width", "12%");
  $(".detailPostInsta").css("width", "50%");
  $(".detailPostYout").css("width", "26%");
  $(".detailPostFaceb").css("width", "12%");
  
  $(".detailPostCommu").css("width", "45%");
})