$('.expandable').on('click', function() {
  if($(this).find('.expandable__content').is(':hidden')) {
    $(this).find('.expandable__expand-icon').css('transition', 'transform 0.5s');
    $(this).find('.expandable__expand-icon').css('transform', 'rotate(0.5turn)');
    $(this).find('.expandable__content').slideDown('fast');
  } else {
    $(this).find('.expandable__content').slideUp('fast');
    $(this).find('.expandable__expand-icon').css('transform', 'rotate(0turn)');
  }
})