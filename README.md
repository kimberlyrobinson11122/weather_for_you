# weather_for_you

## 1. dynamically updated HTML and CSS.

## 2. Use the 5 Day Weather ForecastLinks to an external site. to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

# 3. You will use localStorage to store any persistent data. For more information on how to work with the OpenWeather API

GIVEN a weather dashboard with FORM INPUTS
WHEN I search for a CITY
THEN I am presented with CURRENT and FUTURE conditions for that city and that city is ADDED to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the CITY NAME, the DATE, an ICON representation of weather conditions, the TEMP, the HUMIDITY, and the the WIND SPEED
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

// use Openweathermap.org - use 5 day weather forecast
// weather dashboard that will run in the browswer, dynamically HTML + CSS
// API key (done)
// Use localstorage to store any persistent data
// current weather
// 5 day weather
// search + adds your searches to the search history button (up to ?)