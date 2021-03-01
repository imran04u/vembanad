// Barchart 1
window.onload = function() {
  var ctx = document.getElementById('scatredsource').getContext('2d');
  window.myBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar"],

      datasets: [{
       label: 'Web',
       data: [727, 589, 337],
       backgroundColor: "#ffb200",
     },{
      label: 'Phone',
      data: [238, 553, 246],
      backgroundColor: "#ff2e00",
    },{
      label: 'Customer',
      data: [238, 553, 746],
      backgroundColor: "#0094ff",
    }]
  },
  options: {
    tooltips: {
      mode: 'index',
      intersect: false
    },
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
        fontSize: 0,
        fontStyle: 'bold',
        fontColor: 'rgba(0,0,0,0.5)',
      }
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
        barPercentage: 0.4
      }],
      yAxes: [{
        stacked: true,
        barPercentage: 0.4
      }]
    }
  }
});

// Barchart 2
var ctx = document.getElementById('scatredtech').getContext('2d');
window.myBar = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [{
     label: 'Solar PV',
     data: [238, 553, 746],
     backgroundColor: "#ffb200",
   },{
    label: 'Solar Thermal',
    data: [238, 553, 246],
    backgroundColor: "#ff2e00",
  },{
    label: 'Heatpump',
    data: [727, 589, 337],
    backgroundColor: "#ff004c",
  },{
    label: 'BioMass',
    data: [238, 553, 746],
    backgroundColor: "#0500ff",
  }]
},
options: {
  tooltips: {
    mode: 'index',
    intersect: false
  },
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
      fontSize: 0,
      fontStyle: 'bold',
      fontColor: 'rgba(0,0,0,0.5)',
    }
  },
  responsive: true,
  scales: {
    xAxes: [{
      stacked: true,
      barPercentage:' 0.1'
    }],
    yAxes: [{
      stacked: true,
      barPercentage: 0.1
    }]
  }
}
});
};

var ctx = document.getElementById('scatredclass').getContext('2d');
window.myBar = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar"],

    datasets: [{
     label: 'Domestic',
     data: [230, 657, 522],
     backgroundColor: "#ff004c",
   },{
    label: 'Commercial',
    data: [765, 122, 23],
    backgroundColor: "#0500ff",
  }]
},
options: {
  tooltips: {
    mode: 'index',
    intersect: false
  },
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
      fontSize: 0,
      fontStyle: 'bold',
      fontColor: 'rgba(0,0,0,0.5)',
    }
  },
  responsive: true,
  scales: {
    xAxes: [{
      stacked: true,
      barPercentage:' 0.1'
    }],
    yAxes: [{
      stacked: true,
      barPercentage: 0.1
    }]
  }
}
});

document.getElementById('randomizeData').addEventListener('click', function() {
  barChartData.datasets.forEach(function(dataset) {
    dataset.data = dataset.data.map(function() {
      return randomScalingFactor();
    });
  });
  window.myBar.update();
});