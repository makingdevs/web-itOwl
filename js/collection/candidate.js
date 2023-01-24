
import { collection, addDoc, getDocs, onSnapshot, } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
import { db } from '../config/firebase.js'

export const saveCandidate = (name, description) => 
  addDoc(collection(db, "candidates"), {name: name, description: description})

export const getCandidates = () => getDocs(collection(db, "candidates"))

export const onGetCandidates = (callback) => onSnapshot(collection(db, "candidates"), callback)
