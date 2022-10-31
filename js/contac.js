const sendNotification = (name, phone, mensaje, email) =>  {
  const message = `Hi! \nI want to communicate with you
                        My name is: ${name}
                        Phone: ${phone}
                        Email: ${email}
                        Message: ${mensaje}`.replace(/  +/g, '');

  //window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
  window.open(`mailto:ruthamol@itowlus.com?subject=Business IT OWL&body=${encodeURIComponent(message)}`, "_target")
}

const sendFile = () => {
  const subFile = `Hi! \n
  1.- Here you will upload your file that you downloaded, once you have completed it
  2.- I will send it, to be able to be reviewed by the company`

window.open(`mailto:ruthamol@itowlus.com?subject=Business IT OWL&body=${encodeURIComponent(subFile)}`, "_target")
}

const submitForm = function(event) {
  event.preventDefault();
  const name= $("#name").val();
  const phone= $("#phone").val();
  const email= $("#email").val();
  const mensaje= $("#mensaje").val();
  document.getElementById("form__submit").reset();
  sendNotification(name, phone, mensaje, email);
};

const submitFileForm = function(event) {
  event.preventDefault();
  document.getElementById("form__submit_file").reset();
  sendFile();
};

// your form
var form = document.getElementById("form__submit");
// attach event listener
form.addEventListener("submit", submitForm, true);

// your form
var form = document.getElementById("form__submit_file");
// attach event listener
form.addEventListener("submit", submitFileForm, true);
