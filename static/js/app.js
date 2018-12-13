// create data variable from data.js
var tableData = data;

//Select the "Filter by Date" button
var filterDate = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Complete the click handler for the form
filterDate.on("click", function() {

  // Prevent the page from refreshing
d3.event.preventDefault();
  // Select the input element and get the raw HTML code
var inputElement = d3.select("#datetime");
  // Get the value property of the input element
var inputValue = inputElement.property("value");
  // Use the form input to filter the data by date/time user input
var filteredByDate = tableData.filter(sighting => sighting.datetime === inputValue);
  // Remove anything in output previously appended using JQuery
$("tbody").empty();
//Append new data to existing table according to user input
filteredByDate.forEach((filteredTable) => {
  var row = tbody.append("tr");
  Object.entries(filteredTable).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

});
