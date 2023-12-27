import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtiqO2eNkOPxlSVGjvdJIHnjjVeV6wP1I",
  authDomain: "retrosom-njs.firebaseapp.com",
  projectId: "retrosom-njs",
  storageBucket: "retrosom-njs.appspot.com",
  messagingSenderId: "692737284364",
  appId: "1:692737284364:web:0c4f07b8488502a300d129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
