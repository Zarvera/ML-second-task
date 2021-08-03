import 'jquery-ui-bundle';
import './style.scss';
import './blocks/dropdown/dropdown';
import './blocks/text-input/text-input';
import './blocks/datepicker/datepicker';
import './blocks/date-filter/date-filter';
import './blocks/like-button/like-button';
import './blocks/rate-button/rate-button';
import './blocks/range-slider/range-slider';
import './blocks/pagination/paginations';
import './blocks/expandable/expandable';


(function() {
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
  $('#dd3').trigger('click'),
  $('#dd3').siblings('.dropdown__menu-option_open').find('.button_increment').eq(0).trigger('click').trigger('click'),
  $('#dd3').siblings('.dropdown__menu-option_open').find('.button_increment').eq(1).trigger('click').trigger('click'),
  $('#init-text_input').addClass('text-input_hovered').val('This is pretty awesome')
})();