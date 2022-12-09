var addCityButton = document.querySelector("#add-input");
var searchButton = document.querySelector("#search-button");
var cityInput = document.querySelector("#city-input");
var cityList = document.querySelector("#cities-in-chart");
var salariesApiUrl = "https://api.teleport.org/api/urban_areas/"
var uaCodes = [];
var selectedCities= [];

function getUaCodes () {
    uaCodes = localStorage.getItem
}
function sluggifyInput () { //THIS FUNCTION NEEDS TO BE EDITED
    // for(var i = 0; i < rawCityInput.length; i++) {
    //     rawCityInput = rawCityInput.replace(" ", "-")
    //  }
    // var searchInput = "slug:" + rawCityInput.toLowerCase();
    //  console.log(searchInput);
}

function addCityToSearch () {
    var rawCityInput = cityInput.value;
    if (!rawCityInput) {
        return;
    }
    console.log(rawCityInput);
    var selectedCities = JSON.parse(localStorage.getItem("selected cities"));
    if (!selectedCities) {
        selectedCities = [];
    }
    console.log(selectedCities);
    selectedCities.push(rawCityInput);
    localStorage.setItem("selected cities", JSON.stringify(selectedCities));
    
    var listedCity = document.createElement("li");
    listedCity.textContent = cityInput.value;
    cityList.append(listedCity);
    //ADD IN MEANS TO LIMIT AMOUNT OF LISTED CITIES TO 3 AND ONLY 3 . . . CITYLIST.LENGTH < 3
    
}

addCityButton.addEventListener("click", sluggifyInput);