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
  var dataFilter = d3.select("#datasearch");
  var inputDate = dataFilter.property("value");
  var inputCity = dataFilter.property("value");
  var inputState = dataFilter.property("value");
  var inputCountry = dataFilter.property("value");
  var inputShape = dataFilter.property("value");
  console.log(dataFilter);
  var filteredData = tableData.filter(sighting => 
    sighting.datetime === inputDate ||
    sighting.city === inputCity ||
    sighting.state === inputState ||
    sighting.country === inputCountry ||
    sighting.shape === inputShape);
  console.log(filteredData);
  filteredData.forEach(function(selections) {
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