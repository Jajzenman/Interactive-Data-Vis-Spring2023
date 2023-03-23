/* 2-1 quantities and amounts */


/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * .8;
const height = window.innerHeight * .8;
const margin = 50;
var yTextPadding = 20;
const red =    "#FF0000";
const yellow = "#FFFF00";
const green =  "#00FF00";
const blue =   "#0000FF";
const purple = "#A020F0";

/* LOAD DATA */
d3.csv('../data/squirrelActivities.csv', d3.autoType)
  .then(data => {
    console.log("data", data)

    /* SCALES */
    /** This is where you should define your scales from data to pixel space */
    const xScale = d3.scaleLinear()
    .domain([0,d3.max(data, d=> d.count)])
    .range([margin,width - margin])
    
    const yScale = d3.scaleBand()
      .domain(data.map(d=>d.activity))
      .range([margin, height - margin]) //visual variable
      .paddingInner(.2) 
    
        console.log("count", data)
    
        console.log("activity",data)
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // const color = d3.scale.ordinal().range(["red","yellow","green","blue","purple"])
    

  color = d3.scaleOrdinal()
  .range(["#FF0000","#FFFF00","#00FF00","#0000FF","#A020F0"])
   
    /* HTML ELEMENTS */
    /** Select your container and append the visual elements to it */
    //svg
    const svg = d3.select("#container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)

  })