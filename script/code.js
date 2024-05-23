// Ensuring the data is captured upon submission





// Checking the validity of the user input (i.e character length should not exceed/ deceed 13)
function checkIdNumber () {
let IDnumber = document.getElementById('idnumber').value;
if(IDNumber.length !== 13 || isNaN(IDnumber)) {
    document.getElementById('output').innerHTML = "Please enter a valid ID number!"
    return;
}
}
// Checking for the year, month, day and gender of the user 
let year = IDnumber.substring(0,2)
let month = IDnumber.substring(2,4)
let day = IDnumber.substring(4,6)

let genderCode = IDnumber.


outputDiv.innerHTML = 'Day/month/year: ' + day + '/' + month + '/' + year + '<br>';











