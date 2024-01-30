const form =  document.getElementById("infoForm")

form.addEventListener("submit", function (e) {
e.preventDefault()

  let fullName = document.getElementById('fullName').value;
  let age = document.getElementById('age').value;
  let email = document.getElementById('email').value;


  let personalInfo = {
    fullName: fullName,
    age: age,
    email: email
  };


  const personalInfoString = JSON.stringify(personalInfo);

  localStorage.setItem('personalInfo', personalInfoString);

  displayPersonalInfo();


function displayPersonalInfo() {
  let personalInfoString = localStorage.getItem('personalInfo');

  if (personalInfoString) {
    let personalInfo = JSON.parse(personalInfoString);

    let displayDiv = document.getElementById('displayInfo');
    displayDiv.innerHTML = "<h2>Personal Information</h2>" +
                            "<p><strong>Name:</strong> " + personalInfo.fullName + "</p>" +
                            "<p><strong>Age:</strong> " + personalInfo.age + "</p>" +
                            "<p><strong>Email:</strong> " + personalInfo.email + "</p>";
  }
}
displayPersonalInfo();
});