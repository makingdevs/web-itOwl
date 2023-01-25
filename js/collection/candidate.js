
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { db } from '../config/firebase.js';

export const saveCandidate = (name, description, work, calendar, post, image) =>
  addDoc(collection(db, "candidates"), {name: name, description: description, work: work, calendar: calendar, post: post, image: image})

export const getCandidates = () => getDocs(collection(db, "candidates"))

export const onGetCandidates = (callback) => onSnapshot(collection(db, "candidates"), callback)

export const deleteCandidate = (id) => deleteDoc(doc(db, "candidates", id))

export const getCandidateEdit = (id) => getDoc(doc(db, "candidates", id))

export const updateCandidate = (id, newFields) => updateDoc(doc(db, "candidates", id), newFields)
