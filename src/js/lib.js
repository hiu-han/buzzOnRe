$(document).ready(function () {
  // swiper test >> Trend page 시작
  const stmtTrdSwp = new Swiper('#kwdRnkContainer, #postTrdSwpContainer, #stmtTrdSwpContainer, #enggTrdSwpContainer', {
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
      clickable: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const kwdTrdSwp = new Swiper('#kwdTrdSwpContainer', {
    slidesPerView: 1,
    spaceBetween: 24,
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
    centeredSlide: true,
    
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
    centeredSlide: true,
    
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // swiper test >> Trend page 끝
})