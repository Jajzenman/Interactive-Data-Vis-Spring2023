
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

    // bars
    svg.selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class","bar")
      .attr("x", margin)
      .attr("y", d=>yScale(d.activity))
      .attr("height", yScale.bandwidth()) 
      .attr("width", d=>xScale(d.count)-margin)
      .attr("fill", function(d, i) {
        return color(i);
      })
      .text(function(d,i) {
        return data[i].activity;
      });
    
    // append xAxis
    svg
      .append("g")
      .attr("class", "x-axis")
      .style("transform", `translate(0px, ${height - margin}px)`)
      .call(xAxis)
  
 // append yAxis
 svg
 .append("g")
 .attr("class", "y-axis")
 .style("transform", `translate(${margin}px, 0px)`)
 .call(yAxis)

   // append Text
   
   /* svg.append("text")
      .attr ("x", (width - margin)/2)
      .attr ("y", 10)
      .attr("transform","translate(" + ((width - margin)/2)+ " ," + (height-10) + ")")
      .style("text-anchor", "middle")
      .text('Counts');
 
      svg.append("text")
      .attr ("x", (width/2+margin))
      .attr ("y", 0)
      // .attr("transform","translate(" + ((width - margin)/2)+ " ," + (height-10) + ")")
      .style("text-anchor", "left")
      .text('Activities');
*/
      // printing counts at right of each bar
      svg.selectAll("text.cntLabel")
      .data(data)
      .join("text")
      .attr("class", "cntLabel")
      .text(d => d.count)
      .attr("x", d => xScale(d.count) + 15)
      .attr("y", d => yScale(d.activity) + yScale.bandwidth() / 2)
      .attr("fill" , "black")
      .attr("font-size", "9pt")
      .attr("text-anchor", "middle")

/*      svg.selectAll("text.actLabel")
      .data(data)
      .join("text")
      .attr("class", "actLabel")
      .text(d => d.activity)
      // position for x is: unchanged
      // position for y is:
      //  length of yScale(d.bandwidth() - length of yScale(d.activity) /2
      .attr("x", d => xScale(d.count) - d.act_length / 2 )
      .attr("y", d => yScale.bandwidth() - yScale(d.activity) / 2 ) 
      .attr("fill" , "black")
      .attr("font-size", "9pt")
      .attr("text-anchor", "middle")
*/

  // var yTextPadding = 20;
    
  //   // bar text
  //   svg.selectAll(".bartext")
  //     .data(data)
  //     .enter()
  //     .append("text")
  //     .attr("class", "bartext")
  //     .attr("text-anchor", "middle")
  //     .attr("fill", "white")
  //     .attr("x", function(d,i) {
  //       return x(i)+x.rangeBand()/2; })
  //     .attr("y", function(d,i) {
  //        return height-y(d)+yTextPadding;})
  //     .text(function(d,i)
  //     return d;);
  // ADD CHART TITLE
  svg
  .append("text")
  .attr("class", "title")
  .attr("x", width / 2)
  .attr("y", height / 20) //higher the denominator, higher the text moves up pg
  .attr("text-anchor", "middle")
  .text('Squirrel Activities') 
  .attr("font-family", "Cursive")
  .style("font-size", "18px")
  .style("font-weight", "bold")
  .attr("fill", "blue")
});   