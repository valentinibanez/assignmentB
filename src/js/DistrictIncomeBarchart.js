/********************
 ******** 2C ********
 ********************/

//Width and height
//Width and height
var barChartw = 800;
var barCharth = 250;
var barPadding = 1;
var barChartPadding = { bottom: 50, left: 40, top: 40 };

var datasetVC = [];
var allCounts = [];
var categories = [];

var barchartYScale;
var barchartSvg;
var dataSelector = 1;

var valueLabels;
var title;
var yearLabel;
var container;

var formatter = d3.format(",.1%");

d3.select("body")
    .append("div")
    .attr("class", "arrow-left")
    .attr("id", "back")
    .on("click", function() {
        if (dataSelector > 1) {
            dataSelector--;
        }
        transition();
    });
yearLabel = d3.select("body")
    .append("div")
    .style("float", "left")
    .style("margin", "5px")
    .style("width", "30px")
    .text("<50.000")
    .attr("id", "yearLabel");
d3.select("body")
    .append("div")
    .attr("class", "arrow-right")
    .attr("id", "next")
    .on("click", function() {
        if (dataSelector < 10) {
            dataSelector++;
        }
        transition();
    });
container = d3.select("body")
    .append("p")
    .style("float", "none")
    .style("margin", "5px")
    .attr("id", "chartContainer");

d3.csv("./data/personer_indkomst_bydel_procenter.csv", function(data) {

    datasetVC = data.map(function(d) { return [d["Bydel"], +d["<50.000 kr."], +d["50.000-99.999 kr."], +d["100.000-149.999 kr."], +d["150.000-199.999 kr."], +d["200.000-299.999 kr."], +d["300.000-399.999 kr."], +d["400.000-499.999 kr."], +d["500.000-599.999 kr."], +d["600.000-699.999 kr."], +d[">=700.000 kr."]]; });
    categories = ["<50.000 kr.", "50.000-99.999 kr.", "100.000-149.999 kr.","150.000-199.999 kr.","200.000-299.999 kr.","300.000-399.999 kr.","400.000-499.999 kr.","500.000-599.999 kr.","600.000-699.999 kr.",">=700.000 kr."];
    console.log(datasetVC);
    for (var i = 0; i < datasetVC.length; i++) {
        for (var j = 1; j < datasetVC[0].length; j++) {
            allCounts = allCounts.concat(datasetVC[i][j]);
        }
    }
    barchartYScale = d3.scale.linear()
        .domain([0, d3.max(allCounts)])
        .range([0, barCharth - barChartPadding.bottom - barChartPadding.top]);

    //Create SVG element
    barchartSvg = d3.select("body").select("#chartContainer")
        .append("svg")
        .attr("width", barChartw + barChartPadding.left)
        .attr("height", barCharth);


    barchartSvg.selectAll("rect")
        .data(datasetVC)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
            return i * (barChartw / datasetVC.length) + barChartPadding.left;
        })
        .attr("y", function(d) {
            return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
        })
        .attr("width", barChartw / datasetVC.length - barPadding)
        .attr("height", function(d) {
            return barchartYScale(d[dataSelector]);
        })
        .attr("fill", function(d) {
            return "rgb(90,140,180)";
        });

    // add value labels


    // add category labels
    barchartSvg.selectAll("text.labels")
        .data(datasetVC)
        .enter()
        .append("text")
        .text(function(d) {
            console.log(d[0]);
            return d[0];
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (barChartw / datasetVC.length) + (barChartw / datasetVC.length - barPadding) / 2 + barChartPadding.left;
        })
        .attr("y", function(d) {
            return barCharth - 30;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black");

    // add value labels
    valueLabels = barchartSvg.selectAll("text.values")
        .data(datasetVC)
        .enter()
        .append("text")
        .text(function(d) {
            return formatter(d[dataSelector]/100);
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (barChartw / datasetVC.length) + (barChartw / datasetVC.length - barPadding) / 2 + barChartPadding.left;
        })
        .attr("y", function(d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom + 20;
            }
            else {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom - 10;
            }
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", function(d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return "white";
            }
            else {
                return "black";
            }
        });
    // add axis label
    barchartSvg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0)
        .attr("x", 0 - (barCharth / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Number of Crimes Recorded");
    title = barchartSvg.append("text")
        .attr("y", 0)
        .attr("x", (barChartw / 2) + barChartPadding.left / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(function(d) {
            year();
        });
});

var year = function() {
    return categories[dataSelector-1];
}
var transition = function() {
    console.log(dataSelector);
    // redraw columns
    barchartSvg.selectAll("rect")
        .data(datasetVC)
        .transition()
        .duration(500)
        .attr("x", function(d, i) {
            return i * (barChartw / datasetVC.length) + barChartPadding.left;
        })
        .attr("y", function(d) {
            return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
        })
        .attr("width", barChartw / datasetVC.length - barPadding)
        .attr("height", function(d) {
            return barchartYScale(d[dataSelector]);
        })
        .attr("fill", function(d) {
            return "rgb(90,140,180)";
        });

    // redraw value labels
    valueLabels.data(datasetVC)
        .transition()
        .duration(500)
        .text(function(d) {
            return formatter(d[dataSelector]/100);
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (barChartw / datasetVC.length) + (barChartw / datasetVC.length - barPadding) / 2 + barChartPadding.left;
        })
        .attr("y", function(d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom + 20;
            }
            else {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom - 10;
            }
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", function(d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return "white";
            }
            else {
                return "black";
            }
        });
    // redraw title
    title.text(year());
    yearLabel.text(year());
}
