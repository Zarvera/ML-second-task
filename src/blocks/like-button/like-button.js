$('.like-button').on('click', function() {
  $(this).toggleClass('like-button_state_liked');
  let value = parseInt($(this).children('.like-button__value').text());
  if($(this).children('.like-button__symbol').text()==='favorite_border') {
    $(this).children('.like-button__symbol').text('favorite');
    $(this).children('.like-button__value').text(value+1)
  } else {
    $(this).children('.like-button__symbol').text('favorite_border')
    $(this).children('.like-button__value').text(value-1)
  }
});