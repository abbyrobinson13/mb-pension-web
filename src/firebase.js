import firebase from "firebase/app";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "project-doe-authentication.firebaseapp.com",
  projectId: "project-doe-authentication",
  storageBucket: "project-doe-authentication.appspot.com",
  messagingSenderId: "659678341564",
  appId: "1:659678341564:web:a26360b31776e1e88ae3b9",
  measurementId: "G-0P6TBCHYTG",
});

export const auth = app.auth();
