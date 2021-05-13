import '../../vendors/js/jquery.inputmask.min.js';

$(document).ready(function() {
    $('.text-input_masked').inputmask('99.99.9999', {"placeholder": "ДД.ММ.ГГГГ"}); 
});