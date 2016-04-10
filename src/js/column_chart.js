var dataset = [
{key:1,value:4000},
{key:2,value:3500},
{key:3,value:4400},
{key:4,value:3250},
{key:5,value:4785},
{key:6,value:3600},
{key:7,value:3200}
];

function plotColumns(selection) {
    //Width and height
    var width = 600;
    var height = 250;
    var padding = 60;

    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([padding, width], 0.05);

    var yScale = d3.scale.linear()
        .domain([0, d3.max(dataset, (d) => {
            return d.value;
        })])
        .range([height-padding, 0]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(5);
    
    //Define Y axis
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(5);

    //Create SVG element
    var svg = selection
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    //Create bars
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
            return xScale(i);
        })
        .attr("y", function(d, i) {
            return yScale(d.value);
        })
        .attr("width", xScale.rangeBand())
        .attr("height", function(d) {
            return yScale(0) - yScale(d.value);
        })
        .attr("fill", function(d) {
            return "rgb(96, 0, " + (d.value * 10) + ")";
        });

    //Create labels
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
            return d.value;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return xScale(i) + xScale.rangeBand() / 2;
        })
        .attr("y", function(d) {
            return yScale(d.value) + 14;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");

    //Create X axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height - padding) + ")")
        .call(xAxis);

    svg.append("text")      // text label for the x axis
        .attr("x", width / 2)
        .attr("y", height-padding+35)
        .style("text-anchor", "middle")
        .text("Bydele");

    //Create Y axis
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x", padding/2 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Moneyz");
}

plotColumns(d3.select("#columns"));