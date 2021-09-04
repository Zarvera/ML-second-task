import '../../assets/scss/main.scss';
import '../../templates/search-room.scss';
import '../../blocks/dropdown/dropdown';
import '../../blocks/date-filter/date-filter';
import '../../blocks/range-slider/range-slider';
import '../../blocks/pagination/paginations';
import '../../blocks/expandable/expandable';

$("#dd1").dropdownstepper({buttons: true});
$('#dd2').dropdownstepper( {
  pronounces: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
  declension: true
});