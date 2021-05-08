const dropdown = function(options) {
    $('.dropdown__menu').on('click', function() {
        $(this).siblings('.dropdown__menu-option').toggleClass('dropdown__menu-option_open');
    });

    $('.button_increment').on('click', function() {
        let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
        value++;
        $(this).siblings('.menu-option__stepper-result').text(value);
        updateValue($(this));
    });

    $('.button_decrement').on('click', function() {
        let value = parseInt($(this).siblings('.menu-option__stepper-result').text());
        if(value>0) {
            value--;
            $(this).siblings('.menu-option__stepper-result').text(value);
            updateValue($(this));
        };
    });

    let updateValue = function(context) {
        let output = [];
        let allOptions = context.closest('.dropdown').find('.menu-option__stepper-result');
        let checkValue = function(index) {
            let stepValue = parseInt($(this).text());
            let stepIndex = $(this).attr('data-index');
            if(stepValue > 4) {
                output.push(stepValue + ' ' + options[stepIndex][2]);
            } else if(stepValue > 1 && stepValue < 5) {
                output.push(stepValue + ' ' + options[stepIndex][1]);
            } else if(stepValue === 1) {
                output.push(stepValue + ' ' + options[stepIndex][0]);
            }
        };
        allOptions.map(checkValue);
        context.closest('.dropdown').find('input').val(output.join(', '));
    };
};

dropdown([['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванных комнаты', 'ванных комнат']]);