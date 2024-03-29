import { createApp, reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { onGetCandidates } from "./collection/candidate.js"

const sendCandidate = (name, phone, mensaje, email) =>  {
  const message = `Hi! \n
  I want to communicate with you\n
                        My name is: ${name}
                        Phone: ${phone}
                        Email: ${email}\n
                        Message: ${mensaje}\n
                        1.- Download the file Candidate Questionary Skills, CQS.xlsx. \n
2.- Fill up the questionary. \n
3.- Save the questionary with your name in this form:  \n
            \n a. Name MiddleName FirstLastName SecondLastName CQS.xlsx,  \n
b. Example: “Maria Antonieta Galvez Fuentes CQS.xlsx” \n
4.- In case you don’t legally use one or more of the parts, omit them.\n
a. Example: “Jose Smith” \n

5.- Send it back on the Web Page with your resume save it with the same form, \n
Example: \n
a. “Maria Antonieta Galvez Fuentes Resume.docx” \n
b. “Jose Smith Resume.docx”`.replace(/  +/g, '');

  //window.open(`https://api.whatsapp.com/send?phone=525583817789&text=${encodeURIComponent(message)}`, "_target")
  window.open(`mailto:information_services@itowlus.com?subject=Business IT OWL&body=${encodeURIComponent(message)}`, "_target")
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
  if(form) {
    form.addEventListener("submit", submitFormCandidate, true);
  }


createApp({
  setup(props) {
    const app = reactive({
      candidates: []
    })
    console.log("init vue")
    onGetCandidates((querySnapshot) => {
      querySnapshot.forEach(element => {
        app.candidates.push(element.data());
      });
    })

    const executeCalendly = (url) => {
      Calendly.initPopupWidget({url: url})
    }
    
    const goToPost = (post) => {
      window.open(post, '_blank');
    }

    return {
      app,
      executeCalendly,
      goToPost,
    }
  },
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')
