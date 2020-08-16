import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDfMsYqj7PN7xQSRp42K20EXUvffiy7MOQ",
    authDomain: "user-20a80.firebaseapp.com",
    databaseURL: "https://user-20a80.firebaseio.com",
    projectId: "user-20a80",
    storageBucket: "user-20a80.appspot.com",
    messagingSenderId: "797031984291",
    appId: "1:797031984291:web:872969354af8a562e8a316",
    measurementId: "G-R283K1ZVJ0"
  });

// firebase authorization to register and login accounts with email and password 
const auth = firebase.auth()
const storage = firebase.storage()

export  {auth, storage}
