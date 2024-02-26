import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC8tXJRKie8BI5Hvau3d1FnjYoPk1dmnc",
  authDomain: "tepiauth.firebaseapp.com",
  projectId: "tepiauth",
  storageBucket: "tepiauth.appspot.com",
  messagingSenderId: "591669317653",
  appId: "1:591669317653:web:b90b427b47a4b887e47e1c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);