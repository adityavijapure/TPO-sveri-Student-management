// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS0kmrWsW76AjAKXRusK3yn3yOsT1qUlU",
  authDomain: "tpo-student-management.firebaseapp.com",
  projectId: "tpo-student-management",
  storageBucket: "tpo-student-management.appspot.com",
  messagingSenderId: "233208956527",
  appId: "1:233208956527:web:93c1b56f93c70ff6932f9a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// Initialize Firebase
const db=firebase.firestore();
export { firebaseConfig,db };