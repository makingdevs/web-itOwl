import { saveCandidate, onGetCandidates, deleteCandidate, getCandidateEdit, updateCandidate } from "./collection/candidate.js"

const candidateForm = document.getElementById("candidate-form")
const candidatesContainer = document.getElementById("candidate-container")

let editStatus = false
let idCandidate = ""

window.addEventListener('DOMContentLoaded', async () => {
  onGetCandidates((querySnapshot) => {
    let html = ""
    
    querySnapshot.forEach(doc => {
      const candidates = doc.data()
      html += `
        <tr>
          <td> ${candidates.name}</td>
          <td> ${candidates.work}</td>
          <td> ${candidates.description}</td>
          <td> ${candidates.calendar}</td>
          <td> ${candidates.post}</td>
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
        candidateForm["candidate-work"].value = candidate.work
        candidateForm["candidate-calendar"].value = candidate.calendar
        candidateForm["candidate-post"].value = candidate.post

        editStatus = true
        idCandidate = doc.id

        candidateForm["candidate-save"].innerText = "Update"
      })
    })

  });
});

candidateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = candidateForm["candidate-name"];
  const description =  candidateForm["candidate-description"];
  const work =  candidateForm["candidate-work"];
  const calendar =  candidateForm["candidate-calendar"];
  const post =  candidateForm["candidate-post"];

  if(!editStatus) {
    saveCandidate(name.value, description.value, work.value, calendar.value, post.value);
  } else{
    updateCandidate(idCandidate, {
      name: name.value,
      description: description.value,
      work: work.value,
      calendar: calendar.value,
      post: post.value
    });

    editStatus = false;
  }

  candidateForm.reset();
})
