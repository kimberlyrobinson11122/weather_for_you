// use Openweathermap.org - use 5 day weather forecast
// weather dashboard that will run in the browswer, dynamically HTML + CSS
// API key (done)
// Use localstorage to store any persistent data
// current weather
// 5 day weather
// search + adds your searches to the search history button (up to ?)

var searchInputEl = document.querySelector('.searchInput');

//var x = document.getElementById("myText").value;

const apiKey = `1fdef56e946e4c8e8868a0c1341b24c4`;
var cityName = `New York`

let searchBtn = document.querySelector('.searchButton');
searchBtn.addEventListener("click", function() {
    cityName = searchInputEl.value;
    const geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`
    const 

    fetch(geoApi)
        .then(function(response) {
            return response.json();
        })
        .then(function(data){
            //lat
            //lon
            console.log(data);
        })
});

//element.addEventListener("click", function(){ alert("Hello World!"); });

// openweather api url
// const weatherData = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

// console.log(weatherData);

// fetch(weatherData)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
// });

// console.log(weatherData);

//api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey};

// const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

// fetch(queryURL)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });

// console.log(queryURL);

// coord: {lon: xxx.xxx lat: xxx.xxx}
// main: {temp: 294.14, feels like: xxx, temp_min: xxx, temp_max: xxx.xx, pressure: xxxx., name: New York}
// weather: {description: "clear sky". icon: "01d", id: xxx, main: }
// wind: {deg: xxx, gust: xx.xx, speed: xx.xx}