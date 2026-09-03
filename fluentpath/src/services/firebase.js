import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXjMLsENgqmIW5kDUE0-A7QW2fdTBAy7k",
  authDomain: "fluentpath-app-7444a.firebaseapp.com",
  projectId: "fluentpath-app-7444a",
  storageBucket: "fluentpath-app-7444a.firebasestorage.app",
  messagingSenderId: "281088651927",
  appId: "1:281088651927:web:a978a20d8223c137c3efd2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);