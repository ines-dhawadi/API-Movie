import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCKrah6HzM0jYBslaN2njOLnOnj0mfZ7Dw",
    authDomain: "movie-app-react-2275d.firebaseapp.com",
    databaseURL: "https://movie-app-react-2275d-default-rtdb.firebaseio.com",
    projectId: "movie-app-react-2275d",
    storageBucket: "movie-app-react-2275d.appspot.com",
    messagingSenderId: "1093201227797",
    appId: "1:1093201227797:web:ebfaf5f18d26b9d5d05e1c"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;