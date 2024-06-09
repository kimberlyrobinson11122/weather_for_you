// global var + const
var searchInputEl = document.querySelector('.search_input');
var cityName = `New York`

// API key from openweather api
const apiKey = `115fc92bba0f7fa87ae27558e41df27f`;

//example - var x = document.getElementById("myText").value;

// event listener for the search button
let searchBtn = document.querySelector('.search_button');
searchBtn.addEventListener("click", function() {
    // verify search button click
    console.log("search has been clicked");
    let cityName = searchInputEl.value;
    const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;         

    // fetch data from the Geo API
    fetch(geoApi)
        .then(function(response) {
            return response.json();
        })     
        .then(function(data) {
            
            console.log(data);
            
            // loop through each object in array
            // for (var i = 0; i < data.length; i++) {
                var lat = data[0].lat;
                var lon = data[0].lon;

            // logging the latitude and longitude to the console
            console.log('Weather Latitude:', lat);
            console.log('Weather Longitude:', lon);
            getFiveDayWeather(lat, lon);
            currentWeather(lat, lon);
            // }
        })
            .catch(function(error) {
                console.log("There was an error when getting weather data:", error);
            }
        );
});

function getFiveDayWeather(lat, lon) {

const fiveDayApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
fetch(fiveDayApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {  
        console.log(data);
});
}


//element.addEventListener("click", function(){ alert("Hello World!"); });

// openweather api url
function currentWeather(lat, lon) {
const weatherData = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

console.log(weatherData);

fetch(weatherData)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
});
}
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