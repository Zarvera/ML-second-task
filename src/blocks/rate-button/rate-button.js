$('.rate-button__label').on({
  mouseenter: function() {
    $(this).prevAll('.rate-button__label').addClass('rate-button__label_hovered');
  },
  mouseleave: function() {
    $(this).prevAll('.rate-button__label').removeClass('rate-button__label_hovered');
  },
  click: function() {
    $(this).prevAll('.rate-button__label').addClass('rate-button__label_rated');
    $(this).addClass('rate-button__label_rated');
    $(this).nextAll('.rate-button__label').removeClass('rate-button__label_rated');
  }
})