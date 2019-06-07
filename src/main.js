import { DoctorSearch } from "./doctor-search.js";

$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    let symptom = $("#symptom").val();
    $("#symptom").val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListBySymptom(city);

    promise.then(function(response) {

      let body = JSON.parse(response);
      body.data.foreACH
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees`);

    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });

  });
});
