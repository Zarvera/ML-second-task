import './assets/scss/main.scss';
import 'jquery-ui-bundle';
import './vendors/js/jquery.inputmask.min.js';
import './blocks/dropdown/dropdown';
import './blocks/datepicker/datepicker';
import './blocks/date-filter/date-filter';
import './blocks/like-button/like-button';
import './blocks/rate-button/rate-button';
import './blocks/range-slider/range-slider';
import './blocks/pagination/paginations';
import './blocks/expandable/expandable';

(function() {
  $('#mask').inputmask('99.99.9999', {"placeholder": "ДД.ММ.ГГГГ"});
  $('#like-inited').trigger('click'),
  $('#rate-inited4').children('[for="rate4"]').trigger('click'),
  $('#rate-inited5').children('[for="rate5"]').trigger('click'),
  $('#dd1').dropdownstepper(),
  $('#dd2').dropdownstepper( {
    pronounces: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    declension: true
  }),
  $('#dd3').dropdownstepper( {
    pronounces: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    declension: true
  }),
  $('#dd3').find('input').trigger('click'),
  $('#dd3').siblings('.dropdown__menu-option_open').find('.button_increment').eq(0).trigger('click').trigger('click'),
  $('#dd3').siblings('.dropdown__menu-option_open').find('.button_increment').eq(1).trigger('click').trigger('click'),
  $('#init-text_input').addClass('text-input_hovered').val('This is pretty awesome'),
  $('#exp2').children('.expandable__header').trigger('click'),
  $('#table1, #chair1, #crib1').trigger('click')
})();