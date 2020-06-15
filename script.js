/* chart.js chart examples */

// chart colors
let colors = ["#007bff", "#28a745", "#333333", "#c3e6cb", "#dc3545", "#6c757d"];

/* large line chart */
let chLine = document.getElementById("chLine");
let chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [40, 43, 38, 40, 42, 50, 51],
      backgroundColor: "transparent",
      borderColor: colors[0],
      borderWidth: 4,
      pointBackgroundColor: colors[0],
    },
    // {
    //   data: [45, 48, 50, 47, 48, 50, 51],
    //   backgroundColor: colors[3],
    //   borderColor: colors[1],
    //   borderWidth: 4,
    //   pointBackgroundColor: colors[1],
    // },
  ],
};
if (chLine) {
  new Chart(chLine, {
    type: "line",
    data: chartData,
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      responsive: true,
    },
  });
}
let chLine2 = document.getElementById("chLine-2");
let chartData2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [48, 43, 38, 33, 31, 32, 24],
      backgroundColor: "transparent",
      borderColor: colors[0],
      borderWidth: 4,
      pointBackgroundColor: colors[0],
    },
    // {
    //   data: [45, 48, 50, 47, 48, 50, 51],
    //   backgroundColor: colors[3],
    //   borderColor: colors[1],
    //   borderWidth: 4,
    //   pointBackgroundColor: colors[1],
    // },
  ],
};
if (chLine2) {
  new Chart(chLine2, {
    type: "line",
    data: chartData2,
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      responsive: true,
    },
  });
}

let chLine3 = document.getElementById("chLin-3");
let chartData3 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [33, 28, 30, 38, 42, 50, 60],
      backgroundColor: "transparent",
      borderColor: colors[0],
      borderWidth: 4,
      pointBackgroundColor: colors[0],
    },
    // {
    //   data: [45, 48, 50, 47, 48, 50, 51],
    //   backgroundColor: colors[3],
    //   borderColor: colors[1],
    //   borderWidth: 4,
    //   pointBackgroundColor: colors[1],
    // },
  ],
};
if (chLine3) {
  new Chart(chLine3, {
    type: "line",
    data: chartData3,
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      responsive: true,
    },
  });
}

/* large pie/donut chart */
// let chPie = document.getElementById("chPie");
// if (chPie) {
//   new Chart(chPie, {
//     type: "pie",
//     data: {
//       labels: ["Desktop", "Phone", "Tablet", "Unknown"],
//       datasets: [
//         {
//           backgroundColor: [colors[1], colors[0], colors[2], colors[5]],
//           borderWidth: 0,
//           data: [50, 40, 15, 5],
//         },
//       ],
//     },
//     plugins: [
//       {
//         beforeDraw: function (chart) {
//           let width = chart.chart.width,
//             height = chart.chart.height,
//             ctx = chart.chart.ctx;
//           ctx.restore();
//           let fontSize = (height / 70).toFixed(2);
//           ctx.font = fontSize + "em sans-serif";
//           ctx.textBaseline = "middle";
//           let text = chart.config.data.datasets[0].data[0] + "%",
//             textX = Math.round((width - ctx.measureText(text).width) / 2),
//             textY = height / 2;
//           ctx.fillText(text, textX, textY);
//           ctx.save();
//         },
//       },
//     ],
//     options: {
//       layout: { padding: 0 },
//       legend: { display: false },
//       cutoutPercentage: 80,
//     },
//   });
// }

/* bar chart */
// let chBar = document.getElementById("chBar");
// if (chBar) {
//   new Chart(chBar, {
//     type: "bar",
//     data: {
//       labels: ["S", "M", "T", "W", "T", "F", "S"],
//       datasets: [
//         {
//           data: [589, 445, 483, 503, 689, 692, 634],
//           backgroundColor: colors[0],
//         },
//         {
//           data: [639, 465, 493, 478, 589, 632, 674],
//           backgroundColor: colors[1],
//         },
//       ],
//     },
//     options: {
//       legend: {
//         display: false,
//       },
//       scales: {
//         xAxes: [
//           {
//             barPercentage: 0.4,
//             categoryPercentage: 0.5,
//           },
//         ],
//       },
//     },
//   });
// }

/* 3 donut charts */
// let donutOptions = {
//   cutoutPercentage: 85,
//   legend: {
//     position: "bottom",
//     padding: 5,
//     labels: { pointStyle: "circle", usePointStyle: true },
//   },
// };

// // donut 1
// let chDonutData1 = {
//   labels: ["Bootstrap", "Popper", "Other"],
//   datasets: [
//     {
//       backgroundColor: colors.slice(0, 3),
//       borderWidth: 0,
//       data: [74, 11, 40],
//     },
//   ],
// };

// let chDonut1 = document.getElementById("chDonut1");
// if (chDonut1) {
//   new Chart(chDonut1, {
//     type: "pie",
//     data: chDonutData1,
//     options: donutOptions,
//   });
// }

// // donut 2
// let chDonutData2 = {
//   labels: ["Wips", "Pops", "Dags"],
//   datasets: [
//     {
//       backgroundColor: colors.slice(0, 3),
//       borderWidth: 0,
//       data: [40, 45, 30],
//     },
//   ],
// };
// let chDonut2 = document.getElementById("chDonut2");
// if (chDonut2) {
//   new Chart(chDonut2, {
//     type: "pie",
//     data: chDonutData2,
//     options: donutOptions,
//   });
// }

// // donut 3
// let chDonutData3 = {
//   labels: ["Angular", "React", "Other"],
//   datasets: [
//     {
//       backgroundColor: colors.slice(0, 3),
//       borderWidth: 0,
//       data: [21, 45, 55, 33],
//     },
//   ],
// };
// let chDonut3 = document.getElementById("chDonut3");
// if (chDonut3) {
//   new Chart(chDonut3, {
//     type: "pie",
//     data: chDonutData3,
//     options: donutOptions,
//   });
// }

// /* 3 line charts */
// let lineOptions = {
//   legend: { display: false },
//   tooltips: { interest: false, bodyFontSize: 11, titleFontSize: 11 },
//   scales: {
//     xAxes: [
//       {
//         ticks: {
//           display: false,
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false,
//         },
//       },
//     ],
//     yAxes: [{ display: false }],
//   },
//   layout: {
//     padding: {
//       left: 6,
//       right: 6,
//       top: 4,
//       bottom: 6,
//     },
//   },
// };

// let chLine1 = document.getElementById("chLine1");
// if (chLine1) {
//   new Chart(chLine1, {
//     type: "line",
//     data: {
//       labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//       datasets: [
//         {
//           backgroundColor: "#ffffff",
//           borderColor: "#ffffff",
//           data: [10, 11, 4, 11, 4],
//           fill: false,
//         },
//       ],
//     },
//     options: lineOptions,
//   });
// }
// let chLine2 = document.getElementById("chLine2");
// if (chLine2) {
//   new Chart(chLine2, {
//     type: "line",
//     data: {
//       labels: ["A", "B", "C", "D", "E"],
//       datasets: [
//         {
//           backgroundColor: "#ffffff",
//           borderColor: "#ffffff",
//           data: [4, 5, 7, 13, 12],
//           fill: false,
//         },
//       ],
//     },
//     options: lineOptions,
//   });
// }

// let chLine3 = document.getElementById("chLine3");
// if (chLine3) {
//   new Chart(chLine3, {
//     type: "line",
//     data: {
//       labels: ["Pos", "Neg", "Nue", "Other", "Unknown"],
//       datasets: [
//         {
//           backgroundColor: "#ffffff",
//           borderColor: "#ffffff",
//           data: [13, 15, 10, 9, 14],
//           fill: false,
//         },
//       ],
//     },
//     options: lineOptions,
//   });
// }
