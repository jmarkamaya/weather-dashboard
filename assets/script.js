var APIKey = "5360eb9fa077491dcfd9a0838a52cfc9";
var city;
var cityBtn;
var userInput = document.getElementById("search");
var button = document.querySelector(".btn");
var today = dayjs().format('MMM DD, YYYY');
var currentWeatherEl = document.querySelector(".currentCity");
var currentTempEl = document.querySelector(".temp");
var currentWindEl = document.querySelector(".wind");
var currentHumidityEl = document.querySelector(".humidity");
var dayOneEl = document.querySelector(".day-1");
var dayTwoEl = document.querySelector(".day-2");
var dayThreeEl = document.querySelector(".day-3");
var dayFourEl = document.querySelector(".day-4");
var dayFiveEl = document.querySelector(".day-5");
var TempOneEL = document.querySelector(".temp-1");
var WindOneEL = document.querySelector(".wind-1");
var HumidityOneEL = document.querySelector(".humidty-1");
var TempTwoEL = document.querySelector(".temp-2");
var WindTwoEL = document.querySelector(".wind-2");
var HumidityTwoEL = document.querySelector(".humidty-2");
var TempThreeEL = document.querySelector(".temp-3");
var WindThreeEL = document.querySelector(".wind-3");
var HumidityThreeEL = document.querySelector(".humidty-3");
var TempFourEL = document.querySelector(".temp-4");
var WindFourEL = document.querySelector(".wind-4");
var HumidityFourEL = document.querySelector(".humidty-4");
var TempFiveEL = document.querySelector(".temp-5");
var WindFiveEL = document.querySelector(".wind-5");
var HumidityFiveEL = document.querySelector(".humidty-5");
var historyButton = document.querySelector(".history-buttons")

var recentSearches = JSON.parse(window.localStorage.getItem("recentSearches")) || [];


showSearches()

button.addEventListener("click", function (event) {

    event.preventDefault();

    city = userInput.value.trim();



    var geoCodingUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;  //was http

    fetch(geoCodingUrl)
        .then(function (response) {
            if (!response.ok) {
                throw response.json();            //why do I have to use throw?
            }

            return response.json();
        })
        .then(function (data) {

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

                    var icon = data.weather[0].icon

                    const iconEl = document.createElement("img");
                    iconEl.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

                    var currentTempDecimal = (data.main.temp - 273.15) * 9 / 5 + 32;

                    var currentTemp = Math.trunc(currentTempDecimal);

                    currentWeatherEl.textContent = data.name + " " + "(" + today + ")";
                    currentWeatherEl.appendChild(iconEl);
                    currentTempEl.textContent = "Temp: " + currentTemp + " \u00B0F";
                    currentWindEl.textContent = "Wind: " + data.wind.speed + " MPH";
                    currentHumidityEl.textContent = "Humidity: " + data.main.humidity + "%";

                });

            var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey; //was http
            fetch(fiveDayURL)
                .then(function (response) {
                    if (!response.ok) {
                        throw response.json();
                    }

                    return response.json();
                })
                .then(function (data) {

                    // DAY ONE 
                    // DATE
                    var dayOne = data.list[0];
                    var dayOneDate = dayjs(dayOne.dt_txt).format('MMM DD, YYYY')
                    dayOneEl.textContent = dayOneDate;
                    //   ICON   
                    var iconOne = dayOne.weather[0].icon
                    const iconElOne = document.createElement("img");
                    iconElOne.src = "https://openweathermap.org/img/wn/" + iconOne + "@2x.png";
                    dayOneEl.appendChild(iconElOne);
                    //  TEMP
                    var DayOneTempDecimal = (dayOne.main.temp - 273.15) * 9 / 5 + 32;
                    var DayOneTemp = Math.trunc(DayOneTempDecimal);
                    TempOneEL.textContent = "Temp: " + DayOneTemp + " \u00B0F";
                    // WIND
                    WindOneEL.textContent = "Wind: " + dayOne.wind.speed + " MPH";
                    // HUMIDITY
                    HumidityOneEL.textContent = "Humidity: " + dayOne.main.humidity + "%";







                    // DAY TWO
                    // DATE
                    var dayTwo = data.list[8];
                    var dayTwoDate = dayjs(dayTwo.dt_txt).format('MMM DD, YYYY');
                    dayTwoEl.textContent = dayTwoDate;
                    //   ICON   
                    var iconTwo = dayTwo.weather[0].icon
                    const iconElTwo = document.createElement("img");
                    iconElTwo.src = "https://openweathermap.org/img/wn/" + iconTwo + "@2x.png";
                    dayTwoEl.appendChild(iconElTwo);
                    //  TEMP
                    var DayTwoTempDecimal = (dayTwo.main.temp - 273.15) * 9 / 5 + 32;
                    var DayTwoTemp = Math.trunc(DayTwoTempDecimal);
                    TempTwoEL.textContent = "Temp: " + DayTwoTemp + " \u00B0F";
                    // WIND
                    WindTwoEL.textContent = "Wind: " + dayTwo.wind.speed + " MPH";
                    // HUMIDITY
                    HumidityTwoEL.textContent = "Humidity: " + dayTwo.main.humidity + "%";




                    // DAY THREE
                    // DATE
                    var dayThree = data.list[16];
                    var dayThreeDate = dayjs(dayThree.dt_txt).format('MMM DD, YYYY');
                    dayThreeEl.textContent = dayThreeDate;
                    //   ICON   
                    var iconThree = dayThree.weather[0].icon
                    const iconElThree = document.createElement("img");
                    iconElThree.src = "https://openweathermap.org/img/wn/" + iconThree + "@2x.png";
                    dayThreeEl.appendChild(iconElThree);
                    //  TEMP
                    var DayThreeTempDecimal = (dayThree.main.temp - 273.15) * 9 / 5 + 32;
                    var DayThreeTemp = Math.trunc(DayThreeTempDecimal);
                    TempThreeEL.textContent = "Temp: " + DayThreeTemp + " \u00B0F";
                    // WIND
                    WindThreeEL.textContent = "Wind: " + dayThree.wind.speed + " MPH";
                    // HUMIDITY
                    HumidityThreeEL.textContent = "Humidity: " + dayThree.main.humidity + "%";






                    // DAY FOUR
                    // DATE
                    var dayFour = data.list[24];
                    var dayFourDate = dayjs(dayFour.dt_txt).format('MMM DD, YYYY');
                    dayFourEl.textContent = dayFourDate;
                    //   ICON   
                    var iconFour = dayOne.weather[0].icon
                    const iconElFour = document.createElement("img");
                    iconElFour.src = "https://openweathermap.org/img/wn/" + iconFour + "@2x.png";
                    dayFourEl.appendChild(iconElFour);
                    //  TEMP
                    var DayFourTempDecimal = (dayFour.main.temp - 273.15) * 9 / 5 + 32;
                    var DayFourTemp = Math.trunc(DayFourTempDecimal);
                    TempFourEL.textContent = "Temp: " + DayFourTemp + " \u00B0F";
                    // WIND
                    WindFourEL.textContent = "Wind: " + dayFour.wind.speed + " MPH";
                    // HUMIDITY
                    HumidityFourEL.textContent = "Humidity: " + dayFour.main.humidity + "%";





                    // DAY FIVE
                    // DATE
                    var dayFive = data.list[32];
                    var dayFiveDate = dayjs(dayFive.dt_txt).format('MMM DD, YYYY');
                    dayFiveEl.textContent = dayFiveDate;
                    //   ICON   
                    var iconFive = dayFive.weather[0].icon
                    const iconElFive = document.createElement("img");
                    iconElFive.src = "https://openweathermap.org/img/wn/" + iconFive + "@2x.png";
                    dayFiveEl.appendChild(iconElFive);
                    //  TEMP
                    var DayFiveTempDecimal = (dayFive.main.temp - 273.15) * 9 / 5 + 32;
                    var DayFiveTemp = Math.trunc(DayFiveTempDecimal);
                    TempFiveEL.textContent = "Temp: " + DayFiveTemp + " \u00B0F";
                    // WIND
                    WindFiveEL.textContent = "Wind: " + dayFive.wind.speed + " MPH";
                    // HUMIDITY
                    HumidityFiveEL.textContent = "Humidity: " + dayFive.main.humidity + "%";
                });

            storeSearches();
            // showSearches();
            



        });


});

function storeSearches() {

    var inputField = userInput.value.trim();
    console.log(inputField);
    var storedSearches = JSON.parse(localStorage.getItem("recentSearches"));
    

    if (!storedSearches) {
        console.log("empty");
        recentSearches.push(inputField);
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }

    else if (storedSearches.indexOf(inputField) !== -1)  
{  
        console.log("Yes, the value exists!")  
        return
}   
else  
{  
       console.log("No, the value is absent.");
       recentSearches.push(inputField);
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

}  

};



// how to only show new cities? window.location.reload();?
function showSearches() {

    var storedSearches = JSON.parse(localStorage.getItem("recentSearches"));

    if (!storedSearches) { 
        return;
    }
    else { 
    

    for (var i = 0; i < storedSearches.length; i++) {      // how to get the last 5? if i just do if i < 5 it will always show the same first 5 scores unless i refresh local storage.


        var buttonEl = document.createElement("button");

        buttonEl.textContent = storedSearches[i];
        buttonEl.setAttribute("style", "list-style-type: numbers; display: block; color: white; margin: 10px; border: 10px; padding: 10px; background-color: blue; border-radius: 25px")
        buttonEl.setAttribute("class", "btn-secondary")
        historyButton.appendChild(buttonEl);
    };
}
};



// EVENT LISTENER FOR SEARCH BUTTONS

historyButton.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-secondary')) {
    console.log(event.target.textContent);

    cityBtn = event.target.textContent;

        console.log("cityBtn" + cityBtn);


        var geoCodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityBtn + "&appid=" + APIKey;

        fetch(geoCodingUrl)
            .then(function (response) {
                if (!response.ok) {
                    throw response.json();            //why do I have to use throw?
                }

                return response.json();
            })
            .then(function (data) {

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

                        var icon = data.weather[0].icon

                        const iconEl = document.createElement("img");
                        iconEl.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

                        var currentTempDecimal = (data.main.temp - 273.15) * 9 / 5 + 32;

                        var currentTemp = Math.trunc(currentTempDecimal);

                        currentWeatherEl.textContent = data.name + " " + "(" + today + ")";
                        currentWeatherEl.appendChild(iconEl);
                        currentTempEl.textContent = "Temp: " + currentTemp + " \u00B0F";
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

                        // DAY ONE 
                        // DATE
                        var dayOne = data.list[0];
                        var dayOneDate = dayjs(dayOne.dt_txt).format('MMM DD, YYYY');
        
                        dayOneEl.textContent = dayOneDate;
                        //   ICON   
                        var iconOne = dayOne.weather[0].icon
                        const iconElOne = document.createElement("img");
                        iconElOne.src = "https://openweathermap.org/img/wn/" + iconOne + "@2x.png";
                        dayOneEl.appendChild(iconElOne);
                        //  TEMP
                        var DayOneTempDecimal = (dayOne.main.temp - 273.15) * 9 / 5 + 32;
                        var DayOneTemp = Math.trunc(DayOneTempDecimal);
                        TempOneEL.textContent = "Temp: " + DayOneTemp + " \u00B0F";
                        // WIND
                        WindOneEL.textContent = "Wind: " + dayOne.wind.speed + " MPH";
                        // HUMIDITY
                        HumidityOneEL.textContent = "Humidity: " + dayOne.main.humidity + "%";







                        // DAY TWO
                        // DATE
                        var dayTwo = data.list[8];
                        var dayTwoDate = dayjs(dayTwo.dt_txt).format('MMM DD, YYYY');
                        
                        dayTwoEl.textContent = dayTwoDate;
                        //   ICON   
                        var iconTwo = dayTwo.weather[0].icon
                        const iconElTwo = document.createElement("img");
                        iconElTwo.src = "https://openweathermap.org/img/wn/" + iconTwo + "@2x.png";
                        dayTwoEl.appendChild(iconElTwo);
                        //  TEMP
                        var DayTwoTempDecimal = (dayTwo.main.temp - 273.15) * 9 / 5 + 32;
                        var DayTwoTemp = Math.trunc(DayTwoTempDecimal);
                        TempTwoEL.textContent = "Temp: " + DayTwoTemp + " \u00B0F";
                        // WIND
                        WindTwoEL.textContent = "Wind: " + dayTwo.wind.speed + " MPH";
                        // HUMIDITY
                        HumidityTwoEL.textContent = "Humidity: " + dayTwo.main.humidity + "%";




                        // DAY THREE
                        // DATE
                        var dayThree = data.list[16];
                        var dayThreeDate = dayjs(dayThree.dt_txt).format('MMM DD, YYYY');
                        
                        dayThreeEl.textContent = dayThreeDate;
                        //   ICON   
                        var iconThree = dayThree.weather[0].icon
                        const iconElThree = document.createElement("img");
                        iconElThree.src = "https://openweathermap.org/img/wn/" + iconThree + "@2x.png";
                        dayThreeEl.appendChild(iconElThree);
                        //  TEMP
                        var DayThreeTempDecimal = (dayThree.main.temp - 273.15) * 9 / 5 + 32;
                        var DayThreeTemp = Math.trunc(DayThreeTempDecimal);
                        TempThreeEL.textContent = "Temp: " + DayThreeTemp + " \u00B0F";
                        // WIND
                        WindThreeEL.textContent = "Wind: " + dayThree.wind.speed + " MPH";
                        // HUMIDITY
                        HumidityThreeEL.textContent = "Humidity: " + dayThree.main.humidity + "%";






                        // DAY FOUR
                        // DATE
                        var dayFour = data.list[24];
                        var dayFourDate = dayjs(dayFour.dt_txt).format('MMM DD, YYYY');
                    
                        dayFourEl.textContent = dayFourDate;
                        //   ICON   
                        var iconFour = dayOne.weather[0].icon
                        const iconElFour = document.createElement("img");
                        iconElFour.src = "https://openweathermap.org/img/wn/" + iconFour + "@2x.png";
                        dayFourEl.appendChild(iconElFour);
                        //  TEMP
                        var DayFourTempDecimal = (dayFour.main.temp - 273.15) * 9 / 5 + 32;
                        var DayFourTemp = Math.trunc(DayFourTempDecimal);
                        TempFourEL.textContent = "Temp: " + DayFourTemp + " \u00B0F";
                        // WIND
                        WindFourEL.textContent = "Wind: " + dayFour.wind.speed + " MPH";
                        // HUMIDITY
                        HumidityFourEL.textContent = "Humidity: " + dayFour.main.humidity + "%";





                        // DAY FIVE
                        // DATE
                        var dayFive = data.list[32];
                        var dayFiveDate = dayjs(dayFive.dt_txt).format('MMM DD, YYYY');
                
                        dayFiveEl.textContent = dayFiveDate;
                        //   ICON   
                        var iconFive = dayFive.weather[0].icon
                        const iconElFive = document.createElement("img");
                        iconElFive.src = "https://openweathermap.org/img/wn/" + iconFive + "@2x.png";
                        dayFiveEl.appendChild(iconElFive);
                        //  TEMP
                        var DayFiveTempDecimal = (dayFive.main.temp - 273.15) * 9 / 5 + 32;
                        var DayFiveTemp = Math.trunc(DayFiveTempDecimal);
                        TempFiveEL.textContent = "Temp: " + DayFiveTemp + " \u00B0F";
                        // WIND
                        WindFiveEL.textContent = "Wind: " + dayFive.wind.speed + " MPH";
                        // HUMIDITY
                        HumidityFiveEL.textContent = "Humidity: " + dayFive.main.humidity + "%";
                    });



            });
    };

  
});