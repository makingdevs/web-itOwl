import { saveTeamUSA, onGetTeamUSA, deleteTeamUSA, getTeamUSAEdit, updateTeamUSA } from "./collection/teamUSA.js"

const teamUSAForm = document.getElementById("teamUSA-form")
const teamUSAContainer = document.getElementById("teamUSA-container")

let editStatus = false
let idTeamUSA = ""

window.addEventListener('DOMContentLoaded', async () => {
  onGetTeamUSA((querySnapshot) => {
    let html = ""

    querySnapshot.forEach(doc => {
      const teamUSA = doc.data()
      html += `
        <tr>
          <td> ${teamUSA.name}</td>
          <td> ${teamUSA.work}</td>
          <td> ${teamUSA.description}</td>
          <td> ${teamUSA.calendar}</td>
          <td> ${teamUSA.post}</td>
          <td>
            <a href='${teamUSA.image}'> url</a>
          </td>
          <td>
            <a href='${teamUSA.graph}'> url Graph</a>
          </td>

          <td>
            <button class="btn-delete btn btn-danger" data-id="${doc.id}" >Deleted</button>
            <button class="btn-edit btn btn-primary" data-id="${doc.id}" >Edit</button>
          </td>
        </tr>
      `;
    });

    teamUSAContainer.innerHTML = html;
    const btnDelete = teamUSAContainer.querySelectorAll(".btn-delete")

    btnDelete.forEach(btn => {
      btn.addEventListener("click", ({target: {dataset}}) => {
        deleteTeamUSA(dataset.id)
      });
    });

    const btnEdit = teamUSAContainer.querySelectorAll(".btn-edit")
    btnEdit.forEach((btn) => {
      btn.addEventListener("click",  async (e) => {
        const doc = await getTeamUSAEdit(e.target.dataset.id)
        const teamUSA = doc.data()

        teamUSAForm["teamUSA-name"].value = teamUSA.name
        teamUSAForm["teamUSA-description"].value = teamUSA.description
        teamUSAForm["teamUSA-work"].value = teamUSA.work
        teamUSAForm["teamUSA-calendar"].value = teamUSA.calendar
        teamUSAForm["teamUSA-post"].value = teamUSA.post
        teamUSAForm["teamUSA-image"].value = teamUSA.image
        teamUSAForm["teamUSA-graph"].value = teamUSA.graph
        teamUSAForm["teamUSA-titleWork"].value = teamUSA.titleWork
        teamUSAForm["teamUSA-workDescription"].value = teamUSA.workDescription
        teamUSAForm["teamUSA-workSubDescription2"].value = teamUSA.workSubDescription2
        teamUSAForm["teamUSA-titleWorkSubDescription2"].value = teamUSA.titleWorkSubDescription2
        teamUSAForm["teamUSA-titleWorkSubDescription3"].value = teamUSA.titleWorkSubDescription3
        teamUSAForm["teamUSA-titleWorkSubDescription4"].value = teamUSA.titleWorkSubDescription4
        teamUSAForm["teamUSA-workSubDescription3"].value = teamUSA.workSubDescription3
        teamUSAForm["teamUSA-workSubDescription4"].value = teamUSA.workSubDescription4
        teamUSAForm["teamUSA-titleEducation"].value = teamUSA.titleEducation
        teamUSAForm["teamUSA-educationDescription"].value = teamUSA.educationDescription
        teamUSAForm["teamUSA-skillsDescription"].value = teamUSA.skillsDescription

        editStatus = true
        idTeamUSA = doc.id

        teamUSAForm["teamUSA-save"].innerText = "Update"
      })
    })

  });
});

teamUSAForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = teamUSAForm["teamUSA-name"];
  const description =  teamUSAForm["teamUSA-description"];
  const work =  teamUSAForm["teamUSA-work"];
  const calendar =  teamUSAForm["teamUSA-calendar"];
  const post =  teamUSAForm["teamUSA-post"];
  const image =  teamUSAForm["teamUSA-image"];
  const graph = teamUSAForm["teamUSA-graph"]
  const titleWork = teamUSAForm["teamUSA-titleWork"]
  const workDescription = teamUSAForm["teamUSA-workDescription"]
  const titleWorkSubDescription2 = teamUSAForm["teamUSA-titleWorkSubDescription2"]
  const workSubDescription2 = teamUSAForm["teamUSA-workSubDescription2"]
  const titleWorkSubDescription3 = teamUSAForm["teamUSA-titleWorkSubDescription3"]
  const workSubDescription3 = teamUSAForm["teamUSA-workSubDescription3"]
  const titleWorkSubDescription4 = teamUSAForm["teamUSA-titleWorkSubDescription4"]
  const workSubDescription4 = teamUSAForm["teamUSA-workSubDescription4"]
  const titleEducation = teamUSAForm["teamUSA-titleEducation"]
  const educationDescription = teamUSAForm["teamUSA-educationDescription"]
  const skillsDescription = teamUSAForm["teamUSA-skillsDescription"]

  if(!editStatus) {
    saveTeamUSA(name.value, description.value, work.value, calendar.value, post.value, image.value, graph.value, titleWork.value, workDescription.value, titleEducation.value,
      educationDescription.value, skillsDescription.value, workSubDescription2.value, titleWorkSubDescription2.value, titleWorkSubDescription3.value, workSubDescription3.value,
      titleWorkSubDescription4.value, workSubDescription4.value,);
  } else{
    updateTeamUSA(idTeamUSA, {
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

  teamUSAForm.reset();
})
