import { DoctorSearch } from "./doctor-search.js";
import $ from 'jquery';

$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    let symptom = $("#symptom").val();
    $("#symptom").val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListBySymptom(symptom);

    promise.then(function(response) {

    let body = JSON.parse(response);
    body.data.forEach(function())



    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });

  });
});
