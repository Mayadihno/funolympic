// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYug_QWep4DRhMZC50R3T2gmg1PbRJ7b0",
  authDomain: "react-olympic.firebaseapp.com",
  projectId: "react-olympic",
  storageBucket: "react-olympic.appspot.com",
  messagingSenderId: "140009736119",
  appId: "1:140009736119:web:b087216cf66ff411a98a32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
