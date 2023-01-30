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

function CompanyList() {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBroker, setNewBroker] = useState('');
  const [users, setUsers] = useState([]);
  //created a variable that references which database collection is being used on firebase - "users"
  const usersCollectionRef = collection(db, 'companies');
  //addDoc is a function from firebase that is used to create a new user.
  // takes in two things 1. reference to collection (usersCollectionRef, ) and object
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      phone: newPhone,
      email: newEmail,
      broker: newBroker
    });
  };
  //this function ADDS document to USER COLLECTION

  //this function allows you to update a user
  const updateUser = async (id, age) => {
    //picks out a single user document
    const userDoc = doc(db, 'users', id);
    //variable updates age
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

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
    <div className="App">
      <input
        placeholder="Company Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        placeholder="Company Email"
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      />
      <input
        placeholder="Company Password"
        onChange={(event) => {
          setNewPhone(event.target.value);
        }}
      />
      <input
        placeholder="Insurance Broker Name"
        onChange={(event) => {
          setNewBroker(event.target.value);
        }}
      />
      <input
        placeholder="Insurance Broker Email"
        onChange={(event) => {
          setNewBroker(event.target.value);
        }}
      />
      <input
        placeholder="Insurance Broker Password"
        onChange={(event) => {
          setNewBroker(event.target.value);
        }}
      />
      <button onClick={createUser}> Add New Company </button>
      {users.map((user) => {
        return (
          <div>
            <h1>Company Name: {user.name}</h1>
            <h1>Company Email: {user.email}</h1>
            <h1>Phone Number: {user.phone}</h1>
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
  );
}

export default CompanyList;
