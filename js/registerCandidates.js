import { saveCandidate, getCandidates, onGetCandidates, deleteCandidate } from "./collection/candidate.js"

const candidateForm = document.getElementById("candidate-form")
const candidatesContainer = document.getElementById("candidate-container")

window.addEventListener('DOMContentLoaded', async () => {
  onGetCandidates((querySnapshot) => {

    let html = ""
    querySnapshot.forEach(doc => {
      const candidates = doc.data()
      html += `
        <tr>
          <td> ${candidates.name}</td>
          <td> ${candidates.description}</td>
          <td>
            <button class="btn-delete btn btn-danger" data-id="${doc.id}" >Deleted</button>
          </td>
        </tr>
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
