
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
import { db } from '../config/firebase.js'

export const saveCandidate = (name, description) => {
  addDoc(collection(db, "candidates"), {name: name, description: description})
}
