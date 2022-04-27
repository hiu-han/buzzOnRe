$(document).ready(function () {

  // swiperOn
  /*
  let $swipContainer;
  
  const sSwiperHandler = {
    swiperOn : function (container, swipId) {
      const $swipContainer = $(container);
      const $swipWrapper = $swipContainer.children("ul"),
            $swipSlide = $swipWrapper.children("li");
      $swipContainer.addClass("swiper-container").attr("id", swipId);
      $swipWrapper.addClass("swiper-wrapper");
      $swipSlide.addClass("swiper-slide");
    },
    swiperOff : function () {
      const $swipContainer = $(container);
      const $swipWrapper = $swipContainer.children("ul"),
            $swipSlide = $swipWrapper.children("li");
      $swipContainer.reomveClass("swiper-container").removeAttr("id", swipId);
      $swipWrapper.reomveClass("swiper-wrapper");
      $swipSlide.reomveClass("swiper-slide");
    },
  };

  let winWidth = window.innerWidth;
  
  console.log(winWidth);
  function winResizeFunc () {
    if (winWidth < 680) {
      sSwiperHandler.swiperOn(".index-trend-rank", "idxTrdSwpContainer");
    } else if (winWidth >= 680) {
      sSwiperHandler.swiperOff(".index-trend-rank", "idxTrdSwpContainer");
    }
  }
  winResizeFunc();
  */
    
  $(window).on("resize", function () {
    winWidth = window.innerWidth;
    console.log(winWidth);
    // winResizeFunc();
    return winWidth;
  });
  
  const idxTrdSwp = new Swiper('#idxTrdSwpContainer', {
    slidesPerView: 1.5,
    spaceBetween: 24,
    debugger: true,
    mousewheel:true,
    loop: true,
    centeredSlides: true,
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    
    navigation: {
      nextEl: "#idxtrdNext.swiper-button-next",
      prevEl: "#idxtrdPrev.swiper-button-prev",
    },
    breakpoints: {

      481: {
        slidesPerView: 2.4,
      },
      681: {
        slidesPerView: 5,
        loop:false,
        autoplay: false,
        navigation: false,
        centeredSlides:false,
      }
    },
  });

  // swiper test >> Trend page 시작
  const stmtTrdSwp = new Swiper('#kwdRnkContainer, #postTrdSwpContainer, #stmtTrdSwpContainer, #enggTrdSwpContainer', {
    slidesPerView: 1,
    spaceBetween: 24,
    debugger: true,
    mousewheel:true,
    loop:false,
    centeredSlides: true,
    
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const kwdTrdSwp = new Swiper('#kwdTrdSwpContainer', {
    slidesPerView: 1,
    spaceBetween: 36,
    breakpoints: {
      481: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 4,
      },
    },
    debugger: true,
    mousewheel:true,
    loop:false,
    centeredSlides: true,
    
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const youtHotSwp = new Swiper('#youtHotSwpContainer', {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      481: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 3,
      },
    },
    debugger: true,
    mousewheel:true,
    loop: true,
    centeredSlides: true,
    
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    
    navigation: {
      nextEl: false,
      prevEl: false,
    },
  });

  const buzzNewsSwp = new Swiper('#buzzNewsSwpContainer', {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      481: {
        slidesPerView: 1.8,
      },
      769: {
        slidesPerView: 1.8,
      },
    },
    debugger: true,
    mousewheel:true,
    loop: false,
    centeredSlides: false,
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    
    navigation: {
      nextEl: false,
      prevEl: false,
    },
  });
  // swiper test >> Trend page 끝
})