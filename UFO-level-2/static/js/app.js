// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//console.log(data);

data.forEach(function(ufoSightings){
    console.log(ufoSightings);
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key,value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});
