import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkAMRhEVM4m2jT7Ho_nZBt2AK_2IDMP6Y",
    authDomain: "chat-app-60790.firebaseapp.com",
    databaseURL: "https://chat-app-60790.firebaseio.com",
    projectId: "chat-app-60790",
    storageBucket: "chat-app-60790.appspot.com",
    messagingSenderId: "140036614779",
    appId: "1:140036614779:web:2f2e06dfcccbcdd28910de",
    measurementId: "G-QRB2C5MMEQ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()