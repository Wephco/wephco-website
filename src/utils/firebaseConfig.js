// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLPHDVO8rt5whwATeco7CaTX54nmGcAHU",
  authDomain: "staging-website-e8ec1.firebaseapp.com",
  projectId: "staging-website-e8ec1",
  storageBucket: "staging-website-e8ec1.appspot.com",
  messagingSenderId: "921059598026",
  appId: "1:921059598026:web:7992e86c02c02c2fee5e33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize & export firestore
const db = getFirestore(app);

export {
  app,
  db
}