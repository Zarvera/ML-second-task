import inputmask from '../../vendors/js/jquery.inputmask.min.js';

$(document).ready(function() {
    $('.masked-input').inputmask('99.99.9999', {"placeholder": "ДД.ММ.ГГГГ"}); 
});