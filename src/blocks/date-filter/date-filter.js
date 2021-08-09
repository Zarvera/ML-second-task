import '../../../node_modules/air-datepicker/dist/js/datepicker';

$('.date-filter').datepicker({
  dateFormat: 'd M',
  language: {
    monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек']
  }
});