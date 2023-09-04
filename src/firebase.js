// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZM5Bl4QAwm1GSg2-bOjk_FSgOcJ0dMWo",
  authDomain: "restaurant-app-313e1.firebaseapp.com",
  projectId: "restaurant-app-313e1",
  storageBucket: "restaurant-app-313e1.appspot.com",
  messagingSenderId: "441422963908",
  appId: "1:441422963908:web:87803f95e6bee02c005591",
  measurementId: "G-LRN43SX74R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const database = firebase.database();
const auth = getAuth();

export {firebase, auth, database};