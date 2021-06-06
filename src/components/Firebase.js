import firebase from "firebase";
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBtyBJX7baGT0ZarvIsdcNkqBMOMqZlMNc",
    authDomain: "movies-762da.firebaseapp.com",
    databaseURL: "https://movies-762da-default-rtdb.firebaseio.com",
    projectId: "movies-762da",
    storageBucket: "movies-762da.appspot.com",
    messagingSenderId: "367120917305",
    appId: "1:367120917305:web:2cc97f0a83e22ed19ebee8"
  };
  // Initialize Firebase
//  

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}