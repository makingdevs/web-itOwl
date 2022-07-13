const sendNotification = (name, phone, mensaje, email) =>  {
  const message = `Hi! \nI want to communicate with you
                        My name is: ${name}
                        Phone: ${phone}
                        Email: ${email}
                        Message: ${mensaje}`.replace(/  +/g, '');

  //window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
  window.open(`mailto:ruthamol@itowlus.com?subject=Empresa IT OWL&body=${encodeURIComponent(message)}`, "_target")
}

$( "#button-send-contact" ).click(function() {
  const name= $("#name").val();
  const phone= $("#phone").val();
  const email= $("#email").val();
  const mensaje= $("#mensaje").val();
  if(name.length > 0, phone.length >0, mensaje.length >0, email.length > 0){
    sendNotification(name, phone, mensaje, email);
  }
  console.log(this)
});
