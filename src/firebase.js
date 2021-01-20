import firebase from 'firebase'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBusJf6wEFlcUE-ypG6iFYHL9mIKAAzrA",
  authDomain: "my-c9698.firebaseapp.com",
  projectId: "my-c9698",
  storageBucket: "my-c9698.appspot.com",
  messagingSenderId: "967671530201",
  appId: "1:967671530201:web:e46c5c39366161519c74c8",
  measurementId: "G-PVVM0QX7Q5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };