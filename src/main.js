import { DoctorSearch } from "./doctor-search.js";
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#searchSymptom").click(function(event) {
    $("#listDoctors").empty();

    event.preventDefault();
    let symptom = $('#symptom').val();
    $('#symptom').val("");


    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListBySymptom(symptom);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0){
        $("#listDoctors").html(`<li>No doctor's match your search</li>`);
      }
      body.data.forEach(function(doctor) {
        console.log(`${doctor.profile.first_name}`);
        doctor.practices.forEach(function(practice){

          let addressTwo = "";
          if (`${practice.visit_address.street2}` != undefined){
            let addressTwo = `${practice.visit_address.street2}`;
          }

          $("#listDoctors").append((`<div class="square">
            <li>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name}</li>
            <ul>
              <li>Accepting New Patients:${practice.accepts_new_patients}</li>
              <li>Website: ${practice.website}</li>
              <li>Address:${practice.visit_address.street} ${addressTwo}<br>${practice.visit_address.city}, ${practice.visit_address.state}${practice.visit_address.zip}</li>
              <li>Phone:${practice.phones.number}</li>
              </ul></div>`).replace(/undefined/g, "No Information Available"));
        })
      })
    }, function(error) {
      $('.showErrors').html('There was an error processing your request: ${error.message}');
    });
  });

  $("#searchName").click(function(event) {
    $("#listDoctorsName").empty();

    event.preventDefault();
    let name = $('#name').val();
    $('#name').val("");

    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorListByName(name);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0){
        $("#listDoctorsName").html(`<li>No doctor's match your search</li>`);
      }
      body.data.forEach(function(doctor) {
        console.log(`${doctor.profile.first_name}`);
        doctor.practices.forEach(function(practice){
          $("#listDoctorsName").append(
            `<li>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name}</li>
            <ul>
              <li>Accepting New Patients:${practice.accepts_new_patients}</li>
              <li>Website:${practice.website}</li>
              <li>Address:${practice.visit_address.street} ${practice.visit_address.street2}<br>${practice.visit_address.city}, ${practice.visit_address.state}${practice.visit_address.zip}</li>
              <li>Phone:${practice.phones.number}</li>
              </ul>`);
        })
      })
    }, function(error) {
      $('.showErrors').html('There was an error processing your request: ${error.message}');
    });
  });
});
