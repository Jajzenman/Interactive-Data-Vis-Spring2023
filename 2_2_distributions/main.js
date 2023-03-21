/* CONSTANTS AND GLOBALS */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 60, left: 60, right: 40 },
  
  radius = 5;

/* LOAD DATA */
d3.csv("../data/organizations-100.csv", d=> {
  return {
    year: new Date(+d.Founded, 0, 1),
    employees: d.Number_of_employees,
    IndustryCode: d.Industry_Code
  }

}).then(data => {
  console.log(data)

  /* SCALES */
  // xscale  - linear,count
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.year))
    .range([margin.left, width - margin.right])

    // yscale - linear,count
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.employees)])
    .range([height - margin.bottom, margin.top])

  const colorScale = d3.scaleOrdinal()
  .domain(["A", "B", "C","E","F","G","H","I","L","M","N","O","P","R","S","T","U","V","W"])
 /*    .range(["red", "blue", "purple"])
    var myColor = d3.scaleOrdinal().domain(data)*/
  .range(["gold", "blue", "green", "yellow", "black", "grey", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"])
  
  /* HTML ELEMENTS */
  // svg
  const svg = d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

  // axis scales
  const xAxis = d3.axisBottom(xScale)
   // .tickFormat(d3.timeFormat("%Y"))

  svg.append("g")
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(xAxis);
  
  const yAxis = d3.axisLeft(yScale)
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis);

  // circles
  const dot = svg
    .selectAll("circle")
    .data(data, d => d.BioID) // second argument is the unique key for that row
    .join("circle")
    .attr("cx", d => xScale(d.year))
    .attr("cy", d => yScale(d.employees))
    .attr("r", radius)
    .attr("fill", d => colorScale(d.IndustryCode))

});
