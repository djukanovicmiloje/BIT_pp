var output = document.getElementById("outBox");
var name1 = document.getElementById("name1");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var city = document.getElementById("city");
console.log(typeof name1);

function formValidity() {
  if (email.value === "z") {
    alert();
  }
}
formValidity();
