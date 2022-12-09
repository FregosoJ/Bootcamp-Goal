var addCityButton = document.querySelector("#add-input");
var cityInput = document.querySelector("#city-input");
var urbanAreasApi = "https://api.teleport.org/api/urban_areas/"; 

function sluggifyInput () {
    var rawCityInput = cityInput.value;
    console.log(rawCityInput);
    for(var i = 0; i < rawCityInput.length; i++) {
         var properCityInput = rawCityInput.replace(" ", "-")
     }
    var searchInput = "slug:" + properCityInput.toLowerCase();
     console.log(searchInput);
}

addCityButton.addEventListener("click", sluggifyInput);