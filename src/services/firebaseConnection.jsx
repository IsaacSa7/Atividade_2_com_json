import { initializeApp } from "firebase/app";
import {getFirestore, } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAP6CjD-8kRxNE8S0fe6RoRhGC9gUIupWg",
  authDomain: "testando-7aea5.firebaseapp.com",
  projectId: "testando-7aea5",
  storageBucket: "testando-7aea5.appspot.com",
  messagingSenderId: "502375418276",
  appId: "1:502375418276:web:c91eb43b7c649b0a63d931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}