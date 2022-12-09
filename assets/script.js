var addCityButton = document.querySelector("#add-input");
var searchButton = document.querySelector("#search-button");
var clearButton = document.querySelector("#clear-button");
var cityInput = document.querySelector("#city-input");
var cityList = document.querySelector("#cities-in-chart");

var teleportApiUrl = "https://api.teleport.org/api/urban_areas/" 
var uaCodes = [];
//var selectedCities=[];

function getUaCodes () {
    uaCodes = JSON.parse(localStorage.getItem("uacodes"))
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
    cityList.innerHTML = "";
    for (var i = 0; i < selectedCities.length; i++){
    var listedCity = document.createElement("li");
    listedCity.textContent = selectedCities[i];
    cityList.append(listedCity);
    }
    for(var i = 0; i < selectedCities.length; i++) {
            sluggifiedCity = selectedCities[i].replaceAll(" ", "-")
            sluggifiedCity = "slug:" + sluggifiedCity.toLowerCase();
            uaCodes.push(sluggifiedCity);
         }
        localStorage.setItem("uacodes", JSON.stringify(uaCodes)); 
    }
    uaCodes = JSON.parse(localStorage.getItem("uacodes"));
    if (!uaCodes) {
        uaCodes = [];
    }
    
    //ADD IN MEANS TO LIMIT AMOUNT OF LISTED CITIES TO 3 AND ONLY 3 . . . CITYLIST.LENGTH < 3
    


addCityButton.addEventListener("click", addCityToSearch);
clearButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})
searchButton.addEventListener("click", function () {
    getUaCodes();
    if (!uaCodes) {
        return
    } else {
    fetch(teleportApiUrl + uaCodes[0] + "/salaries/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var citySalOne = data;
            localStorage.setItem("citySalOne", JSON.stringify(citySalOne));
        })
    fetch(teleportApiUrl + uaCodes[0] + "/scores/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityScoreOne = data;
            localStorage.setItem("cityScoreOne", JSON.stringify(cityScoreOne))
        })
    if (uaCodes.length > 1){
         fetch(teleportApiUrl + uaCodes[1] + "/salaries/") 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var citySalTwo = data;
            localStorage.setItem("citySalTwo", JSON.stringify(citySalTwo));
        })
        fetch(teleportApiUrl + uaCodes[1] + "/scores/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityScoreTwo = data;
            localStorage.setItem("cityScoreTwo", JSON.stringify(cityScoreTwo))
        })
        }
    if (uaCodes.length = 3) {
        fetch(teleportApiUrl + uaCodes[2] + "/salaries/") 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var citySalThree = data;
            localStorage.setItem("citySalThree", JSON.stringify(citySalThree));
        })
        fetch(teleportApiUrl + uaCodes[2] + "/scores/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityScoreThree = data;
            localStorage.setItem("cityScoreThree", JSON.stringify(cityScoreThree))
        })
    }

}})