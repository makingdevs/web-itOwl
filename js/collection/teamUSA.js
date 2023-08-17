
import { collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
import { db } from '../config/firebase.js';

export const saveTeamUSA = (name, description, work, calendar, post, image) =>
  addDoc(collection(db, "teamUSA"), {name: name, description: description, work: work, calendar: calendar, post: post, image: image})

export const getTeamUSA = () => getDocs(collection(db, "teamUSA"))

export const onGetTeamUSA = (callback) => onSnapshot(collection(db, "teamUSA"), callback)

export const deleteTeamUSA = (id) => deleteDoc(doc(db, "teamUSA", id))

export const getTeamUSAEdit = (id) => getDoc(doc(db, "teamUSA", id))

export const updateTeamUSA = (id, newFields) => updateDoc(doc(db, "teamUSA", id), newFields)
