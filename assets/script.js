var APIKey = "5360eb9fa077491dcfd9a0838a52cfc9";
var city;
var userInput = document.getElementById("search");
var button = document.querySelector(".btn");
var today = dayjs().format('MMM DD, YYYY');
var currentWeatherEl = document.querySelector(".currentCity");
var currentTempEl = document.querySelector(".temp");
var currentWindEl = document.querySelector(".wind");
var currentHumidityEl = document.querySelector(".humidity");


button.addEventListener("click", function (event) {

    event.preventDefault();

    city = userInput.value.trim();

    // console.log(city);


    var geoCodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;

    fetch(geoCodingUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();            //why do I have to use throw?
            }

            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            // console.log(data[0].lat);
            // console.log(data[0].lon);
            var lon = data[0].lon;
            var lat = data[0].lat;

            var currentURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            fetch(currentURL)
                .then(function (response) {
                    if (!response.ok) {
                        throw response.json();
                    }

                    return response.json();
                })
                .then(function (data) {
                    console.log(" current weather" + data);
                    console.log("city name: " + data.name);
                    console.log("Today is " + today);
                    console.log("ICON " + data.weather[0].icon);
                    console.log("The tempature in kelvin is " + data.main.temp);
                    console.log("The wind speed is " + data.wind.speed);
                    console.log("The humidity is " + data.main.humidity);

                    var icon = data.weather[0].icon 

                    const iconEl = document.createElement("img");
    iconEl.src = "http://openweathermap.org/img/w/" + icon + ".png";




                   currentWeatherEl.textContent = data.name + " " + "(" + today + ")" + " " + iconEl;
                   currentTempEl.textContent = "Temp: " + data.main.temp;
                   currentWindEl.textContent = "Wind: " + data.wind.speed + " MPH";
                   currentHumidityEl.textContent = "Humidity: " + data.main.humidity + "%";

                });

            var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            fetch(fiveDayURL)
                .then(function (response) {
                    if (!response.ok) {
                        throw response.json();
                    }

                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                });


           
        });


});




