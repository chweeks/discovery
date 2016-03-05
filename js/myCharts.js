var ctx = document.getElementById("myChart").getContext("2d");

var data = {
  labels: [
            "Catch-up or on-demand television",
            "Streaming television through a subscription service",
            "Live Television"
          ],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [38, 56, 66]
    },
  ]
};

var myBarChart = new Chart(ctx).HorizontalBar(data, {});
