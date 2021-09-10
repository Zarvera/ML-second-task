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
      cutout: '90%',
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
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false
      }
    }
  },
  plugins: [{
    id: 'my-doughnut-text-plugin',
      afterDraw: function (chart, option) {
        let theCenterText = "260" ;
        const canvasBounds = document.getElementById("myChart").getBoundingClientRect();
        chart.ctx.textBaseline = 'middle';
        chart.ctx.textAlign = 'center';
        chart.ctx.font = '700 24px Montserrat';
        chart.ctx.fillStyle = '#BC9CFF';
        chart.ctx.fillText(theCenterText, canvasBounds.width*0.50, canvasBounds.height*0.43);
        chart.ctx.font = '700 12px Montserrat';
        chart.ctx.fillText('ГОЛОСОВ', canvasBounds.width*0.50, canvasBounds.height*0.61 )
      }
  }]
})