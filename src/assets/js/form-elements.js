(function() {
  $('#mask').inputmask('99.99.9999', {"placeholder": "ДД.ММ.ГГГГ"});
  $('#like-inited').trigger('click'),
  $('#rate-inited4').children('[for="rate4"]').trigger('click'),
  $('#rate-inited5').children('[for="rate5"]').trigger('click'),
  $('#dd1').dropdownstepper({buttons: true}),
  $('#dd2').dropdownstepper( {
    pronounces: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    declension: true
  }),
  $('#dd3').dropdownstepper( {
    pronounces: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    declension: true
  }),
  $('#dd3').find('input').trigger('click'),
  $('#dd3').find('.button_increment').eq(0).trigger('click').trigger('click'),
  $('#dd3').find('.button_increment').eq(1).trigger('click').trigger('click'),
  $('#init-text_input').addClass('text-input_hovered').val('This is pretty awesome'),
  $('#dd4').dropdownstepper({buttons: true}),
  $('#dd5').dropdownstepper({buttons: true}),
  $('#dd4').children('.dropdown__value').trigger('click'),
  $('#dd5').children('.dropdown__value').trigger('click'),
  $('#dd5').find('.button_increment').eq(0).trigger('click').trigger('click'),
  $('#dd5').find('.button_increment').eq(1).trigger('click'),
  $('#exp2').children('.expandable__header').trigger('click'),
  $('#table1, #chair1, #crib1').trigger('click')
})();