export class DoctorSearch {
    getDoctorListBySymptom(symptom) {
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=45.5155%2C-122.6793%2C100&user_location=45.5155%2C-122.6793&skip=0&limit=10&user_key=${process.env.apiKey}`
            request.onload = function(){
                if (this.status === 200) {
                    resolve (request.response);
                }else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
            });
        }
    }
