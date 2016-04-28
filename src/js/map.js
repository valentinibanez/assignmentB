function plotMap(selection) {
    const rates = {
        "Amager Øst": 91726,
        "Amager Vest": 104830,
        "Bispebjerg": 89714,
        "Brønshøj-Husum": 68332,
        "Indre By": 86984,
        "Nørrebro": 131694,
        "Østerbro": 123870,
        "Valby": 83860,
        "Vanløse": 64988,
        "Vesterbro": 100584
    }
    const width = 800,
        height = 500;

    let svg = selection.append("svg")
        .attr("width", width)
        .attr("height", height);

    var g = svg.append("g");

    var zoom = d3.behavior.zoom()
        .scaleExtent([0.5, 15])
        .on("zoom", zoomed);

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
    var ext_color_domain = [64988, 95600, 131694]
    var legend_labels = ["< 50", "50+", "150+", "350+", "750+", "> 1500"]
    var color = d3.scale.linear()
        .domain([64988, 95600, 131694])
        .range(["#d7191c", "#ffffbf", "#2c7bb6"])
        .interpolate(d3.interpolateHcl);


    svg
        .call(zoom)
        .call(zoom.event);
    d3.json("data/cph_districts.json", function (error, us) {
        if (error) throw error;

        const states = topojson.feature(us, us.objects.bydele),
            state = states.features.filter(function (d) { return d.properties.bydel_nr === 9; })[0];
        console.log(states);
        console.log(state);

        let projection = d3.geo.mercator().scale(1)
            .translate([0, 0]);;

        let path = d3.geo.path()
            .projection(projection);

        let b = path.bounds(states),
            s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

        projection.scale(s).translate(t);


        g.attr("class", "region")
            .selectAll("path")
            .data(states.features)
            .enter().append("path")
            .attr("d", path)
            .style("fill", function (d) {
                console.log("rate", color(rates[d.properties.navn]));
                return color(rates[d.properties.navn])
            })
            .style("opacity", 0.8)
            //Adding mouseevents
            .on("mouseover", function (d) {
                d3.select(this).transition().duration(300).style("opacity", 1);
                console.log(d);
                div.transition().duration(300)
                    .style("opacity", 1)
                div.text(d.properties.navn + " : " + rates[d.properties.navn])
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 30) + "px");
            })
            .on("mouseout", function () {
                d3.select(this)
                    .transition().duration(300)
                    .style("opacity", 0.8);
                div.transition().duration(300)
                    .style("opacity", 0);
            })


        // g.append("path")
        //     .datum(topojson.mesh(us, us.objects.bydele, function(a, b) { return a !== b; }))
        //     .attr("class", "mesh")
        //     .attr("d", path);

        // g.append("path")
        //     .datum(state)
        //     .attr("class", "outline")
        //     .attr("d", path)
        //     .on("mouseover", function() {
        //         dataSelector = state.properties.bydel_nr;
        //         console.log(dataSelector)
        //         transition();
        //     });

        //TODO: add labels to all districts
        g.append("svg:text")
            .datum(state)
            .text(function (d) {
                return d.properties.navn;
            })
            .attr("x", function (d) {
                return path.centroid(d)[0];
            })
            .attr("y", function (d) {
                return path.centroid(d)[1];
            })
            .attr("text-anchor", "middle")
            .attr('font-size', '9pt');



        //Adding legend for our Choropleth

        var legend = svg.selectAll("g.legend")
            .data(ext_color_domain)
            .enter().append("g")
            .attr("class", "legend");

        var ls_w = 20, ls_h = 20;

        legend.append("rect")
            .attr("x", 20)
            .attr("y", function (d, i) { return height - (i * ls_h) - 2 * ls_h; })
            .attr("width", ls_w)
            .attr("height", ls_h)
            .style("fill", function (d, i) { return color(d); })
            .style("opacity", 0.8);

        legend.append("text")
            .attr("x", 50)
            .attr("y", function (d, i) { return height - (i * ls_h) - ls_h - 4; })
            .text(function (d, i) { return legend_labels[i]; });
    });

    function zoomed() {
        g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    d3.select(self.frameElement).style("height", height + "px");
}

plotMap(d3.select("#map"));
