// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sighting data from data.js
// console.log(data);

// // // Step 1: Loop Through `data` and console.log each ufo report object
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
// });

// // // Step 2:  Use d3 to append one table row `tr` for each ufo report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
//   var row = tbody.append("tr");
// });

// // Step 3:  Use `Object.entries` to console.log each ufo report value
// data.forEach(function(ufoSighting) {
//   console.log(ufoSighting);
//   var row = tbody.append("tr");

//   Object.entries(ufoSighting).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

//assign the data from 'data.js to a variable
var UFOsighting = data;

data.forEach((UFOsighting) => {
  var row = tbody.append("tr");
  Object.entries(UFOsighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



//set up filter search 
var button = d3.select("#filter-btn");

button.on("click", function() {
  
  //select the input element date
  var inputDate = d3.select("#datetime");

  //get the value property of the input element
  var inputValue = inputDate.property("value");

  console.log(inputValue);
  //console.log(UFOsighting);

  //filter the data?
  var filteredSighting = UFOsighting.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredSighting);


  //remove the existing list
  tbody.html("");

  filteredSightings.forEach((filteredSighting) => {
    var row = tbody.append("tr");
    Object.entries(filteredSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});