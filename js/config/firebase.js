// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2xRHqY5qZJLBq0sdrUGKfzPt661J6HtQ",
  authDomain: "web-itowl.firebaseapp.com",
  projectId: "web-itowl",
  storageBucket: "web-itowl.appspot.com",
  messagingSenderId: "623417420128",
  appId: "1:623417420128:web:2439130d4073bc725f9605",
  measurementId: "G-3BSY45V2G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore()

export {
  db,
  analytics,
}
