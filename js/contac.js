const sendNotification = (name, phone, mensaje, email) =>  {
  const message = `Hola! \nMe quiero comunicar con ustedes
                        Mi nombre es: ${name}
                        Teléfono: ${phone}
                        Email: ${email}
                        Mensaje: ${mensaje}`.replace(/  +/g, '');

  window.open(`https://api.whatsapp.com/send?phone=525562536456&text=${encodeURIComponent(message)}`, "_target")
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
