import { createApp, reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { onGetTeamUSA } from "./collection/teamUSA.js"

createApp({
  setup(props) {
    const app = reactive({
      teamUSA: []
    })
    console.log("init vue")
    onGetTeamUSA((querySnapshot) => {
      querySnapshot.forEach(element => {
        app.teamUSA.push(element.data());
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
