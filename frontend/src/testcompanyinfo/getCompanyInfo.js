import { doc, getDoc, where, getDocs, collection, query } from 'firebase/firestore';
import { db } from '../firebase-config.js';

export const getCompanyInfo = async () => {
  // const q = query(collection(db, "companies"), where ('brokerid', '==', 'eDE5DTG9nSPbdUQPPFJAN'));
  const q = query(collection(db, "brokers"), where ('companyid', '==', 'eINjKLAwYWW8mGL4ToA3'));
  const querySnapshot = await getDocs(q)
    // doc(db, 'companies'),
    // where('brokerid', '==', 'DE5DTG9nSPbdUQPPFJAN')
    // where('companyid', '==', 'eINjKLAwYWW8mGL4ToA3')
  ;
  console.log('querySnapshot!!!', querySnapshot);
};

// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "companies"), where("brokerid", "==", "DE5DTG9nSPbdUQPPFJAN"));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
