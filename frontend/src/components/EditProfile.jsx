import React, { useState, useContext, useSyncExternalStore } from 'react';
import AuthContext from '../AuthContext.js';
import { useNavigate, Navigate } from 'react-router-dom';
import { db, logOut } from '../firebase-config.js';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  where,
  query
} from 'firebase/firestore';
import styled from 'styled-components';
import { updateCurrentUser } from 'firebase/auth';

function EditProfile() {
  const { user } = useContext(AuthContext);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBroker, setNewBroker] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [province, setProvince] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //BELOW created a variable that references which database collection is being used on firebase - "users"
  const usersCollectionRef = collection(db, 'companies');

  const handleLogout = async () => {
    await logOut();
  };
  //the app conditionally renders the profile page - will redirect to login if not authenticated
  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const updateUser = async (email) => {
    let currentDocBroker = query(
      usersCollectionRef,
      where('brokerEmail', '==', email)
    );
    console.log(currentDocBroker);
    let docSnapshotBroker = await getDocs(currentDocBroker);
    console.log(docSnapshotBroker.size);

    let currentDocCompany = query(
      usersCollectionRef,
      where('email', '==', email)
    );
    let docSnapshotCompany = await getDocs(currentDocCompany);
    console.log(docSnapshotCompany.size);

    const docSnapshot = [];
    docSnapshotBroker.forEach((doc) => {
      docSnapshot.push(doc.id);
    });

    docSnapshotCompany.forEach((doc) => {
      docSnapshot.push(doc.id);
    });

    console.log(docSnapshot);
    let docId;

    docSnapshot.forEach((doc) => {
      docId = doc;
    });

    // picks out a single user document
    const userDoc = doc(db, 'companies', docId);
    //variable updates the field from doc
    const newFields = {
      name: newName,
      phone: newPhone,
      broker: newBroker,
      address: address,
      city: city,
      postalCode: postalCode,
      province: province
    };
    await updateDoc(userDoc, newFields);
  };

  const handleClick = () => {
    console.log(user.email);
  };

  return (
    <>
      <h1>Update Information</h1>

      <h3>{user.email}</h3>

      <Input
        type="text"
        placeholder="Company Name"
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <Input
        placeholder="Company Phone Number"
        value={newPhone}
        onChange={(event) => {
          setNewPhone(event.target.value);
        }}
      />
      <Input
        placeholder="Insurance Broker Name"
        value={newBroker}
        onChange={(event) => {
          setNewBroker(event.target.value);
        }}
      />
      <Input
        placeholder="Address"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <Input
        placeholder="City"
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <Input
        placeholder="Province"
        onChange={(event) => {
          setProvince(event.target.value);
        }}
      />
      <Input
        placeholder="Postal Code"
        onChange={(event) => {
          setPostalCode(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          updateUser(user.email);
        }}
      >
        {' '}
        Update profile
      </Button>

      <Button onClick={handleLogout}>Log out</Button>
    </>
  );
}

export default EditProfile;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #D2E3EC;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: grey;`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  flex-align: flex-end;
  align-items: center;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #9ac6df;
  border-radius: 3px;
  background-color: #fff;
`;
