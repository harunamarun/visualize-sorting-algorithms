const SortOfQuick = require("./Sort");
const Chart = require("chart.js");

require("./index.css");
let chart = null;
const arr = [11, 10, 18, 11, 30, 23, -1, 1, 13, 16, 25, 9, 28, 21];
const sort = new SortOfQuick(arr);

const his = sort.sort();
start();

async function start() {
  for (const element of his) {
    draw(element);
    await sleep(1000);
  }
}

function sleep(msec) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, msec);
  });
}

function draw(array) {
  let ctx = document.getElementById("myChart").getContext("2d");
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: array,
      datasets: [
        {
          label: "Value",
          data: array,
          backgroundColor: "rgba(255,255, 255, 0.6)",
          borderColor: "rgba(255,255, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 30,
            },
          },
        ],
      },
    },
  });
  chart.update({
    duration: 0,
  });
}
