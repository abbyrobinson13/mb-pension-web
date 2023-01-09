// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'project-doe-authentication.firebaseapp.com',
  projectId: 'project-doe-authentication',
  storageBucket: 'project-doe-authentication.appspot.com',
  messagingSenderId: '659678341564',
  appId: '1:659678341564:web:a26360b31776e1e88ae3b9',
  measurementId: 'G-0P6TBCHYTG'
};

// Initialize Firebase - establishes a connection between firebase and VS Code
export const app = initializeApp(firebaseConfig);

//connects to firestore database
