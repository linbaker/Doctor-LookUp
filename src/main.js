import {
  DoctorSearch
} from "./doctor-search.js";
import $ from 'jquery';

$(document).ready(function() {

  $("#searchSymptom").click(function(event) {
    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListBySymptom(symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.data.forEach(function(doctor) {
        console.log(`${doctor.profile.first_name}`);
        $(".listDoctors").append(

          `<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`
        );
      })
    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
  });

  $("#searchName").click(function(event) {
    event.preventDefault();
    let name = $('#name').val();
    $('#name').val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListByName(name);

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.data.forEach(function(doctor) {
        console.log(`${doctor.profile.first_name}`);
        $(".listDoctors").append(

          `<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`
        );
      })
    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
  });
});
