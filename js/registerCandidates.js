import { saveCandidate, onGetCandidates, deleteCandidate, getCandidateEdit } from "./collection/candidate.js"

const candidateForm = document.getElementById("candidate-form")
const candidatesContainer = document.getElementById("candidate-container")

let editStatus = false

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
            <button class="btn-edit btn btn-primary" data-id="${doc.id}" >Edit</button>
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

    const btnEdit = candidatesContainer.querySelectorAll(".btn-edit")
    btnEdit.forEach((btn) => {
      btn.addEventListener("click",  async (e) => {
        const doc = await getCandidateEdit(e.target.dataset.id)
        const candidate = doc.data()

        candidateForm["candidate-name"].value = candidate.name
        candidateForm["candidate-description"].value = candidate.description

        editStatus = true
      })
    })

  });
});

candidateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = candidateForm["candidate-name"];
  const description =  candidateForm["candidate-description"];

  if(editStatus) {
    console.log("update")
  } else{
    saveCandidate(name.value, description.value);
    candidateForm.reset();
  }

})
