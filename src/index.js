import './style.scss';
import './blocks/dropdown/dropdown';
import './blocks/text-input/text-input';
import './blocks/datepicker/datepicker';
import './blocks/date-filter/date-filter';
import './blocks/like-button/like-button';
import './blocks/rate-button/rate-button';
import './blocks/range-slider/range-slider';
import './blocks/pagination/paginations';


(function() {
  $('#like-inited').trigger('click'),
  $('#rate-inited4').children('[for="rate4"]').trigger('click'),
  $('#rate-inited5').children('[for="rate5"]').trigger('click'),
  $('#dd1').dropdownstepper(),
  $('#dd2').dropdownstepper()
})();