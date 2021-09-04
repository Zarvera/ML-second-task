$('.expandable__fieldset-wrap').on('click', function() {
  if($(this).siblings(".expandable__content").is(':hidden')) {
    $(this).find('.expandable__expand-icon').css('transition', 'transform 0.5s');
    $(this).find('.expandable__expand-icon').css('transform', 'rotate(0.5turn)');
    $(this).siblings(".expandable__content").slideDown('fast');
  } else {
    $(this).siblings(".expandable__content").slideUp('fast');
    $(this).find('.expandable__expand-icon').css('transform', 'rotate(0turn)');
  }
})