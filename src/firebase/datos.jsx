// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEmnUYYBZkqh7jb2QPR-b4fk-Qt5ks3dw",
  authDomain: "tuskgaming-eb5b2.firebaseapp.com",
  projectId: "tuskgaming-eb5b2",
  storageBucket: "tuskgaming-eb5b2.appspot.com",
  messagingSenderId: "979503521419",
  appId: "1:979503521419:web:22704d9d8f8604e16bbe8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
