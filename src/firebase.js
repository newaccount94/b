import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig= {
  apiKey: "AIzaSyCRslwBb2eGsXyAZgUdmy_yJLObQUjF0TQ",
  authDomain: "firechat2-73c68.firebaseapp.com",
  projectId: "firechat2-73c68",
  storageBucket: "firechat2-73c68.appspot.com",
  messagingSenderId: "495596695446",
  appId: "1:495596695446:web:801b3f24578500a430f7b7",
  measurementId: "G-SV3Q9HK307"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth };