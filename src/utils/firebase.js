// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4U3GqSgxrm4_5SF9ER0WM00ukqjECfc",
  authDomain: "netflix-gpt-52520.firebaseapp.com",
  projectId: "netflix-gpt-52520",
  storageBucket: "netflix-gpt-52520.appspot.com",
  messagingSenderId: "847312766278",
  appId: "1:847312766278:web:d31f0c89f5e82d8bf2d147",
  measurementId: "G-67LFB9ZCJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
