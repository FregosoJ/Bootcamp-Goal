var addCityButton = document.querySelector("#add-input");
var searchButton = document.querySelector("#search-button");
var cityInput = document.querySelector("#city-input");
var cityList = document.querySelector("#cities-in-chart");
var urbanAreasApi = "https://api.teleport.org/api/urban_areas/"; 

function sluggifyInput () {
    var rawCityInput = cityInput.value;
    if (!rawCityInput) {
        return;
    }
    console.log(rawCityInput);
    for(var i = 0; i < rawCityInput.length; i++) {
        rawCityInput = rawCityInput.replace(" ", "-")
     }
    var searchInput = "slug:" + rawCityInput.toLowerCase();
     console.log(searchInput);
}

addCityButton.addEventListener("click", sluggifyInput);