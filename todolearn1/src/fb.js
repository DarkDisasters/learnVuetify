import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDM3EuYzQN3zx7LTkFIJFasPfF9BO0jloc",
    authDomain: "vuetifytest-a5d88.firebaseapp.com",
    databaseURL: "https://vuetifytest-a5d88.firebaseio.com",
    projectId: "vuetifytest-a5d88",
    storageBucket: "vuetifytest-a5d88.appspot.com",
    messagingSenderId: "198147893338",
    appId: "1:198147893338:web:7c95b483404b40f77e9063",
    measurementId: "G-EXM3F4YEQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const db = firebase.firestore()

export default db