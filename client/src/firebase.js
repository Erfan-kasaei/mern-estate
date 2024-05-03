// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-cr7.firebaseapp.com",
  projectId: "mern-estate-cr7",
  storageBucket: "mern-estate-cr7.appspot.com",
  messagingSenderId: "48323726413",
  appId: "1:48323726413:web:2c9af512f783c3836f6004",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
