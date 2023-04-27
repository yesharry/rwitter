// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASfDvxK59_o3c-02DdeOvUEn0AdrfmWdE",
  authDomain: "rwitter-2d29b.firebaseapp.com",
  projectId: "rwitter-2d29b",
  storageBucket: "rwitter-2d29b.appspot.com",
  messagingSenderId: "1099010973950",
  appId: "1:1099010973950:web:26adba2096205fff3a05af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// index.js에서 import {firebase} from './firebase' 하고 싶으면
// export const firebase = initializeApp(firebaseConfig); 라고 하면 된다.
