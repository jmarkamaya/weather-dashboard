var APIKey = "5360eb9fa077491dcfd9a0838a52cfc9";
var city = "Sacramento"
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


fetch(queryURL)
.then(console.log(queryURL));