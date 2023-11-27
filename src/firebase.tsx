import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDevIo5cgYV8i4zdq-GEs7lfYRl4WzdtfY",
  authDomain: "healthfriend-697a7.firebaseapp.com",
  projectId: "healthfriend-697a7",
  storageBucket: "healthfriend-697a7.appspot.com",
  messagingSenderId: "884186735846",
  appId: "1:884186735846:web:6619d4173ba5fa9f4b8727",
  measurementId: "G-TPLQVSK0F0",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


