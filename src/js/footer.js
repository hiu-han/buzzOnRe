$(document).ready(function () {
  const OPEN_CLASSNAME = 'open';

  $('.option-selected').on('click', function () {
    $(this).parent('.sort-option').toggleClass(OPEN_CLASSNAME);
  })
})