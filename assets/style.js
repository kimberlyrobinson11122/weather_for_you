// Global variables
var searchInputEl = document.querySelector('.search_input');
var searchHistory = [];

// API key from openweather api
const apiKey = '115fc92bba0f7fa87ae27558e41df27f';

// Event listener for the search button
let searchBtn = document.querySelector('.search_button');
searchBtn.addEventListener("click", function() {
    let cityName = searchInputEl.value;
    if (cityName && !searchHistory.includes(cityName)) {
        searchHistory.push(cityName);
        updateSearchHistory();
    }

    const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetch(geoApi)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                getFiveDayWeather(lat, lon);
                currentWeather(lat, lon);
            } else {
                console.log('No data found for the specified city.');
            }
        })
        .catch(error => {
            console.log("There was an error when getting weather data:", error);
        });
});

// Event listener for the search button using the enter key
document.querySelector('.search_input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
    let cityName = searchInputEl.value;
    if (cityName && !searchHistory.includes(cityName)) {
        searchHistory.push(cityName);
        updateSearchHistory();
    }

    const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetch(geoApi)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                getFiveDayWeather(lat, lon);
                currentWeather(lat, lon);
            } else {
                console.log('No data found for the specified city.');
            }
        })
        .catch(error => {
            console.log("There was an error when getting weather data:", error);
        });
    }
});

function getFiveDayWeather(lat, lon) {
    const fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    fetch(fiveDayApi)
        .then(response => response.json())
        .then(data => {
            updateFiveDayForecast(data);
        });
}

function currentWeather(lat, lon) {
    const weatherData = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    fetch(weatherData)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°F`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('weather-type').setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function updateFiveDayForecast(data) {
    const forecastContainer = document.querySelector('.container');
    forecastContainer.innerHTML = ''; // Clear previous forecast

    for (let i = 0; i < data.list.length; i += 8) { // We use a step of 8 to get daily data (24 hours / 3 hours = 8 intervals)
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const temp = forecast.main.temp;
        const windSpeed = forecast.wind.speed;
        const humidity = forecast.main.humidity;
        const weatherType = forecast.weather[0].description;
        
        const forecastBox = document.createElement('div');
        forecastBox.classList.add('column');
        
        forecastBox.innerHTML = `
            <div class="forecastDetails box fiveDayCard">
                <h2>${date}</h2>
                <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png">
                <div>Temp: ${temp}°F</div>
                <div>Wind Speed: ${windSpeed} m/s</div>
                <div>Humidity: ${humidity}%</div>
                <div>Type: ${weatherType}</div>
            </div>
        `;
        
        forecastContainer.appendChild(forecastBox);
    }
}

function updateSearchHistory() {
    const buttonColumn = document.querySelector('.buttonColumn');
    buttonColumn.innerHTML = ''; // Clear previous buttons

    searchHistory.forEach((city) => {
        const button = document.createElement('button');
        button.classList.add('longButton');
        button.textContent = city;
        button.addEventListener('click', function() {
            searchCity(city);
        });
        buttonColumn.appendChild(button);
    });
}

function searchCity(cityName) {
    const geoApi = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    fetch(geoApi)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var lat = data[0].lat;
                var lon = data[0].lon;
                getFiveDayWeather(lat, lon);
                currentWeather(lat, lon);
            } else {
                console.log('No data found for the specified city.');
            }
        })
        .catch(error => {
            console.log("There was an error when getting weather data:", error);
        });
}
