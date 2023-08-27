//  Graphs

const sales = document.getElementById("sales");
const earning = document.getElementById("earning");
const products = document.getElementById("products");
Chart.defaults.color = "#ffffff";
Chart.defaults.borderColor = "#33202c";

new Chart(sales, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "My Revenue",
        data: [500, 2000, 1000, 500, 1500, 1000, 500],
        //backgroundColor: ["rgba(155,128,151,1)"],
        backgroundColor: ["#ff5151"],
        hoverBackgroundColor: "#FF90B8",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(earning, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "My Purchase",
        data: [500, 2000, 1000, 500, 1500],
        //backgroundColor: ["rgba(155,128,151,1)"],
        backgroundColor: ["#f0f0f0"],
        hoverBackgroundColor: "#FF90B8",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(products, {
  type: "doughnut",
  data: {
    labels: ["Tshirt", "Hoodies", "Footwear", "Jewellery"],
    datasets: [
      {
        label: "You Spent",
        data: [380, 200, 500,1000],
        backgroundColor: [
          "#0079ff",
          "#00dfa2",
          "#f6fa70",
          "#ff0060"
        ],
        hoverBackgroundColor: "#ffffff",
      },
    ],
  },
  options: {
    responsive: true,
  },
});
