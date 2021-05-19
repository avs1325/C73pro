import firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJIkGnlSyWjCm1fwbIrjD2Sg8Ao08FNJw",
    authDomain: "story-project-7ee21.firebaseapp.com",
    projectId: "story-project-7ee21",
    storageBucket: "story-project-7ee21.appspot.com",
    messagingSenderId: "62794998805",
    appId: "1:62794998805:web:cf82ba5b861128d14f5a1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()