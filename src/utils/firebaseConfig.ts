// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_uQx2xyoKQJBeIRdQNUbH7CtvM7vHYtc",
  authDomain: "wephco-website-417eb.firebaseapp.com",
  projectId: "wephco-website-417eb",
  storageBucket: "wephco-website-417eb.appspot.com",
  messagingSenderId: "1092640047441",
  appId: "1:1092640047441:web:2107c84f376883c2ff5370",
  measurementId: "G-ZHMYMF9L96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)