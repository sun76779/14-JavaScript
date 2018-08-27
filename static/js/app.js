// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

console.log(inputValue);
console.log(tableData);

var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

console.log(filteredData);


// create arraies with ufo values

  
var datetime1 = filteredData.map(ufo => ufo.datetime);
var city = filteredData.map(ufo => ufo.city);
var state = filteredData.map(ufo => ufo.state);
var country = filteredData.map(ufo => ufo.country);
var shape = filteredData.map(ufo => ufo.shape);
var durationMinutes = filteredData.map(ufo => ufo.durationMinutes);
var comments = filteredData.map(ufo => ufo.comments);

console.log(state);


// add the ufo info to the `td` tag

for (var i = 0; i < filteredData.length; i++) {
  newrow = d3.select("#ufo-table").append("tr");
  newrow.append("td").text(datetime1[i]);
  newrow.append("td").text(city[i]);
  newrow.append("td").text(state[i]);
  newrow.append("td").text(country[i]);
  newrow.append("td").text(shape[i]);
  newrow.append("td").text(durationMinutes[i]);
  newrow.append("td").text(comments[i]);

}

});

