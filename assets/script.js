var APIKey = "5360eb9fa077491dcfd9a0838a52cfc9";
var city = "";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var geoCodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey; //why does this not come back as an object?
var lat = 38.4666;
var lon = -121.3177;
var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon=" + lon + "&appid=" + APIKey;
var userInput = document.getElementById("search-input");
var button = document.getElementById('button');



// fetch(geoCodingUrl)
// .then(function (response) {
//     if (!response.ok) {             
//       throw response.json();            //why do I have to use throw?
//     }

//     return response.json();
//   })
// .then(function (data){
//     console.log(data);
//     console.log(data[0].lat);
//     console.log(data[0].lon);
// });


// fetch(fiveDayURL)
// .then(function (response) {
//     if (!response.ok) {             
//         throw response.json();            //why do I have to use throw?
//       }
  
//       return response.json();
//     })
//     .then(function (data){
//         console.log(data);
//     });








button.addEventListener("click", function (event) {
    
    event.preventDefault();

    city = userInput.value.trim();

console.log(city);
   
fetch(geoCodingUrl)
.then(function (response) {
    if (!response.ok) {             
      throw response.json();            //why do I have to use throw?
    }

    return response.json();
  })
.then(function (data){
    console.log(data);
    console.log(data[0].lat);
    console.log(data[0].lon);
});


fetch(fiveDayURL)
.then(function (response) {
    if (!response.ok) {             
        throw response.json();            //why do I have to use throw?
      }
  
      return response.json();
    })
    .then(function (data){
        console.log(data);
    });

  
});


