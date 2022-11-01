const sendCandidate = (name, phone, mensaje, email) =>  {
  const message = `Hi! \nI want to communicate with you
                        My name is: ${name}
                        Phone: ${phone}
                        Email: ${email}
                        Message: ${mensaje}
                        debe enviar el formulario que descargo, siempre y cuando lo haya completado`.replace(/  +/g, '');

  //window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
  window.open(`mailto:ruthamol@itowlus.com?subject=Business IT OWL&body=${encodeURIComponent(message)}`, "_target")
}

const submitFormCandidate = function(event) {
  event.preventDefault();
  const name= $("#name").val();
  const phone= $("#phone").val();
  const email= $("#email").val();
  const mensaje= $("#mensaje").val();
  document.getElementById("form__submit").reset();
  sendCandidate(name, phone, mensaje, email);
};

// your form
var form = document.getElementById("form__submit");
// attach event listener
form.addEventListener("submit", submitFormCandidate, true);
