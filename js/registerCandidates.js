import { saveCandidate, getCandidates, onGetCandidates, deleteCandidate } from "./collection/candidate.js"

const candidateForm = document.getElementById("candidate-form")
const candidatesContainer = document.getElementById("candidate-container")

window.addEventListener('DOMContentLoaded', async () => {
  onGetCandidates((querySnapshot) => {

    let html = ""
    querySnapshot.forEach(doc => {
      const candidates = doc.data()
      html += `
        <div>
          <h3> ${candidates.name}</h3>
          <p> ${candidates.description}</p>
          <button class="btn-delete" data-id="${doc.id}" >Deleted</button>
        </div>
      `;
    });
  
    candidatesContainer.innerHTML = html;
    const btnDelete = candidatesContainer.querySelectorAll(".btn-delete")

    btnDelete.forEach(btn => {
      btn.addEventListener("click", ({target: {dataset}}) => {
        deleteCandidate(dataset.id)
      });
    });
  });
});

candidateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = candidateForm["candidate-name"];
  const description =  candidateForm["candidate-description"];

  saveCandidate(name.value, description.value);

  candidateForm.reset();
})
