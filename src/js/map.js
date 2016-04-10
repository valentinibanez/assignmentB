function plotMap(selection) {
    const width = 800,
        height = 500;

    let svg = selection.append("svg")
        .attr("width", width)
        .attr("height", height);

    var g = svg.append("g");

    var zoom = d3.behavior.zoom()
        .scaleExtent([0.5, 15])
        .on("zoom", zoomed);

    svg
        .call(zoom)
        .call(zoom.event);
    d3.json("data/cph_districts.json", function(error, us) {
        if (error) throw error;

        const states = topojson.feature(us, us.objects.bydele),
            state = states.features.filter(function(d) { return d.properties.bydel_nr === 9; })[0];

        let projection = d3.geo.mercator().scale(1)
            .translate([0, 0]);;

        let path = d3.geo.path()
            .projection(projection);

        let b = path.bounds(states),
            s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
            t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

        projection.scale(s).translate(t);

        g.append("path")
            .datum(states)
            .attr("class", "feature")
            .attr("d", path);

        g.append("path")
            .datum(topojson.mesh(us, us.objects.bydele, function(a, b) { return a !== b; }))
            .attr("class", "mesh")
            .attr("d", path);

        g.append("path")
            .datum(state)
            .attr("class", "outline")
            .attr("d", path);

        //TODO: add labels to all districts 
        g.append("svg:text")
            .datum(state)
            .text(function(d) {
                return d.properties.navn;
            })
            .attr("x", function(d) {
                return path.centroid(d)[0];
            })
            .attr("y", function(d) {
                return path.centroid(d)[1];
            })
            .attr("text-anchor", "middle")
            .attr('font-size', '9pt');
    });

    function zoomed() {
        g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    d3.select(self.frameElement).style("height", height + "px");
}

plotMap(d3.select("#map"));