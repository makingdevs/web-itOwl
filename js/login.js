function go(){
  if (document.form.password.value=='test' && document.form.login.value=='test'){
    document.form.submit();
  }
  else{
    alert("Please enter correct username and password.");
  }
}

function loginTeam(){
  if (document.form.password.value=='Mo724@2023' && document.form.login.value=='Temp072023'){
    document.form.submit();
  }
  else{
    alert("Please enter correct username and password to access team.");
  }
}

//Submit Button
function loginTeam2() {
  let userRef = "test";
  let passRef = "test";

  let user =  document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  if (user == userRef || pass == passRef) {
    document.form.submit();
  } else {
    alert("It's seem you make a mistake...")
  }
};
