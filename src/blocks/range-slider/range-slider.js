import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/all.css";

$(".range-slider__slider").slider({
  range: true,
  min: 100,
  max: 15500,
  step: 10,
  values: [5000, 10000],
  slide: function(event, ui) {
    $(this)
    .parent()
    .siblings()
    .find(".fieldset__addition")
    .text(ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽")
  },
  create: function(event, ui) {
    $(this)
    .parent()
    .siblings()
    .find(".fieldset__addition")
    .text($(this).slider("values", 0) + "₽ - " + $(this).slider("values", 1) + "₽")
  } 
});