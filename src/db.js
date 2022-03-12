// firebase version 9 引入方是
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/auth";

// firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyCSei4bGBnDPGw3vOMuTPeR1mg4Qq5UopA",
  authDomain: "vue-chat-app-e373f.firebaseapp.com",
  projectId: "vue-chat-app-e373f",
  databaseURL:
    "https://vue-chat-app-e373f-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "vue-chat-app-e373f.appspot.com",
  messagingSenderId: "191258709366",
  appId: "1:191258709366:web:1007e9d9633ff375937e57",
  measurementId: "G-D5D6P8N5Y1",
};

export const database = firebase.initializeApp(firebaseConfig).database();

export const auth = firebase.initializeApp(firebaseConfig).auth();
