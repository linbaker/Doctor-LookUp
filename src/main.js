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
      if(body.data.length === 0){
        $(".listDoctors").append(`<li>No doctor's match your search</li>`);
      }
      body.data.forEach(function(doctor) {
        console.log(`${doctor.profile.first_name}`);
        $(".listDoctorsName").append(
          `<li>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name}</li>
          <ul>
            <li>Accepting New Patients:${body.data.practices.accepts_new_patients}</li>
            <li>Website:${body.data.practices.website}</li>
            <li>Address:${body.data.practices.visit_address.street} ${body.data.practices.visit_address.street2}<br>${body.data.practices.visit_address.city}, ${body.data.practices.visit_address.state}${body.data.practices.visit_address.zip}</li>
            <li>Phone:${body.data.practices.phone.number}</li>
            </ul>`);
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
      if(body.data.length === 0){
        $(".listDoctorsName").append(`<li>No doctor's match your search</li>`);
      }
      body.data.forEach(function(doctor) {
        console.log(`${doctor.profile.first_name}`);
        $(".listDoctorsName").append(
          `<li>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name}</li>
          <ul>
            <li>Accepting New Patients:${body.data.practices.accepts_new_patients}</li>
            <li>Website:${body.data.practices.website}</li>
            <li>Address:${body.data.practices.visit_address.street} ${body.data.practices.visit_address.street2}<br>${body.data.practices.visit_address.city}, ${body.data.practices.visit_address.state}${body.data.practices.visit_address.zip}</li>
            <li>Phone:${body.data.practices.phone.number}</li>
            </ul>`);
      })
    }, function(error) {
      $('.showErrors').text('There was an error processing your request: ${error.message}');
    });
  });
});
