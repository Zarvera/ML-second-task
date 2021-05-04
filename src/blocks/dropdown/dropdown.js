$('.dropdown__menu').on('click', function() {
    $(this).siblings('.dropdown__menu-option').toggleClass('dropdown__menu-option_open');
});

$('.button_increment').on('click', function() {
    let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
    value++;
    $(this).siblings('.menu-option__stepper-result').text(value);
})

$('.button_decrement').on('click', function() {
    let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
    if(value>0) {
        value--;
        $(this).siblings('.menu-option__stepper-result').text(value);
    }
})