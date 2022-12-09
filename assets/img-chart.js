function makeChart() {

document.getElementById("chart-container").innerHTML = '';
var cityobject = JSON.parse(localStorage.getItem("citySalOne"));
var cityname = cityobject._links.self.href.split(":")[2].split("/")[0];
cityname = cityname.replace(cityname[0],cityname[0].toUpperCase());
console.log(cityobject);

// a loop can be put here to make multiple charts for multiple cities. one chart per checkbox

var newfigure =  document.createElement("figure");
newfigure.innerHTML = '<h3>' + cityname + '</h3>';

//var chartURL = 'https://image-charts.com/chart?chs=700x190&chd=t:' + document.getElementById("data1").value + ',' + document.getElementById("data2").value + '&cht=p3&chl=Hello%7CWorld&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1';
var chartURL = 'https://image-charts.com/chart?chs=700x300&cht=bvs&chd=t:' + cityobject.salaries[51].salary_percentiles.percentile_50 + ",33" + '&chtt=' + 'JOB 51 NAME' + '&chxl=0:|Median Salary' + '&chl=' + cityname;


var chart = document.createElement("img");
chart.setAttribute("src", chartURL);
chart.setAttribute("alt", 'Salary data for ' + cityname);
newfigure.appendChild(chart);

document.getElementById("chart-container").appendChild(newfigure);


// chart.js might be better than this
}