import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCUGR4tquUlB5gX-7hzGuSaRHPmFN1RFeI",
  authDomain: "disney-plus-clone-51fc0.firebaseapp.com",
  projectId: "disney-plus-clone-51fc0",
  storageBucket: "disney-plus-clone-51fc0.appspot.com",
  messagingSenderId: "59606893255",
  appId: "1:59606893255:web:5069eb45619e6fd55a74e2",
  measurementId: "G-6VGMCN0M5G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;