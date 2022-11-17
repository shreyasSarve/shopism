import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBAfMr7p3VV-G2_pSEKBSk5j5JUA9K97Ls",
  authDomain: "dbmsclone.firebaseapp.com",
  projectId: "dbmsclone",
  storageBucket: "dbmsclone.appspot.com",
  messagingSenderId: "170469563591",
  appId: "1:170469563591:web:8c809c8b82bc6a866d32e2",
  measurementId: "G-P2TS8YXXG1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };