import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/all.css";

$(".range-slider__slider").slider({
  range: true,
  min: 100,
  max: 15500,
  step: 10,
  values: [5000, 10000]
});