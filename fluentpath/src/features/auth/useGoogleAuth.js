import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../../services/firebase";

export function loginWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export function logout() {
  return signOut(auth);
}