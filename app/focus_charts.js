// Task Success Chart

export const taskSuccess_data = [
  ["Task", "Success Rate (%)", { role: "style" },],
  ["Start a focus timer", 100,"rgb(192, 38, 211)"],
  ["Toggle a focus event", 80,"rgb(192, 38, 211)"],
  ["Schedule a focus event", 50,"rgb(192, 38, 211)"],
  ["Break down tasks", 30,"rgb(192, 38, 211)"],
];

export const taskSuccess_options = {
  title: "Task Success Rate",
  // colors: ['rgb(192, 38, 211)'],
  backgroundColor: 'rgb(30, 27, 75)',

  animation: {
    duration: 1000,
    easing: "in",
    startup: true, //This is the new option
  },
  chartArea:{
      width:'50%',
      borderRadius:'50px'
  },
  width: "100%",
  bars: "horizontal",
  bar: { groupWidth: "60%" },
  fontSize: 14,
  fontName: "Roboto",
  titleTextStyle: {
    color: 'rgb(250, 250, 250)',
    fontName: "Roboto",
    fontSize: 18,
    bold: 1,
  },
  legend: { position: "none" },
  tooltip:{
    isHtml:true,
    textStyle:{
      color:'rgb(82, 82, 82)',
      fontName: 'Roboto',
      fontSize: 14,
      bold: 1,
      italic: 0},
      
  },
  hAxis: {
    title: "Percentage %",
    titleTextStyle: {
      color: 'rgb(250, 250, 250)'
    },
    textStyle: {
      color: 'rgb(250, 250, 250)'
    },
    viewWindow: { min: 0, max: 100 },
    
  },
  vAxis: {
    title: "Tasks",
    titleTextStyle: {
      color: 'rgb(250, 250, 250)'
    },
    textStyle: {
      color: 'rgb(250, 250, 250)'
    },
  

  },
};

//--------------------------------------------------------------------------------------------------

// Most Useful Chart

export const useful_data = [
  ["Features", "# of participants",{role:'style'},{ role: 'annotation' } ],
  ["Focus Toggle", 4, 'rgb(79, 70, 229)','🔘'],
  ["Focus Timer", 3,'rgb(79, 70, 229)','⏰' ],
  ["Task Breaker", 1,'rgb(79, 70, 229)','✂️' ],
];

export const useful_options = {
  title: "Most Helpful Feature",
  // colors: ['rgb(79, 70, 229)'],
  backgroundColor:'rgb(30, 27, 75)',
  animation: {
    duration: 1000,
    easing: "in",
    startup: true, //This is the new option
  },
  chartArea:{
    width:'50%',
},
  bars: "horizontal",
  bar: { groupWidth: "60%" },
  fontSize: 14,
  fontName: "Roboto",
  titleTextStyle: {
    color: 'rgb(250, 250, 250)',
    fontName: "Roboto",
    fontSize: 18,
    bold: 1, 
  },
  legend: { position: "none" },
  // annotations: {
  //   textStyle: {
  //     fontName: "Roboto",
  //     fontSize: 20,
  //     bold: 0,
  //     italic: false,
  //     color: 'rgb(250, 250, 250)',

  //     opacity: 1,
  //   },
    
  // },
  tooltip:{
    isHtml:true,
    textStyle:{
      color:'rgb(82, 82, 82)',
      fontName: 'Roboto',
      fontSize: 14,
      bold: 1,
      italic: 0}
  },
  hAxis: {
    title: "# of participants",
    titleTextStyle: {
      color: 'rgb(250, 250, 250)'
    },
    textStyle: {
      color: 'rgb(250, 250, 250)'
    },
    minValue: 0,
    maxValue: 4,
  },
  vAxis: {
    title: "Features",
    titleTextStyle: {
      color: 'rgb(250, 250, 250)'
    },
    textStyle: {
      color: 'rgb(250, 250, 250)'
    },
  },
};
