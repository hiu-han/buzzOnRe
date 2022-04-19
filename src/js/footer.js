$(document).ready(function () {
  const $body = $("html, body");

  const MODALON_CLASSNAME = "modalOn";
  const OPEN_CLASSNAME = 'open';

    
  /*  GO TOP event  */
  function goTopEvent() {
    $("#goTop").on("click", function () {

      const yPos = $body.offset().top;

      $body.stop().animate({
        scrollTop: yPos
      }, 500);

      $(this).children().children("img").css("color", "#313131");
    });
  }

  goTopEvent();

  // // 정렬 옵션 열기
  // $('.option-selected').on('click', function () {
  //   $(this).parent('.sort-option').toggleClass(OPEN_CLASSNAME);
  // })

  /* MODAL Handler */
  const sModHandler = {
    modOn: function (clicker, modalName) {
      $(clicker).on("click", function (e) {
        $(modalName).addClass(MODALON_CLASSNAME);
        e.preventDefault();
        $(`${modalName} .modalBg`).on("scroll touchmove mousewheel", function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        })
      });
    },
    modOff: function (clicker, modalName) {
      $(clicker).on("click", function (e) {
        $(modalName).removeClass(MODALON_CLASSNAME);
        e.preventDefault();
        $(`${modalName} .modalBg`).off('scroll touchmove mousewheel');
      });
    },
  };

  // 컨텐츠 원문 리스트 모달 여닫기
  sModHandler.modOn(".hottest-item", "#showAllModal");
  sModHandler.modOff('#clsAllList', '#showAllModal');
  
  // 컨텐츠 원문 내용 모달 여닫기
  sModHandler.modOn('#showAllModal .content-item', '#showOriginModal');
  sModHandler.modOff('#clsOriginList', '#showOriginModal');

  function showAllModOn (e) {
    $("#showAllModal").addClass(MODALON_CLASSNAME);
    e.preventDefault();
    $("#showAllModal").on("scroll touchmove mousewheel", function () {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  };

})