// Show that we've loaded the JavaScript file
console.log("Loaded main.js");

// Query the endpoint that returns a JSON ...
d3.json("/dictionary").then(function (data) {

    // ... and dump that JSON to the console for inspection
    console.log(data); 

    // Next, pull out the keys and the values for graphing
    keys = Object.keys(data);
    values = Object.values(data);

    // Create the trace
    var trace = {
        x: keys,
        y: values,
        type: "bar"
    };

    // Put the trace into an array (which allows us to graph
    // multiple traces, if we wish)
    var data = [trace];

    // Define a layout object
    var layout = {
        title: "'Bar' Chart",
        xaxis: { title: "Drinks"},
        yaxis: { title: "Rating"}
    };

    // Create the plot
    Plotly.newPlot("plot", data, layout); 
});

// rating meter
const dataSource = {
    chart: {
      caption: "Nordstorm's Customer Satisfaction Score for 2017",
      lowerlimit: "0",
      upperlimit: "100",
      showvalue: "1",
      numbersuffix: "%",
      theme: "fusion",
      showtooltip: "0"
    },
    colorrange: {
      color: [
        {
          minvalue: "0",
          maxvalue: "50",
          code: "#F2726F"
        },
        {
          minvalue: "50",
          maxvalue: "75",
          code: "#FFC533"
        },
        {
          minvalue: "75",
          maxvalue: "100",
          code: "#62B58F"
        }
      ]
    },
    dials: {
      dial: [
        {
          value: "81"
        }
      ]
    }
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "angulargauge",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();
  });