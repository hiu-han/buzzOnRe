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

// channel All chk
function allChked () {
  let allOfChkBox = document.querySelectorAll('.detail-channel-area input[type="checkbox"]');
  for (let i = 0, len = allOfChkBox.length; i < len; i++) {
    allOfChkBox[i].checked = true;
  }
}
allChked();

function channelChk (a, g) {
  let allChkBox = document.getElementById(`allCheck${g}`);
  let e = document.querySelectorAll(`.${g}-group input[type="checkbox"]`);
  // console.log(e.length);

  for (let i = 0, len = e.length; i < len; i++) {
    if (!e[i].checked) {
      allChkBox.checked = false;
      return;
    }
  }
  allChkBox.checkd = true;
}

function toggleChk(source, g) {
  let e = document.querySelectorAll(`.${g}-group input[type="checkbox"]`);

  for (let i = 0, len = e.length; i < len; i++) {
    e[i].checked = source.checked;
  }
}

/*
function channelChk () {
  let allChkBox = document.getElementById("allCheckSns");
  let e = document.querySelectorAll('.sns-group input[type="checkbox"]');
  console.log(e.length);
  for (let i = 0, len = e.length; i < len; i++) {
    if (!e[i].checked) {
      allChkBox.checked = false;
      return;
    }
  }
  allChkBox.checkd = true;
}

 function toggleChk(source) {
   let e = document.querySelectorAll('.sns-group input[type="checkbox"]');

   for (let i = 0, len = e.length; i < len; i++) {
     e[i].checked = source.checked;
   }
 }
*/

/*
const allChkHandler =  {
  snsChannelChk: function () {

  },
  snsToggleChk: function () {

  },
  cafeChannelChk: function () {

  },
  cafeToggleChk: function () {

  },
  ......
}
*/