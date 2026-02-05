// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARuJW4Q2Nu9eoDyvNEZgzeb4J44t1r5qI",
  authDomain: "maha-sri-fashions.firebaseapp.com",
  projectId: "maha-sri-fashions",
  storageBucket: "maha-sri-fashions.firebasestorage.app",
  messagingSenderId: "31022518138",
  appId: "1:31022518138:web:54a185326ce855c2e790c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
