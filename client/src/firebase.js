// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1b2d8.firebaseapp.com",
  projectId: "mern-estate-1b2d8",
  storageBucket: "mern-estate-1b2d8.appspot.com",
  messagingSenderId: "461047694512",
  appId: "1:461047694512:web:f411549cf3f367adb72775",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
