// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBotiIMqDB_rr6w-8ctEF_9Iu9VjcJf1sQ",
  authDomain: "e-commerce-654fc.firebaseapp.com",
  projectId: "e-commerce-654fc",
  storageBucket: "e-commerce-654fc.appspot.com",
  messagingSenderId: "764660045769",
  appId: "1:764660045769:web:d48e19124275849efaba18",
  measurementId: "G-Y1HRJ97LH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
