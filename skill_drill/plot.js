//Sort cities by population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Select the top 5 cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// Create an array of city names and an array of corresponding population growths
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Create the bar chart with the arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City"},
    yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// Select top 7 cities by population growth
var topSevenCities = sortedCities.slice(0,7);

// Create an array of City names and an array of corresponding population growths
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map( city => parseInt(city.Increase_from_2016));

// Create the bar chart with the arrays
var trace2 = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
};
var data = [trace2];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City"},
    yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot2", data, layout)
