var ctx = document.getElementById("myChart").getContext("2d");

var gradientExcellent = ctx.createLinearGradient(0, 0, 0, 171);
  gradientExcellent.addColorStop(0.0, '#FFE39C');
  gradientExcellent.addColorStop(1.0, '#FFBA9C');
var gradientGood = ctx.createLinearGradient(0, 0, 0, 171);
  gradientGood.addColorStop(0.0, '#6FCF97');
  gradientGood.addColorStop(1.0, '#66D2EA');
var gradientOk = ctx.createLinearGradient(0, 0, 0, 171);
  gradientOk.addColorStop(0.0, '#BC9CFF');
  gradientOk.addColorStop(1.0, '#8BA4F9');
var gradientDisappointment = ctx.createLinearGradient(0, 0, 0, 171);
  gradientDisappointment.addColorStop(0.0, '#909090');
  gradientDisappointment.addColorStop(1.0, '#3D4975');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
    datasets: [{
      cutout: '80%',
      data: [0, 65, 65, 130],
      backgroundColor: [
      gradientDisappointment,
      gradientOk,
      gradientGood,
      gradientExcellent
      ]
    }]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'right',
        reverse: true,
        labels: {
          usePointStyle: true
        }
      }
    },
    elements: {
      center: {
        text: 'Red is 2/3 the total numbers',
        color: '#FF6384', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      }
    }
  }
})