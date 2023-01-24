import { saveCandidate } from "./collection/candidate.js"

window.addEventListener("DOMContentLoaded", () => {

})

const candidateForm = document.getElementById("candidate-form")

candidateForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = candidateForm["candidate-name"]
  const description =  candidateForm["candidate-description"]

  saveCandidate(name.value, description.value)

  candidateForm.reset()
})
