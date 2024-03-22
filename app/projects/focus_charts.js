// Task Success Chart

export const taskSuccess_data = [
  ["Task", "Success Rate (%)", { role: "style" },],
  ["Start a focus timer", 100,"#b87333"],
  ["Toggle a focus event", 80,"#b87333"],
  ["Schedule a focus event", 50,"#b87333"],
  ["Break down tasks", 30,"#b87333"],
];

export const taskSuccess_options = {
title: "Task Success Rate",
  animation: {
    duration: 1000,
    easing: "in",
    startup: true, //This is the new option
  },
  chartArea:{
      width:'50%',
  },
  bars: "horizontal",
  width: "100%",
  bar: { groupWidth: "60%" },

  backgroundColor: "#FAFAFA",
  fontSize: 14,
  fontName: "Roboto",

  titleTextStyle: {
    color: "#666",
    fontName: "Roboto",
    fontSize: 18,
    bold: 1,
  },
  legend: { position: "none" },

  hAxis: {
    title: "%",
    // minValue: 0,
    // maxValue: 100,
    viewWindow: { min: 0, max: 100 },
    
  },
  vAxis: {
    title: "Tasks",
  

  },
};

//--------------------------------------------------------------------------------------------------

// Most Useful Chart

export const useful_data = [
  ["Features", "# of participants",{ role: 'annotation' } ],
  ["Focus Toggle", 4, '🔘'],
  ["Focus Timer", 3,'⏰' ],
  ["Task Breaker", 1,'✂️' ],
];

export const useful_options = {
    title: "Most Helpful Feature",
  animation: {
    duration: 1000,
    easing: "in",
    startup: true, //This is the new option
  },
  chartArea:{
    width:'50%',
},
  bars: "horizontal",

  backgroundColor: "#FAFAFA",

  fontSize: 14,
  fontName: "Roboto",
  titleTextStyle: {
    color: "#666",
    fontName: "Roboto",
    fontSize: 18,
    bold: 1,

  },
  legend: { position: "none" },
  annotations: {
    textStyle: {
      fontName: "Roboto",
      fontSize: 20,
      bold: 0,
      italic: false,
      // The color of the text.
      color: "white",

      // The transparency of the text.
      opacity: 1,
    },
  },

  hAxis: {
    title: "# of participants",

    minValue: 0,
    maxValue: 4,
  },
  vAxis: {
    title: "Features",
  },
};
