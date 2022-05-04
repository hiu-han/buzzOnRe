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


  // ***** 차트 방식 성정 버튼
  $(".method-item").on("click", function() {
    $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
  });
  // ***** 차트 기간 설정 버튼
  $(".period-item").on("click", function() {
    $(this).addClass(NOWON_CLASSNAME).siblings().removeClass(NOWON_CLASSNAME);
  });

  
  // ***** 임시 데이터
  $(".detailPostSNS").css("width", "40%");
  $(".detailPostTwit").css("width", "12%");
  $(".detailPostInsta").css("width", "50%");
  $(".detailPostYout").css("width", "26%");
  $(".detailPostFaceb").css("width", "12%");
  
  $(".detailPostCommu").css("width", "45%");


  

  
})

// ***** 셀렉트 옵션 커스텀 START

const label = document.querySelectorAll('.select-label');

label.forEach(function (lb) {
  lb.addEventListener('click', e => {
    let optionList = lb.nextElementSibling;
    let optionItems = optionList.querySelectorAll('.option-item');
    clickLabel(lb, optionItems);
  })
});

const clickLabel = (lb, optionItems) => {
  label.forEach(function(itemLb) {
    if(lb !== itemLb) {
      itemLb.parentNode.classList.remove('active')
    }
  });

  if(lb.parentNode.classList.contains('active')) {
    lb.parentNode.classList.remove('active');
    optionItems.forEach((opt) => {
      opt.removeEventListener('click', () => {
        handleSelect(lb, opt)
      })
    })
  } else {
    lb.parentNode.classList.add('active');
    optionItems.forEach((opt) => {
      opt.addEventListener('click', () => {
        handleSelect(lb, opt)
      })
    })
  }
}

const handleSelect = (label, item) => {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove('active');
}

const handleClose = e => {
  if(!e.target.classList.contains('select-label') && !e.target.classList.contains('option-item')) {
    label.forEach(function(lb) {
      lb.parentNode.classList.remove('active');
    })
  }
}

window.addEventListener('click', e => handleClose(e));

// ***** 셀렉트 옵션 커스텀 END