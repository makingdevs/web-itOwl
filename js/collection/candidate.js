
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { db } from '../config/firebase.js';

export const saveCandidate = (name, description) => 
  addDoc(collection(db, "candidates"), {name: name, description: description})

export const getCandidates = () => getDocs(collection(db, "candidates"))

export const onGetCandidates = (callback) => onSnapshot(collection(db, "candidates"), callback)

export const deleteCandidate = id => deleteDoc(doc(db, "candidates", id))

export const getCandidateEdit = id => getDoc(doc(db, "candidates", id))
