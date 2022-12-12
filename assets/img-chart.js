function makeChart() {



document.getElementById("chart-container").innerHTML = '';

var cityobject = JSON.parse(localStorage.getItem("citySalOne"));
var cityobject2 = JSON.parse(localStorage.getItem("citySalTwo"));
var cityobject3 = JSON.parse(localStorage.getItem("citySalThree"));
var cityname = cityobject._links.self.href.split(":")[2].split("/")[0];
cityname = cityname.replace(cityname[0],cityname[0].toUpperCase());
cityname = cityname.replace("-"," ");
var cityname2;
var cityname3;
console.log(cityobject);


// a loop can be put here to make multiple charts for multiple cities. one chart per checkbox
 for (i=0; i<cityobject.salaries.length; i++) {
 if (document.getElementById("job-" + i)) {
    if (document.getElementById("job-" + i).checked) { 
         var newfigure =  document.createElement("figure");
         //newfigure.innerHTML = '<h3>' + cityname + '</h3>';

         //var chartURL = 'https://image-charts.com/chart?chs=700x190&chd=t:' + document.getElementById("data1").value + ',' + document.getElementById("data2").value + '&cht=p3&chl=Hello%7CWorld&chan&chf=ps0-0,lg,45,ffeb3b,0.2,f44336,1|ps0-1,lg,45,8bc34a,0.2,009688,1';
         var chartURL = 'https://image-charts.com/chart?chs=700x300&cht=bvs&chtt=Median Salary for ' + cityobject.salaries[i].job.title + '&chd=a:' + cityobject.salaries[i].salary_percentiles.percentile_50;

         if (cityobject2) {
         chartURL += "," + cityobject2.salaries[i].salary_percentiles.percentile_50;
         cityname2 = cityobject2._links.self.href.split(":")[2].split("/")[0];
         cityname2 = cityname2.replace(cityname2[0],cityname2[0].toUpperCase());
         cityname2 = cityname2.replace("-"," ");
         }

         if (cityobject3) {
         chartURL += "," + cityobject3.salaries[i].salary_percentiles.percentile_50;
         cityname3 = cityobject3._links.self.href.split(":")[2].split("/")[0];
         cityname3 = cityname3.replace(cityname3[0],cityname3[0].toUpperCase());
         cityname3 = cityname3.replace("-"," ");
         }

         chartURL += '&chl=' + cityname 

         if (cityobject2) { chartURL += '|' + cityname2; }
         if (cityobject3) { chartURL += '|' + cityname3; }

         chartURL += '&chxs=0,000000,0|1N*cUSD0sz*,000000,14&chxt=x,y';

         var chart = document.createElement("img");
         chart.setAttribute("src", chartURL);
         chart.setAttribute("alt", 'Salary data for ' + cityname);
         newfigure.appendChild(chart);

         document.getElementById("chart-container").appendChild(newfigure);
    } 
 }
 }


}