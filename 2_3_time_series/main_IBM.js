/* 2_3_time_series */

/* CONSTANTS AND GLOBALS */
    const width = window.innerWidth * 0.7,
        height = window.innerHeight * 0.7,
        margin = { top: 20, left: 60, bottom: 60, right: 20 };
    
    const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B') ;
   
/* LOAD DATA */
d3.csv("../data/IBM.csv", d => {  //parse the csv
    return {
        year: new Date(+d.Year, 0, 1), //way to convert the year (string) into a date
        filterRow: d.FilterYear, // flags every Feb 1 record 
        adjClose: +d.Adj_Close //will convert the Adjusted Close (written as string) into # - +d = converts it
    }
}).then(data => {
    console.log('data :>> ', data);

    // SCALES

    //X scale
    const xScale = d3.scaleTime() //using time scale
        .domain(d3.extent(data, d => d.year)) //d3.extent looks w/in data & finds min/max years
        .range([margin.left, width - margin.right])

    //Y scale
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.adjClose)) //d3.extent looks w/in data & finds min/max pop
        .range([height - margin.bottom, margin.top])


    // CREATE SVG ELEMENT
    const svg = d3.select("#container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    // BUILD AND CALL AXES
    //X Axis
    const xAxis = d3.axisBottom(xScale)
        svg.append("g")
            .attr("class", "axis")
            .style("font","8px times")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(xAxis)

    // Y Axis
    const yAxis = d3.axisLeft(yScale) //shows the vertical axis
    svg.append("g")
        .attr("class", "axis")
        .style("font","7px times")
        .attr("transform", `translate(${margin.left})`) //moves the vert axis 60px, 0
        .call(yAxis)



    //FILTER DATA
    const filteredData = data.filter(d => d.filterRow === "1") // will only show US data 
    console.log('filtered', filteredData) //shows 119 data pts


    // LINE GENERATOR FUNCTION
    const lineGen = d3.line() //line generator function
        .x(d => xScale(d.year)) //define x accessor - pass through data, take year & pass it to xScale
        .y(d => yScale(d.population)) //define y accessor - pass through data, take pop & pass it to yScale


    //GROUP DATA
    const groupedData = d3.groups(data, d => d.filterRow) //want to group data by FilterYear
    console.log('grouped', groupedData)


    // DRAW LINE
    const line = svg.selectAll(".line")
        .data([filteredData])
        .join("path")
        .attr("class", "line")
        .attr("d", d => lineGen(d))
        .attr("stroke", "darkblue")
        .attr("fill", "none")


    // AREA GENERATOR FUNCTION
    const area = d3.area() //area function requires x (accessor), .y0(baseline), .y1(topline)
        .x(d => xScale(d.year)) //set to the year scale
        .y0(d => yScale.range()[0]) //baseline set to range
        .y1(d => yScale(d.adjClose)) //topline set to population

    // APPEND PATH ELEMENT TO AREA
    svg.append("path")
        .data([filteredData])
        .attr("class", "area")
        .attr("d", area)
        .attr("fill", "red")

    // ADD CHART TITLE
    svg
        .append("text")
        .attr("class", "title")
        .attr("x", width / 2)
        .attr("y", height / 20) //higher the denominator, higher the text moves up pg
        .attr("text-anchor", "middle")
        .text(`IBM stock "Historical Adjusted Close" as of Feb 1 each year`) //interpolates so that name updates to match country change
        .attr("font-family", "Cursive")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .attr("fill", "blue")

/*
var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);
*/
var tooltip = d3.select("path")
    .append("curs")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background", "#000")
    .text("a simple tooltip");

d3.select("path")
  .selectAll("curs")
  .data([filteredData])
  .enter().append("curs")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; })
    .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
      .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
    });