/********************
 ******** 2C ********
 ********************/

//Width and height
//Width and height
var barChartw = 600;
var barCharth = 400;
var barPadding = 1;
var barChartPadding = { bottom: 80, left: 40, top: 80 };

var barchartDataset = [];
var allCounts = [];
var categories = [];

var barchartYScale;
var barchartSvg;
var dataSelector = 11;

var valueLabels;
var catLabels;
var title;
var context = "Income";
var contextTitle;
var container;
var barchartColorpicker;
var formatter = d3.format(",.1%");
d3.select("#menu")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function () {
        context = "m2"
        LoadAndTransition("m2_indbygger_bydel_T_procenter.csv");
    })
    .text("m2");
d3.select("#menu")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function () {
        context = "Income"
        LoadAndTransition("personer_indkomst_bydel_procenter_T.csv");
    })
    .text("Income");
d3.select("#menu")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function () {
        context = "Residence"
        LoadAndTransition("Ejerforhold_indbygger_bydel_T_procenter.csv");
    })
    .text("Residence");
d3.select("#menu")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function () {
        context = "Age"
        LoadAndTransition("Aldersgruppe_indbyggere_bydel_T_procenter.csv");
    })
    .text("Age");
container = d3.select("#histogram")
    .style("margin", "10px")
    .attr("id", "chartContainer");

d3.csv("./data/personer_indkomst_bydel_procenter_T.csv", function (data) {
    barchartDataset = data.map(function (d) { return [d["group"], +d["Amager Øst"], +d["Amager Vest"], +d["Bispebjerg"], +d["Brønshøj-Husum"], +d["Indre By"], +d["Nørrebro"], +d["Østerbro"], +d["Valby"], +d["Vanløse"], +d["Vesterbro"], +d["Avg in CPH"]]; });
    categories = Object.keys(data[0]);
    categories.shift();
    console.log(barchartDataset)
    for (var i = 0; i < barchartDataset.length; i++) {
        for (var j = 1; j < barchartDataset[0].length; j++) {
            allCounts = allCounts.concat(barchartDataset[i][j]);
        }
    }
    barchartColorpicker = d3.scale.linear()
        .domain([0, 0.1, d3.max(allCounts)])
        .range(["#ffead3", "#ffa84c", "#ff8300"])
        .interpolate(d3.interpolateHcl);
    barchartYScale = d3.scale.linear()
        .domain([0, d3.max(allCounts)])
        .range([0, barCharth - barChartPadding.bottom - barChartPadding.top]);

    //Create SVG element
    barchartSvg = d3.select("body").select("#chartContainer")
        .append("svg")
        .attr("width", barChartw + barChartPadding.left)
        .attr("height", barCharth);


    barchartSvg.selectAll("rect")
        .data(barchartDataset)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * (barChartw / barchartDataset.length) + barChartPadding.left;
        })
        .attr("y", function (d) {
            return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
        })
        .attr("width", barChartw / barchartDataset.length - barPadding)
        .attr("height", function (d) {
            return barchartYScale(d[dataSelector]);
        })
        .attr("fill", function (d) {
            return barchartColorpicker(d[dataSelector]);
        });

    // add category labels
    catLabels = barchartSvg.selectAll("gText")
        .data(barchartDataset)
        .enter()
        .append("svg:g")
        .attr("transform", function(d, i) {return "translate(" + (i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left )+ "," + (barCharth - 60) + ")";})
        .append("text")
        .text(function (d) {
            return d[0];
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black")
		.attr("text-anchor","end")
		.attr("transform", function(d, i) {return "translate(10,0) rotate(-15,0,0)";});

    // add value labels
    valueLabels = barchartSvg.selectAll("text.values")
        .data(barchartDataset)
        .enter()
        .append("text")
        .text(function (d) {
            return formatter(d[dataSelector]);
        })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
            return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
        })
        .attr("y", function (d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom + 20;
            }
            else {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom - 10;
            }
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", function (d) {
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
        .text("Pct. of people");
    title = barchartSvg.append("text")
        .attr("y", 40)
        .attr("x", (barChartw / 2) + barChartPadding.left / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(titleFinder());

    contextTitle = barchartSvg.append("text")
        .attr("y", 20)
        .attr("x", (barChartw / 2) + barChartPadding.left / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(context);
    contextTitle.text(context);
    title.text(titleFinder());
});

var titleFinder = function () {
    return categories[dataSelector - 1];
}
var transition = function () {
    // redraw columns
    barchartSvg.selectAll("rect")
        .data(barchartDataset)
        .transition()
        .duration(500)
        .attr("x", function (d, i) {
            return i * (barChartw / barchartDataset.length) + barChartPadding.left;
        })
        .attr("y", function (d) {
            return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
        })
        .attr("width", barChartw / barchartDataset.length - barPadding)
        .attr("height", function (d) {
            return barchartYScale(d[dataSelector]);
        })
        .attr("fill", function (d) {
            return barchartColorpicker(d[dataSelector]);
        });

    // redraw value labels
    valueLabels.data(barchartDataset)
        .transition()
        .duration(500)
        .text(function (d) {
            return formatter(d[dataSelector]);
        })
        .attr("text-anchor", "middle")
        .attr("x", function (d, i) {
            return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
        })
        .attr("y", function (d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom + 20;
            }
            else {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom - 10;
            }
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", function (d) {
            if (barchartYScale(d[dataSelector]) > 30) {
                return "white";
            }
            else {
                return "black";
            }
        });
    // redraw title
    title.text(titleFinder());
    contextTitle.text(context);
}
var LoadAndTransition = function (fileName) {

    d3.csv("./data/" + fileName, function (data) {
        barchartDataset = data.map(function (d) { return [d["group"], +d["Amager Øst"], +d["Amager Vest"], +d["Bispebjerg"], +d["Brønshøj-Husum"], +d["Indre By"], +d["Nørrebro"], +d["Østerbro"], +d["Valby"], +d["Vanløse"], +d["Vesterbro"], +d["Avg in CPH"]]; });
        categories = Object.keys(data[0]);
        categories.shift();
        // redraw columns
        allCounts = [];
        for (var i = 0; i < barchartDataset.length; i++) {
            for (var j = 1; j < barchartDataset[0].length; j++) {
                allCounts = allCounts.concat(barchartDataset[i][j]);
            }
        }

        barchartColorpicker = d3.scale.linear()
            .domain([0, 0.1, d3.max(allCounts)])
            .range(["#ffead3", "#ffa84c", "#ff8300"])
            .interpolate(d3.interpolateHcl);
        barchartYScale = d3.scale.linear()
            .domain([0, d3.max(allCounts)])
            .range([0, barCharth - barChartPadding.bottom - barChartPadding.top]);

        var bars = barchartSvg.selectAll("rect")
            .data(barchartDataset);
        bars.exit()
            .remove();
        bars.enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (barChartw / barchartDataset.length) + barChartPadding.left;
            })
            .attr("y", function (d) {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
            })
            .attr("width", barChartw / barchartDataset.length - barPadding)
            .attr("height", function (d) {
                return barchartYScale(d[dataSelector]);
            })
            .attr("fill", function (d) {
                return barchartColorpicker(d[dataSelector]);
            });
        // remove old  labels
        valueLabels.remove();
        catLabels.remove();


        // add new labels
        catLabels = barchartSvg.selectAll("gText")
            .data(barchartDataset)
            .enter()
            .append("svg:g")
            .attr("transform", function(d, i) {return "translate(" + (i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left )+ "," + (barCharth - 60) + ")";})
            .append("text")
            .text(function (d) {
                return d[0];
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "black")
    		.attr("text-anchor","end")
    		.attr("transform", function(d, i) {return "translate(10,0) rotate(-15,0,0)";});


        valueLabels = barchartSvg.selectAll("text.values")
            .data(barchartDataset)
            .enter()
            .append("text")
            .text(function (d) {
                return formatter(d[dataSelector]);
            })
            .attr("text-anchor", "middle")
            .attr("x", function (d, i) {
                return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
            })
            .attr("y", function (d) {
                if (barchartYScale(d[dataSelector]) > 30) {
                    return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom + 20;
                }
                else {
                    return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom - 10;
                }
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", function (d) {
                if (barchartYScale(d[dataSelector]) > 30) {
                    return "white";
                }
                else {
                    return "black";
                }
            });
            transition();
    });
}
