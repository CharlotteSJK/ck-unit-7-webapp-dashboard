const trafficCanvas = document.getElementById('traffic-chart'); 
const dailyCanvas = document.getElementById('bar-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const hourly = document.getElementsByClassName('hourly-chart');
const daily = document.getElementsByClassName('daily-chart');
const weekly = document.getElementsByClassName('weekly-chart');
const monthly = document.getElementsByClassName('monthly-chart');

// Line Graph

// Hourly

  let trafficData1 = {
    labels: ["00-03", "03-06", "06-09", "09-12", "12-15", "15-18", "18-21",
    "21-00"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850],
    backgroundColor: 'rgba(144, 224, 239, .3)',
    borderColor: '#48CAE4',
    borderWidth: 1,
    lineTension: 0,
    pointBackgroundColor: '#fff',
    pointBorderColor: '#48CAE4',
    pointBorderWidth: 1,
    pointStyle: 'circle',
    pointRadius: 6
    }]
    };

 // Daily
let trafficData2 = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [{
  data: [1340, 1400, 1200, 1850, 1500, 1950, 1650],
  backgroundColor: 'rgba(144, 224, 239, .3)',
  borderColor: '#48CAE4',
  borderWidth: 1,
  lineTension: 0,
  pointBackgroundColor: '#fff',
  pointBorderColor: '#48CAE4',
  pointBorderWidth: 1,
  pointStyle: 'circle',
  pointRadius: 6
  }]
};
 
 //  Weekly
let trafficData3 = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [{
    data: [1600, 1450, 1500, 1700, 1350, 2000],
    backgroundColor: 'rgba(144, 224, 239, .3)',
    borderColor: '#48CAE4',
    borderWidth: 1,
    lineTension: 0,
    pointBackgroundColor: '#fff',
    pointBorderColor: '#48CAE4',
    pointBorderWidth: 1,
    pointStyle: 'circle',
    pointRadius: 6
    }]
};
 
 // Monthly
let trafficData4 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [{
    data: [1750, 1400, 1600, 1250, 2000, 1950, 1750, 1100, 1200, 1600, 1250, 1550],
    backgroundColor: 'rgba(144, 224, 239, .3)',
    borderColor: '#48CAE4',
    borderWidth: 1,
    lineTension: 0,
    pointBackgroundColor: '#fff',
    pointBorderColor: '#48CAE4',
    pointBorderWidth: 1,
    pointStyle: 'circle',
    pointRadius: 6
  }]
};


let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    };

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData1,
  options: trafficOptions
  });

  //Change the line charts

  let changeTraffic = document.getElementsByClassName("traffic-nav")[0];
  changeTraffic.addEventListener("click", (e) => {
    let chosenTime = e.target.innerHTML;
    if (chosenTime === "Hourly") {
      let trafficChart = new Chart(trafficCanvas, {
        type: "line",
        data: trafficData1,
        options: trafficOptions,
      });
    } else if (chosenTime === "Daily") {
      let trafficChart = new Chart(trafficCanvas, {
        type: "line",
        data: trafficData2,
        options: trafficOptions,
      });
    } else if (chosenTime === "Weekly") {
      let trafficChart = new Chart(trafficCanvas, {
        type: "line",
        data: trafficData3,
        options: trafficOptions,
      });
    } else if (chosenTime === "Monthly") {
      let trafficChart = new Chart(trafficCanvas, {
        type: "line",
        data: trafficData4,
        options: trafficOptions,
      });
    }
  });


// Bar Chart

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
  label: '# of Hits',
  data: [75, 115, 175, 125, 225, 200, 100],
  backgroundColor: '#48CAE4',
  borderWidth: 1
  }]
  };

  const dailyOptions = {
  scales: {
  yAxes: [{
  ticks: {
  beginAtZero:true
  }
  }]
  },
  legend : {
  display: false
  }
}

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
  });


// Doughnut Chart

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
  label: '# of Users',
  data: [2000, 550, 500],
  borderWidth: 0,
  backgroundColor: [
  '#48CAE4',
  '#78CF82',
  '#2a9d8f'
  ]
  }]
  };

const mobileOptions = {
  legend: {
  position: 'right',
  labels: {
  boxWidth: 20,
  fontStyle: 'bold'
  }
  }
  }

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
  });