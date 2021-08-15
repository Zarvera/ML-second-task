import '../../../node_modules/air-datepicker/dist/js/datepicker';

$('.datepicker__field_from').datepicker({
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
  onShow: function(inst) {
    if(!inst.$datepicker.find('.datepicker--content').children().last().is('.datepicker__custom-buttons')) {
      const $addonButtons = $(
        `<div class='datepicker__custom-buttons'>
          <button type='button' class='custom-button__button_clear'>ОЧИСТИТЬ</button>
          <button type='button' class='custom-button__button_accept'>ПРИМЕНИТЬ</button>
        </div>`);
      inst.$datepicker.find('.datepicker--content').append($addonButtons);
    }
  },
  prevHtml: "<button type='button' class='datepicker__button_prev material-icons'>arrow_back</button>",
  nextHtml: "<button type='button' class='datepicker__button_next material-icons'>arrow_forward</button>",
  onSelect: function (fd, d, picker) { 
    $(".datepicker__field_from").val(fd.split("-")[0]);
    $(".datepicker__field_to").val(fd.split("-")[1]);
  }
});

$('.datepicker__field_to').datepicker({
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
  onShow: function(inst) {
    if(!inst.$datepicker.find('.datepicker--content').children().last().is('.datepicker__custom-buttons')) {
      const $addonButtons = $(
        `<div class='datepicker__custom-buttons'>
          <button type='button' class='custom-button__button_clear'>ОЧИСТИТЬ</button>
          <button type='button' class='custom-button__button_accept'>ПРИМЕНИТЬ</button>
        </div>`);
      inst.$datepicker.find('.datepicker--content').append($addonButtons);
    }
  },
  prevHtml: "<button type='button' class='datepicker__button_prev material-icons'>arrow_back</button>",
  nextHtml: "<button type='button' class='datepicker__button_next material-icons'>arrow_forward</button>",
  onSelect: function (fd, d, picker) { 
    $(".datepicker__field_to").val(fd.split("-")[1]);
    $(".datepicker__field_from").val(fd.split("-")[0]);
  }
});