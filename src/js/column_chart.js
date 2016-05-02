var dataset = [];
d3.csv("./data/indbyggere.csv", function (data) {
    dataset = data.map(function (d) { return [{ key: d["Bydel"], value: +d["Personer"] }] });
    var color = d3.scale.linear()
        .domain([64988, 95600, 131694])
        .range(["#ffead3", "#ffa84c", "#ff8300"])
        .interpolate(d3.interpolateHcl);

    function plotColumns(selection) {
        //Width, height and padding
        var width = 800;
        var height = 250;
        var padding = 80;

        // Define SVG element
        var svg = selection
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // Define scale for x
        var xScale = d3.scale.ordinal()
            .domain(d3.range(dataset.length))
            .rangeRoundBands([padding, width], 0.05);

        // Define scale for y
        var yScale = d3.scale.linear()
            .domain([0, d3.max(dataset, (d) => {
                return d[0].value;
            })])
            .range([height - padding, 0]);

        // Create bars
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return xScale(i);
            })
            .attr("y", function (d, i) {
                return yScale(d[0].value);
            })
            .attr("width", xScale.rangeBand())
            .attr("height", function (d) {
                return yScale(0) - yScale(d[0].value);
            })
            .attr("fill", function (d) {
                return color(d[0].value);
            });

        // Create labels
        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function (d) {
                return d[0].value;
            })
            .attr("text-anchor", "middle")
            .attr("x", function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            })
            .attr("y", function (d) {
                if (yScale(d[0].value) < height - padding - 30) {
                    return yScale(d[0].value) + 14;
                }
                else {
                    return yScale(d[0].value) - 10;
                }
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", function (d) {
                console.log(yScale(d[0].value))
                console.log(height-padding)
                if (yScale(d[0].value) < height - padding - 30) {
                    return "black";
                }
                else {
                    return "black";
                }
            });

        // Define x-axis


        //Define y-axis
        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);




        svg.selectAll("text.labels")
            .data(dataset)
            .enter()
            .append("text")
            .text(function (d) {
                return d[0].key;
            })
            .attr("text-anchor", "middle")
            .attr("x", function (d, i) {
                return xScale(i) + xScale.rangeBand() / 2;
            })
            .attr("y", function (d) {
                return height - 50;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "black");


        //Create Y axis
        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0)
            .attr("x", padding / 2 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Population");

        svg.append("text")      // text label for the x axis
            .attr("x", width / 2)
            .attr("y", height - padding + 70)
            .style("text-anchor", "middle")
            .text("District");
    }

    plotColumns(d3.select("#columns"));
});
