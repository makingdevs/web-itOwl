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
