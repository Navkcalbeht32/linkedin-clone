import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDn6Q4Zxc5HKx6127_0h0ASN3zcN8NiRHs",
    authDomain: "linkedin-clone-fa66b.firebaseapp.com",
    projectId: "linkedin-clone-fa66b",
    storageBucket: "linkedin-clone-fa66b.appspot.com",
    messagingSenderId: "796724824817",
    appId: "1:796724824817:web:ad957209fb518f9a63b750",
    measurementId: "G-NN8TV0R6MW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };