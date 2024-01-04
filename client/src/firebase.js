// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-be764.firebaseapp.com",
  projectId: "real-estate-be764",
  storageBucket: "real-estate-be764.appspot.com",
  messagingSenderId: "166059497240",
  appId: "1:166059497240:web:dfcfbbcb42b1fa35d8b06d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);