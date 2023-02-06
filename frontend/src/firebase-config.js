// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from '@firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//connects to firestore database
export const db = getFirestore();

//creates a new email and password "sign up"
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, 'companies'), {
      uid: user.uid,
      email: user.email
    });
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

//the signIn function takes the email and password for an already registeted email

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return true;
  } catch (error) {
    return { error: error.message };
  }
};

//sign out function is simple since it calls on the firebase signOut function
export const logOut = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};
