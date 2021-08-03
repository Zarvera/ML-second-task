$('.expandable__header').on('click', function() {
  if($(this).siblings('.expandable__content').is(':hidden')) {
    $(this).children('.expandable__icon').css('transition', 'transform 0.5s');
    $(this).children('.expandable__icon').css('transform', 'rotate(0.5turn)');
    $(this).siblings('.expandable__content').slideDown('fast');
  } else {
    $(this).siblings('.expandable__content').slideUp('fast');
    $(this).children('.expandable__icon').css('transform', 'rotate(0turn)');
  }
})