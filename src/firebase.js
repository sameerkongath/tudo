
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNOWE5TF-Z7HKX2sxTMplW4nRIwi57GYQ",
    authDomain: "todo-eaa4c.firebaseapp.com",
    databaseURL: "https://todo-eaa4c.firebaseio.com",
    projectId: "todo-eaa4c",
    storageBucket: "todo-eaa4c.appspot.com",
    messagingSenderId: "373332960354",
    appId: "1:373332960354:web:5ff79a669f03c6fb0f5d3b",
    measurementId: "G-QCMK6NF2ZP"
  })
  const db = firebaseApp.firestore()


  export default db;