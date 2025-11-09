// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRSEBASE_API_KEY,
  authDomain: "ai-shortvideo-629cc.firebaseapp.com",
  projectId: "ai-shortvideo-629cc",
  storageBucket: "ai-shortvideo-629cc.firebasestorage.app",
  messagingSenderId: "37775698752",
  appId: "1:37775698752:web:880bbc8d8b0085da7e68a5",
  measurementId: "G-LDQCX17TWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);