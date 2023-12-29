import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { env } from "process";
require('dotenv').config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtiqO2eNkOPxlSVGjvdJIHnjjVeV6wP1I",
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
