import { DoctorSearch } from "./doctor-search.js";
import $ from 'jquery';

$(document).ready(function() {

  $("#symptomForm").click(function(event) {
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    
    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListBySymptom(symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.data.forEach(function(doctor){
        $(".listDoctors").append(
          `<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`
          );
      })
    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });

  });
});
