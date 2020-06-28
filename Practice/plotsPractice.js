// Line Graph Example
//Plotly.newPlot("plotArea", [{x:[1,2,3,4],y:[1,4,9,16]}]);

// Bar graph example
//var trace = {
//    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "bar"
//};

//var layout = {
//    title: "Nonalcoholic Beverage Survey",
//    xaxis: {title: "Nonalcoholic Drinks"},
//    yaxis: {title: "Percent of Drinks Ordered"}
//};

//Plotly.newPlot("plotArea", [trace], layout);

// BPie graph example
//var trace = {
//    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//    type: "pie"
//};

//var data = [trace];

//var layout = {
//    title: "'Pie' Chart"
//};

//Plotly.newPlot("plotArea", data, layout);

// Scatter Graph Example
var trace1 = {
    x: [1,2,3,4],
    y:[10,15,13,17],
    mode: 'markers',
    type: 'scatter'
};

var trace2 = {
    x: [2,3,4,5],
    y: [15,5,11,9],
    mode: 'lines',
    type: 'scatter'
};

var trace3 = {
    x: [1,2,3,4],
    y: [12,9,15,12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

Plotly.newPlot("plotArea", data);

// Practice map
var numbers = [0,2,4,6,8];
var plusFive = numbers.map(function(integer) {
    return integer + 5;
});

//Using map to extract values
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

population = cities.map(function(pop){
    return pop.population;
});
console.log(population);

// Practice filter
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sAnimals = words.filter((animal) => animal.startsWith("s"));
console.log(sAnimals)

// Practice slice
slice1 = words.slice(0,3);
console.log(slice1)

slice2 = words.slice(3, );
console.log(slice2)