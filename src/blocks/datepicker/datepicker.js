import '../../../node_modules/air-datepicker/dist/js/datepicker';

$('.datepicker__field_from').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $(".datepicker__field_from").val(fd.split("-")[0]);
    $(".datepicker__field_to").val(fd.split("-")[1]);
  }
});

$('.datepicker__field_to').datepicker({ 
  onSelect: function (fd, d, picker) { 
    $(".datepicker__field_to").val(fd.split("-")[1]);
    $(".datepicker__field_from").val(fd.split("-")[0]);
  }
});