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
            <a href='${candidates.image}'> url</a>
          </td>
          <td>
            <a href='${candidates.graph}'> url Graph</a>
          </td>

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
        candidateForm["candidate-image"].value = candidate.image
        candidateForm["candidate-graph"].value = candidate.graph
        candidateForm["candidate-titleWork"].value = candidate.titleWork
        candidateForm["candidate-workDescription"].value = candidate.workDescription
        candidateForm["candidate-workSubDescription2"].value = candidate.workSubDescription2
        candidateForm["candidate-titleWorkSubDescription2"].value = candidate.titleWorkSubDescription2
        candidateForm["candidate-titleWorkSubDescription3"].value = candidate.titleWorkSubDescription3
        candidateForm["candidate-titleWorkSubDescription4"].value = candidate.titleWorkSubDescription4
        candidateForm["candidate-workSubDescription3"].value = candidate.workSubDescription3
        candidateForm["candidate-workSubDescription4"].value = candidate.workSubDescription4
        candidateForm["candidate-titleEducation"].value = candidate.titleEducation
        candidateForm["candidate-educationDescription"].value = candidate.educationDescription
        candidateForm["candidate-skillsDescription"].value = candidate.skillsDescription

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
  const image =  candidateForm["candidate-image"];
  const graph = candidateForm["candidate-graph"]
  const titleWork = candidateForm["candidate-titleWork"]
  const workDescription = candidateForm["candidate-workDescription"]
  const titleWorkSubDescription2 = candidateForm["candidate-titleWorkSubDescription2"]
  const workSubDescription2 = candidateForm["candidate-workSubDescription2"]
  const titleWorkSubDescription3 = candidateForm["candidate-titleWorkSubDescription3"]
  const workSubDescription3 = candidateForm["candidate-workSubDescription3"]
  const titleWorkSubDescription4 = candidateForm["candidate-titleWorkSubDescription4"]
  const workSubDescription4 = candidateForm["candidate-workSubDescription4"]
  const titleEducation = candidateForm["candidate-titleEducation"]
  const educationDescription = candidateForm["candidate-educationDescription"]
  const skillsDescription = candidateForm["candidate-skillsDescription"]

  if(!editStatus) {
    saveCandidate(name.value, description.value, work.value, calendar.value, post.value, image.value, graph.value, titleWork.value, workDescription.value, titleEducation.value,
      educationDescription.value, skillsDescription.value, workSubDescription2.value, titleWorkSubDescription2.value, titleWorkSubDescription3.value, workSubDescription3.value,
      titleWorkSubDescription4.value, workSubDescription4.value,);
  } else{
    updateCandidate(idCandidate, {
      name: name.value,
      description: description.value,
      work: work.value,
      calendar: calendar.value,
      post: post.value,
      image: image.value,
      graph: graph.value,
      titleWork: titleWork.value,
      workDescription: workDescription.value,
      titleEducation: titleEducation.value,
      educationDescription: educationDescription.value,
      skillsDescription: skillsDescription.value,
      workSubDescription2: workSubDescription2.value,
      titleWorkSubDescription2: titleWorkSubDescription2.value,
      titleWorkSubDescription3: titleWorkSubDescription3.value,
      workSubDescription3: workSubDescription3.value,
      titleWorkSubDescription4: titleWorkSubDescription4.value,
      workSubDescription4: workSubDescription4.value,
    });

    editStatus = false;
  }

  candidateForm.reset();
})
