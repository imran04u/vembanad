
  // ProspectPie-prospectSource
  $(function() {
    var ctx = document.getElementById('prospectSource').getContext('2d');

    var chart = new Chart(ctx, {
      showTooltips: false,
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
          540, 260, 167, 230, 340,460,320,240
          ],
          backgroundColor: [
          '#ffb200',
          '#ff2e00',
          '#ff004c',
          '#0500ff',
          '#0094ff',
          '#00f645',
          '#b9d705',
          '#07c569'
          ],
        }],
        labels: [
        "Web",
        "PhoneSales",
        "Contact",
        "Employee Referal",
        "Customer",
        "Cotractor",
        "Advertisment",
        "Others"
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: "top",
          labels: {
            usePointStyle: true,
            padding : 10,
          }
        },
        plugins: {
          labels: {
            render: 'value',
            fontSize: 14,
            fontStyle: 'bold',
            fontColor: '#fff',
          }
        }
      },
      onAnimationComplete: function () {

        var ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        this.datasets.forEach(function (dataset) {
          dataset.points.forEach(function (points) {
            ctx.fillText(points.value, points.x, points.y - 10);
          });
        })
      }
    });
  });

    // ProspectPie-prospectSource
    $(function() {
      var ctx = document.getElementById('prospecttech').getContext('2d');

      var chart = new Chart(ctx, {
        showTooltips: false,
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
            540, 260, 167, 230
            ],
            backgroundColor: [
            '#ffb200',
            '#ff2e00',
            '#ff004c',
            '#0500ff'
            ],
          }],
          labels: [
          "Solar PV",
          "Solar Thermal",
          "Heatpump",
          "BioMass"
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: true,
            position: "top",
            labels: {
              usePointStyle: true,
              padding : 20,
            }
          },
          plugins: {
            labels: {
              render: 'value',
              fontSize: 14,
              fontStyle: 'bold',
              fontColor: '#fff',
            }
          }
        },
        onAnimationComplete: function () {

          var ctx = this.chart.ctx;
          ctx.font = this.scale.font;
          ctx.fillStyle = this.scale.textColor
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.datasets.forEach(function (dataset) {
            dataset.points.forEach(function (points) {
              ctx.fillText(points.value, points.x, points.y - 10);
            });
          })
        }
      });
    // Chart.pluginService.register({
    //   beforeDraw: function(chart) {
    //     var width = chart.chart.width,
    //     height = chart.chart.height,
    //     ctx = chart.chart.ctx;

    //     ctx.restore();
    //     var fontSize = (height / 125).toFixed(2);
    //     ctx.font = fontSize + "em sans-serif";
    //     ctx.textBaseline = "middle";

    //     var text = "25m",
    //     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //     textY = height / 2;

    //     ctx.fillText(text, textX, textY);
    //     ctx.save();
    //   }
    // });

  });

    // ProspectPie-prospectSource
    $(function() {
      var ctx = document.getElementById('prospectclass').getContext('2d');

      var chart = new Chart(ctx, {
        showTooltips: false,
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
            540, 260
            ],
            backgroundColor: [
            '#ff004c',
            '#0500ff'
            ],
          }],
          labels: [
          "Domestic",
          "Commercial"
          ]
        },
        options: {
          responsive: true,
          legend: {
            display: true,
            position: "top",
            labels: {
              usePointStyle: true,
              padding : 20,
            }
          },
          plugins: {
            labels: {
              render: 'value',
              fontSize: 14,
              fontStyle: 'bold',
              fontColor: '#fff',
            }
          }
        },
        onAnimationComplete: function () {

          var ctx = this.chart.ctx;
          ctx.font = this.scale.font;
          ctx.fillStyle = this.scale.textColor
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.datasets.forEach(function (dataset) {
            dataset.points.forEach(function (points) {
              ctx.fillText(points.value, points.x, points.y - 10);
            });
          })
        }
      });
    // Chart.pluginService.register({
    //   beforeDraw: function(chart) {
    //     var width = chart.chart.width,
    //     height = chart.chart.height,
    //     ctx = chart.chart.ctx;

    //     ctx.restore();
    //     var fontSize = (height / 125).toFixed(2);
    //     ctx.font = fontSize + "em sans-serif";
    //     ctx.textBaseline = "middle";

    //     var text = "25m",
    //     textX = Math.round((width - ctx.measureText(text).width) / 2),
    //     textY = height / 2;

    //     ctx.fillText(text, textX, textY);
    //     ctx.save();
    //   }
    // });


    // Revenue Chart
    $(function() {
      var ctx = document.getElementById('prospectrevenue').getContext('2d');
      ctx.width = 1000;
      ctx.height = 1000;
      var chart = new Chart(ctx, {
        showTooltips: false,
        type: 'doughnut',
        data: {
         radius:  "90%", 
         innerRadius: "20%",
         datasets: [{
          data: [
          234300, 133432, 55435, 134354, 554354,132445
          ],
          backgroundColor: [
          '#ff0f50',
          '#fe6f96',
          '#fedd49',
          '#39d1ff',
          '#7dddfa',
          '#28ccae',
          ],
        }],
        labels: [
        "Prospect Status A",
        "Prospect Status B",
        "Prospect Status C",
        "Prospect Status D",
        "Open",
        "Close",
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        plugins: {
          labels: {
            fontSize: 0,
          }
        }
      },
      onAnimationComplete: function () {

        var ctx = this.chart.ctx;
        ctx.font = this.scale.font;
        ctx.fillStyle = this.scale.textColor
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        this.datasets.forEach(function (dataset) {
          dataset.points.forEach(function (points) {
            ctx.fillText(points.value, points.x, points.y - 10);
          });
        })
      }
    });
    });

  });
