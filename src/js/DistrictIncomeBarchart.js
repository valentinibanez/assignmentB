/********************
 ******** 2C ********
 ********************/

//Width and height
//Width and height
var barChartw = 800;
var barCharth = 250;
var barPadding = 1;
var barChartPadding = { bottom: 50, left: 40, top: 40 };

var barchartDataset = [];
var allCounts = [];
var categories = [];

var barchartYScale;
var barchartSvg;
var dataSelector = 1;

var valueLabels;
var title = "";
var container;

var formatter = d3.format(",.1%");
d3.select("body")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function() {

        LoadAndTransition("m2_indbygger_bydel_T_procenter.csv");
    })
    .text("m2");
d3.select("body")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function() {

        LoadAndTransition("personer_indkomst_bydel_procenter_T.csv");
    })
    .text("Income");
d3.select("body")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function() {

        LoadAndTransition("Ejerforhold_indbygger_bydel_T_procenter.csv");
    })
    .text("Residence");
d3.select("body")
    .append("div")
    .attr("class", "DataBtn")
    .attr("id", "m2")
    .on("click", function() {

        LoadAndTransition("Aldersgruppe_indbyggere_bydel_T_procenter.csv");
    })
    .text("Age");
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
d3.select("body")
    .append("div")
    .attr("class", "arrow-right")
    .attr("id", "next")
    .on("click", function() {
        if (dataSelector < 11) {
            dataSelector++;
        }
        transition();
    });
container = d3.select("body")
    .append("p")
    .style("float", "none")
    .style("margin", "5px")
    .attr("id", "chartContainer");

d3.csv("./data/personer_indkomst_bydel_procenter_T.csv", function(data) {
    barchartDataset = data.map(function(d) { return [d["group"], +d["Amager Øst"], +d["Amager Vest"], +d["Bispebjerg"], +d["Brønshøj-Husum"], +d["Indre By"], +d["Nørrebro"], +d["Østerbro"], +d["Valby"], +d["Vanløse"], +d["Vesterbro"], +d["Avg in CPH"]]; });
    categories = Object.keys(data[0]);
    categories.shift();
    for (var i = 0; i < barchartDataset.length; i++) {
        for (var j = 1; j < barchartDataset[0].length; j++) {
            allCounts = allCounts.concat(barchartDataset[i][j]);
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
        .data(barchartDataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
            return i * (barChartw / barchartDataset.length) + barChartPadding.left;
        })
        .attr("y", function(d) {
            return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
        })
        .attr("width", barChartw / barchartDataset.length - barPadding)
        .attr("height", function(d) {
            return barchartYScale(d[dataSelector]);
        })
        .attr("fill", function(d) {
            return "rgb(90,140,180)";
        });



    // add category labels
    barchartSvg.selectAll("text.labels")
        .data(barchartDataset)
        .enter()
        .append("text")
        .text(function(d) {
            return d[0];
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
        })
        .attr("y", function(d) {
            return barCharth - 30;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "black");

    // add value labels
    valueLabels = barchartSvg.selectAll("text.values")
        .data(barchartDataset)
        .enter()
        .append("text")
        .text(function(d) {
            return formatter(d[dataSelector]);
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
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
        .text("Pct. of people");
    title = barchartSvg.append("text")
        .attr("y", 0)
        .attr("x", (barChartw / 2) + barChartPadding.left / 2)
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text(function(d) {
            titleFinder();
            console.log(titleFinder());
        });
});

var titleFinder = function() {
    return categories[dataSelector-1];
}
var transition = function() {
    // redraw columns
    barchartSvg.selectAll("rect")
        .data(barchartDataset)
        .transition()
        .duration(500)
        .attr("x", function(d, i) {
            return i * (barChartw / barchartDataset.length) + barChartPadding.left;
        })
        .attr("y", function(d) {
            return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
        })
        .attr("width", barChartw / barchartDataset.length - barPadding)
        .attr("height", function(d) {
            return barchartYScale(d[dataSelector]);
        })
        .attr("fill", function(d) {
            return "rgb(90,140,180)";
        });

    // redraw value labels
    valueLabels.data(barchartDataset)
        .transition()
        .duration(500)
        .text(function(d) {
            return formatter(d[dataSelector]);
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
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
    title.text(titleFinder());
}
var LoadAndTransition = function(fileName) {

    d3.csv("./data/" + fileName, function(data) {
        barchartDataset = data.map(function(d) { return [d["group"], +d["Amager Øst"], +d["Amager Vest"], +d["Bispebjerg"], +d["Brønshøj-Husum"], +d["Indre By"], +d["Nørrebro"], +d["Østerbro"], +d["Valby"], +d["Vanløse"], +d["Vesterbro"], +d["Avg in CPH"]]; });
        categories = Object.keys(data[0]);
        categories.shift();
        // redraw columns
        allCounts = [];
        for (var i = 0; i < barchartDataset.length; i++) {
            for (var j = 1; j < barchartDataset[0].length; j++) {
                allCounts = allCounts.concat(barchartDataset[i][j]);
            }
        }
        barchartYScale = d3.scale.linear()
            .domain([0, d3.max(allCounts)])
            .range([0, barCharth - barChartPadding.bottom - barChartPadding.top]);

        var bars = barchartSvg.selectAll("rect")
            .data(barchartDataset);
        bars.exit()
            .remove();
        bars.enter()
            .append("rect")
            .attr("x", function(d, i) {
                return i * (barChartw / barchartDataset.length) + barChartPadding.left;
            })
            .attr("y", function(d) {
                return barCharth - barchartYScale(d[dataSelector]) - barChartPadding.bottom;
            })
            .attr("width", barChartw / barchartDataset.length - barPadding)
            .attr("height", function(d) {
                return barchartYScale(d[dataSelector]);
            })
            .attr("fill", function(d) {
                return "rgb(90,140,180)";
            });

        var categoryLabels = barchartSvg.selectAll("text").data(barchartDataset);
        // remove old and add new category labels
        categoryLabels.exit().remove();

        categoryLabels.transition()
            .duration(500)
            .text(function(d) {
                return d[0];
            })
            .attr("text-anchor", "middle")
            .attr("x", function(d, i) {
                return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
            })
            .attr("y", function(d) {
                return barCharth - 30;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "black");

        // remove old and add new value labels
        valueLabels = barchartSvg.selectAll("text.values")
            .data(barchartDataset);
        valueLabels.enter()
            .append("text")
            .text(function(d) {
                return formatter(d[dataSelector]);
            })
            .attr("text-anchor", "middle")
            .attr("x", function(d, i) {
                return i * (barChartw / barchartDataset.length) + (barChartw / barchartDataset.length - barPadding) / 2 + barChartPadding.left;
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
                .text("Pct. of people");
            title = barchartSvg.append("text")
                .attr("y", 0)
                .attr("x", (barChartw / 2) + barChartPadding.left / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text(function(d) {
                    titleFinder();
                });
            transition();
        });
}
