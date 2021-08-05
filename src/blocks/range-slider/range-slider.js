import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

var nonLinearStepSlider = document.getElementById('range-slider');
var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

noUiSlider.create(nonLinearStepSlider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 1000,
        'max': 15000
    },
    step: 100,
    format: {
      to: (v) => parseFloat(v).toFixed(0) + '₽',
      from: (v) => parseFloat(v).toFixed(0)
    }
});

nonLinearStepSlider.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});