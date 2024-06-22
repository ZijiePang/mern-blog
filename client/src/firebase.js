// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f3c39.firebaseapp.com",
  projectId: "mern-blog-f3c39",
  storageBucket: "mern-blog-f3c39.appspot.com",
  messagingSenderId: "529919902876",
  appId: "1:529919902876:web:366088b336cfbd91c59959"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);