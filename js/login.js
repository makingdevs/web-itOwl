function go() {
  if (document.form.password.value == 'test' && document.form.login.value == 'test') {
    document.form.submit();
  }
  else {
    alert("Please enter correct username and password.");
  }
}

function LoginTeam2() {
  let usuario = document.login.usuario.value;
  let password = document.login.password.value;
  if (usuario == "Temp072023" && password == "Mo724@2023") {
    window.location = "candidates.html";
  }
  else {
    alert("Please enter correct username and password to access team.");
  }
}


/*contra: Mo724@2023 username: Temp072023 */
