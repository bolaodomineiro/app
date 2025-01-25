import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxejO0T_asVRfIETOB8FIK8HJ1J09jCDc",
  authDomain: "bolaomineiro-bd92d.firebaseapp.com",
  projectId: "bolaomineiro-bd92d",
  storageBucket: "bolaomineiro-bd92d.firebasestorage.app",
  messagingSenderId: "216084526672",
  appId: "1:216084526672:web:03c16ea415ae6bbea34355",
  measurementId: "G-T62C0FZD7Q"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);