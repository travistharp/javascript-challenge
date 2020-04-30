// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

function popTable() {
    tableData.forEach(function(ufoSighting) {
        console.log(ufoSighting);
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key, value]) {
          console.log(key, value);
          var cell = row.append("td");
          cell.text(value);
        });
      });    
};




button.on("click", function() {
  d3.event.preventDefault();
  tbody.html("");
  var dateFilter = d3.select("#datetime");
  var inputDate = dateFilter.property("value");
  console.log(dateFilter);
  var filteredDate = tableData.filter(sighting => sighting.datetime === inputDate);
  console.log(filteredDate);
  filteredDate.forEach(function(selections) {
  console.log(selections);
  var row = tbody.append("tr");
  Object.entries(selections).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
});
});

popTable();