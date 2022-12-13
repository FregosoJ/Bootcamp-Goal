function makeChart() {



document.getElementById("chart-container").innerHTML = '';

//Data here is pulled out of local storage and saved into variables.

var cityobject = JSON.parse(localStorage.getItem("citySalOne"));
var cityobject2 = JSON.parse(localStorage.getItem("citySalTwo"));
var cityobject3 = JSON.parse(localStorage.getItem("citySalThree"));
var cityname = cityobject._links.self.href.split(":")[2].split("/")[0];
cityname = cityname.replace(cityname[0],cityname[0].toUpperCase());
cityname = cityname.replace("-"," ");
var cityname2;
var cityname3;

//The function below loops through salaries data pulled from local storage and generates a url to be sent to the image-chart API. Function takes salaries input, refigures it into a url ammenable to image-chart, and returns the generated image by printing it to the center of the page.

 for (i=0; i<cityobject.salaries.length; i++) {
 if (document.getElementById("job-" + i)) {
    if (document.getElementById("job-" + i).checked) { 
         var newfigure =  document.createElement("figure");
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