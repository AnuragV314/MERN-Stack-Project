// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "anurag-estate.firebaseapp.com",
  projectId: "anurag-estate",
  storageBucket: "anurag-estate.appspot.com",
  messagingSenderId: "583059078345",
  appId: "1:583059078345:web:a0f9769b895d9d9b10a118"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);