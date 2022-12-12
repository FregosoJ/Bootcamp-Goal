var addCityButton = document.querySelector("#add-input");
var searchButton = document.querySelector("#search-button");
var clearButton = document.querySelector("#clear-button");
var cityInput = document.querySelector("#city-input");
var cityList = document.querySelector("#cities-in-chart");
var accordionText = document.querySelector("#accordion-item")

var teleportApiUrl = "https://api.teleport.org/api/urban_areas/"
var uaCodes = [];
//var selectedCities=[];

function getUaCodes() {
    uaCodes = JSON.parse(localStorage.getItem("uacodes"))
}
function sluggifyInput() { //THIS FUNCTION NEEDS TO BE EDITED
    // for(var i = 0; i < rawCityInput.length; i++) {
    //     rawCityInput = rawCityInput.replace(" ", "-")
    //  }
    // var searchInput = "slug:" + rawCityInput.toLowerCase();
    //  console.log(searchInput);
}

function addCityToSearch() {
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
    console.log(selectedCities);
    localStorage.setItem("selected cities", JSON.stringify(selectedCities));
    cityList.innerHTML = "";
    for (var i = 0; i < selectedCities.length; i++) {
        var listedCity = document.createElement("li");
        listedCity.textContent = selectedCities[i];
        cityList.append(listedCity);
    }
<<<<<<< HEAD
    for (var i = 0; i < selectedCities.length; i++) {
        sluggifiedCity = selectedCities[i].replaceAll(" ", "-")
        sluggifiedCity = "slug:" + sluggifiedCity.toLowerCase();
        uaCodes.push(sluggifiedCity);
=======
    uaCodes = [];
    for(var i = 0; i < selectedCities.length; i++) {
            sluggifiedCity = selectedCities[i].replaceAll(" ", "-")
            sluggifiedCity = "slug:" + sluggifiedCity.toLowerCase();
            uaCodes.push(sluggifiedCity);
         }
        localStorage.setItem("uacodes", JSON.stringify(uaCodes)); 
>>>>>>> main
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
searchButton.addEventListener("click", async function () {
    getUaCodes();
    if (!uaCodes) {
        return
    } else {
<<<<<<< HEAD


        fetch(teleportApiUrl + uaCodes[0] + "/salaries/")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var citySalOne = data;
                localStorage.setItem("citySalOne", JSON.stringify(citySalOne));
                makeChart()
            })
        fetch(teleportApiUrl + uaCodes[0] + "/scores/")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var cityScoreOne = data;
                localStorage.setItem("cityScoreOne", JSON.stringify(cityScoreOne))
            })
        if (uaCodes.length > 1) {
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

        if (uaCodes.length > 1){
            fetch(teleportApiUrl + uaCodes[0] + "/details")
            .then(function(response) {
                return response.json();
            })
            .then(function(data){
                console.log(data.categories[3].data[8])
                var accordion1 = document.getElementById("accordion1")
                accordion1.innerHTML = accordion1.innerHTML =`<p>fun fact, the average cost of a meal is $ ${data.categories[3].data[8].currency_dollar_value}</p> `// add more p tages in the ``
                // localStorage.setItem("mealsCost", JSON.stringify(data.categories[3].data[8].currency_dollar_value))
            })
          
            }
            
            for (var i = 0; i < accordion1.length; i++) {
                var accordionText = document.createElement("p");
                accordionText.textContent = accordion1[i];
                cityList.append(accordionText);
            }
           
    




    }
})

=======
    await fetch(teleportApiUrl + uaCodes[0] + "/salaries/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var citySalOne = data;
            localStorage.setItem("citySalOne", JSON.stringify(citySalOne));
            })
    await fetch(teleportApiUrl + uaCodes[0] + "/scores/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityScoreOne = data;
            localStorage.setItem("cityScoreOne", JSON.stringify(cityScoreOne))
        })
    await fetch(teleportApiUrl + uaCodes[0] + "/details/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityDetailsOne = data;
            localStorage.setItem("cityDetailsOne", JSON.stringify(cityDetailsOne));
        })
    await fetch(teleportApiUrl + uaCodes[0] + "/images/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityImagesOne = data;
            localStorage.setItem("cityImagesOne", JSON.stringify(cityImagesOne));
        })
    if (uaCodes.length > 1){
         await fetch(teleportApiUrl + uaCodes[1] + "/salaries/") 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var citySalTwo = data;
            localStorage.setItem("citySalTwo", JSON.stringify(citySalTwo));
        })
        await fetch(teleportApiUrl + uaCodes[1] + "/scores/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityScoreTwo = data;
            localStorage.setItem("cityScoreTwo", JSON.stringify(cityScoreTwo))
        })
        await fetch(teleportApiUrl + uaCodes[1] + "/details/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityDetailsTwo = data;
            localStorage.setItem("cityDetailsTwo", JSON.stringify(cityDetailsTwo));
        })
        await fetch(teleportApiUrl + uaCodes[1] + "/images/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityImagesTwo = data;
            localStorage.setItem("cityImagesTwo", JSON.stringify(cityImagesTwo));
        })
        }
    if (uaCodes.length === 3) {
        await fetch(teleportApiUrl + uaCodes[2] + "/salaries/") 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var citySalThree = data;
            localStorage.setItem("citySalThree", JSON.stringify(citySalThree));
        })
        await fetch(teleportApiUrl + uaCodes[2] + "/scores/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityScoreThree = data;
            localStorage.setItem("cityScoreThree", JSON.stringify(cityScoreThree))
        })
        await fetch(teleportApiUrl + uaCodes[2] + "/details/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityDetailsThree = data;
            localStorage.setItem("cityDetailsThree", JSON.stringify(cityDetailsThree));
        })
        await fetch(teleportApiUrl + uaCodes[2] + "/images/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cityImagesThree = data;
            localStorage.setItem("cityImagesThree", JSON.stringify(cityImagesThree));
        })
        }
        makeChart()
   }
})

$(function () {
    var uaNames = [
        "Aarhus", "Adelaide", "Albuquerque", "Almaty", "Amsterdam", "Anchorage", "Andorra", "Ankara", "Asheville", "Asuncion", "Athens", "Atlanta", "Auckland", "Austin", "Baku", "Bali", "Baltimore", "Bangkok", "Barcelona", "Beijing", "Beirut", "Belfast", "Belgrade", "Belize City", "Bengaluru", "Bergen", "Berlin", "Bern", "Bilbao", "Birmingham", "Birmingham AL", "Bogota", "Boise", "Bologna", "Bordeaux", "Boston", "Boulder", "Bozeman", "Bratislava", "Brighton", "Brisbane", "Bristol", "Brno", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Buffalo", "Cairo", "Calgary", "Cambridge", "Cape Town", "Caracas", "Cardiff", "Casablanca", "Charleston", "Charlotte", "Chattanooga", "Chennai", "Chiang Mai", "Chicago", "Chisinau", "Christchurch", "Cincinnati", "Cleveland", "Cluj Napoca", "Cologne", "Colorado Springs", "Columbus", "Copenhagen", "Cork", "Curitiba", "Dallas", "Dar es Salaam", "Delhi", "Denver", "Des Moines", "Detroit", "Doha", "Dresden", "Dubai", "Dublin", "Dusseldork", "Edinburgh", "Edmonton", "Eindhoven", "Eugene", "Florence", "Florianopolis", "Fort Collins", "Frankfurt", "Fukuoka", "Gaillimh", "Gdansk", "Geneva", "Gibraltar", "Glasgow", "Gothenburg", "Grenoble", "Guadalajara", "Guatemala City", "Halifax", "Hamburg", "Hannover", "Havana", "Helsinki", "Ho Chi Minh City", "Hong Kong", "Honolulu", "Houston", "Hyderabad", "Indianapolis", "Innsbruck", "Istanbul", "Jacksonville", "Jakarta", "Johannesburg", "Kansas City", "Karlsruhe", "Kathmandu", "Kiev", "Kingston", "Knoxville", "Krakow", "Kuala Lumpur", "Kyoto", "Lagos", "La Paz", "Las Palmas de Gran Canaria", "Las Vegas", "Lausanne", "Leeds", "Leipzig", "Lille", "Lima", "Lisbon", "Liverpool", "Ljubljana", "London", "Los Angeles", "Louisville", "Luxembourg", "Lviv", "Lyon", "Madison", "Madrid", "Malaga", "Malmo", "Managua", "Manchester", "Manila", "Marseille", "Medellin", "Melbourne", "Memphis", "Mexico City", "Miami", "Milan", "Milwaukee", "Minneapolis Saint Paul", "Minsk", "Montevideo", "Montreal", "Moscow", "Mumbai", "Munich", "Nairobi", "Nantes", "Naples", "Nashville", "New Orleans", "New York", "Nice", "Nicosia", "Oklahoma City", "Omaha", "Orlando", "Osaka", "Oslo", "Ottawa", "Oulu", "Oxford", "Palo Alto", "Panama", "Paris", "Perth", "Philadelphia", "Phnom Penh", "Phoenix", "Phuket", "Pittsburgh", "Portland ME", "Portland OR", "Porto", "Porto Alegre", "Prague", "Providence", "Quebec", "Quito", "Raleigh", "Reykjavik", "Richmond", "Riga", "Rio De Janeiro", "Riyadh", "Rochester", "Rome", "Rotterdam", "Saint Petersburg", "Salt Lake City", "San Antonio", "San Diego", "San Francisco Bay Area", "San Jose", "San Juan", "San Luis Obispo", "San Salvador", "Santiago", "Santo Domingo", "Sao Paulo", "Sarajevo", "Saskatoon", "Seattle", "Seoul", "Seville", "Shanghai", "Singapore", "Skopje", "Sofia", "St Louis", "Stockholm", "Stuttgart", "Sydney", "Taipei", "Tallinn", "Tampa Bay Area", "Tampere", "Tartu", "Tashkent", "Tbilisi", "Tehran", "Tel Aviv", "The Hague", "Thessaloniki", "Tokyo", "Toronto", "Toulouse", "Tunis", "Turin", "Turku", "Uppsala", "Utrecht", "Valencia", "Valletta", "Vancouver", "Victoria", "Vienna", "Vilnius", "Warsaw", "Washington DC", "Wellington", "Winnipeg", "Wroclaw", "Yerevan", "Zagreb", "Zurich" 
    ];
    $("#city-input").autocomplete({
        source: uaNames,
    });
});
>>>>>>> main

