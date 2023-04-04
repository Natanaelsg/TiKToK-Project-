
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC12l2OONfY3GX0e3ZfO_3Z-aUZsc_MHTw",
  authDomain: "tiktok-f6697.firebaseapp.com",
  projectId: "tiktok-f6697",
  storageBucket: "tiktok-f6697.appspot.com",
  messagingSenderId: "179466463937",
  appId: "1:179466463937:web:57193e210cf4b6cf140240",
  measurementId: "G-VVXXTYY6V1"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;