import React, { useState, useEffect, useContext } from 'react';
import { db } from '../firebase-config.js';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext.js';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  where,
  getDoc,
  query
} from 'firebase/firestore';
import styled from 'styled-components';

function DisplayProfileInformation() {
  const { user } = useContext(AuthContext);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBroker, setNewBroker] = useState('');
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  console.log(user);

  const handleClick = () => {
    console.log(userProfile);
  };

  //BELOW created a variable that references which database collection is being used on firebase - "users"
  const usersCollectionRef = collection(db, 'companies');

  //addDoc is a function from firebase that is used to create a new user.
  //takes in two things 1. reference to collection (usersCollectionRef, ) and object
  //this function ADDS document to USER COLLECTION
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      phone: newPhone,
      email: user.email
    });
  };

  //This function updates a user
  const updateUser = async (id) => {
    let currentDoc = query(usersCollectionRef, where('uid', '==', id));
    let docSnapshot = await getDocs(currentDoc);
    let docId;
    docSnapshot.forEach((doc) => {
      docId = doc.id;
    });
    //picks out a single user document
    const userDoc = doc(db, 'companies', docId);
    //variable updates the field from doc
    const newFields = {
      name: newName,
      phone: newPhone,
      broker: newBroker
    };
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
      //...doc.data function will return the doc
      // we are looping through the documents in the collection setting the user arrays to be equal to the doc data and the doc ID
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };

    getUsers();
  }, []);

  const editProfileInfo = () => {
    let path = '/editprofile';
    navigate(path);
  };

  const userProfile =
    users.length > 0
      ? users.filter(
          (e) => e.email === user.email || e.brokerEmail === user.email
        )[0]
      : null;

  return (
    <div>
      <Container>
        <CommonCard>
          <CompanyProfile>
            <span>
              <p> Company Profile</p>
            </span>
          </CompanyProfile>
          <ProfileImage>
            <div>
              <img src="/images/user.svg" />
              <p>New image</p>
            </div>
            <div>
              <h1>{userProfile && userProfile.name}</h1>
              <h3>{user.email}</h3>
              <button onClick={editProfileInfo}>Update Profile</button>
            </div>
          </ProfileImage>

          <ProfileInformation>
            <div>
              <li>
                <h3>Insurance Broker:</h3>
                <h2>{userProfile && userProfile.broker}</h2>
              </li>
              <li>
                <h3>Phone Number:</h3>
                <h2>{userProfile && userProfile.phone}</h2>
              </li>
              <li>
                <h3>Address: </h3>
                <h2>{userProfile && userProfile.address}</h2>
              </li>
              <li>
                <h3>City:</h3>
                <h2>{userProfile && userProfile.city}</h2>
              </li>
              <li>
                <h3>Province:</h3>
                <h2>{userProfile && userProfile.province}</h2>
              </li>
              <li>
                <h3>Postal Code:</h3>
                <h2>{userProfile && userProfile.postalCode}</h2>
              </li>
            </div>
          </ProfileInformation>
        </CommonCard>
      </Container>
    </div>
  );
}

export default DisplayProfileInformation;

const Container = styled.div`
  grid-area: rightside;
`;

const CommonCard = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
`;

const CompanyProfile = styled.div`
  display: flex;
  padding: 4px 30px;
  p {
    font-size: 20px;
    font-weight: bold;
    color: grey;
  }
`;

const ProfileImage = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 100px;

  p {
    font-size: 12px;
    color: #70b5f9;
    position: relative;
    bottom: 8px;
  }

  img {
    display: flex;
    align-items: flex-start;
    padding-left: 30px;
    padding: 20px;
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }
  h3 {
    padding-bottom: 50px;
  }
  button {
    flex-direction: row;
    font-size: 1em;
    display: flex;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #9ac6df;
    border-radius: 3px;
    background-color: #fff;
  }
`;

const ProfileInformation = styled.div`
  list-style: none;

  li {
    padding: 4px 16px;
    text-align: left;
    h3 {
      color: grey;
      font-size: 12px;
    }
    h2 {
      font-size: 18px;
    }
  }
`;
