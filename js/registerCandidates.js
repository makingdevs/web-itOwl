import { saveCandidate, getCandidates } from "./collection/candidate.js"

window.addEventListener('DOMContentLoaded', async () => {
  const querySnapshot = await getCandidates()

  querySnapshot.forEach(doc => {
    console.log(doc.data())
  });

})

const candidateForm = document.getElementById("candidate-form")

candidateForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = candidateForm["candidate-name"]
  const description =  candidateForm["candidate-description"]

  saveCandidate(name.value, description.value)

  candidateForm.reset()
})
