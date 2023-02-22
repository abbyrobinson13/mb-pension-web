import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc
} from 'firebase/firestore';
import { signUp, signUpBroker } from '../firebase-config';
import { LayoutAdminNavBar } from './AdminNavBar';

function CompanyList() {
  const [newName, setNewName] = useState('');
  const [password, setNewPassword] = useState('');
  const [error, seterror] = useState('');
  const [brokerError, setBrokerError] = useState('');
  const [email, setNewEmail] = useState('');
  const [brokerEmail, setBrokerEmail] = useState('');
  const [brokerPassword, setBrokerPassword] = useState('');
  const [newBroker, setNewBroker] = useState('');
  const [users, setUsers] = useState([]);

  //created a variable that references which database collection is being used on firebase - "users"
  const usersCollectionRef = collection(db, 'companies');
  //addDoc is a function from firebase that is used to create a new user.
  // takes in two things 1. reference to collection (usersCollectionRef, ) and object
  const createUser = async (e) => {
    // await addDoc(usersCollectionRef, {
    //   name: newName,
    //   password: password,
    //   email: email,
    //   broker: newBroker,
    //   brokerEmail: brokerEmail,
    //   brokerPassword: brokerPassword
    // });
    e.preventDefault();
    if (password !== password) {
      seterror('Passwords do not match');
    } else {
      setNewEmail('');
      setNewPassword('');
      const res = await signUp(
        email,
        password,
        newName,
        newBroker,
        brokerEmail,
        brokerPassword
      );
      if (res.error) seterror(res.error);
    }
    if (password !== password) {
      seterror('Passwords do not match');
    } else {
      setBrokerEmail('');
      setBrokerPassword('');
      const res = await signUpBroker(brokerEmail, brokerPassword);
      if (res.brokerError) seterror(res.error);
    }
  };
  //this function ADDS document to USER COLLECTION

  //this function will allow you to delete a user
  const deleteUser = async (id) => {
    //this references the exact document in the database
    const userDoc = doc(db, 'companies', id);
    //function that deletes the document with the userDoc information
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      // function imported from firebase that returns all docs from a collection
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      //data.docs will access the documents inside the data from fire store
      //...doc.data function will return the doc holding the name and age of user
      // we are looping through the documents in the collection setting the user arrays to be equal to the doc data and the doc ID
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <LayoutAdminNavBar>
      <div className="App">
        {users.map((user) => {
          return (
            <div>
              <h1>Company Name: {user.name}</h1>
              <h1>Company Email: {user.email}</h1>
              <h1>Insurance Broker: {user.broker}</h1>
              {/* <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </button> */}
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </LayoutAdminNavBar>
  );
}

export default CompanyList;
