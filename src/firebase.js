// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "git-clone-a0c5b.firebaseapp.com",
  projectId: "git-clone-a0c5b",
  storageBucket: "git-clone-a0c5b.appspot.com",
  messagingSenderId: "1073910756836",
  appId: "1:1073910756836:web:6a2602e493aeaa891943f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);