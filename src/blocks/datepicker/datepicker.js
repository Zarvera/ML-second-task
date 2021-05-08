import '../../../node_modules/air-datepicker/dist/js/datepicker';

$('.my-datepicker, .datepicker-from').datepicker({ 
    onSelect: function (fd, d, picker) { 
        $(".my-datepicker, .datepicker-from").val(fd.split("-")[0]);
        $(".datepicker-to").val(fd.split("-")[1]);
    }
});

$('.my-datepicker, .datepicker-to').datepicker({ 
    onSelect: function (fd, d, picker) { 
        $(".my-datepicker, .datepicker-to").val(fd.split("-")[1]);
        $(".datepicker-from").val(fd.split("-")[0]);
    }
});