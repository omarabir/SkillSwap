// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAje8c37TYc3RF1ZsM0khJ2D0ZQ8LkcJ40",
  authDomain: "skillswapp-38005.firebaseapp.com",
  projectId: "skillswapp-38005",
  storageBucket: "skillswapp-38005.firebasestorage.app",
  messagingSenderId: "573404390017",
  appId: "1:573404390017:web:d231ea45c39bafeec2a380",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
