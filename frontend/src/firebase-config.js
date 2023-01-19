// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'mb-pension.firebaseapp.com',
  projectId: 'mb-pension',
  storageBucket: 'mb-pension.appspot.com',
  messagingSenderId: '519626109856',
  appId: '1:519626109856:web:b0b58a56f2eaaa2b512ac5',
  measurementId: 'G-W9HGQ4SD0P'
};

// Initialize Firebase - establishes a connection between firebase and VS Code
export const app = initializeApp(firebaseConfig);

//connects to firestore database
export const db = getFirestore(app);
