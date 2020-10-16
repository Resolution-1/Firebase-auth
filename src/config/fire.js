import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAbcIQ7Vdhwj0ToI5gEQo2todCpOJWZDnw",
  authDomain: "fir-auth-5696d.firebaseapp.com",
  databaseURL: "https://fir-auth-5696d.firebaseio.com",
  projectId: "fir-auth-5696d",
  storageBucket: "fir-auth-5696d.appspot.com",
  messagingSenderId: "810613068516",
  appId: "1:810613068516:web:a68cbd35910eb4315b52f1",
  measurementId: "G-TDQBE5EJVB",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
