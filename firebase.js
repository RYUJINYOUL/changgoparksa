import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0jvvVVLUZ13HwDsZJ2S2IxFAjm6TdEu4",
  authDomain: "barundye.firebaseapp.com",
  projectId: "barundye",
  storageBucket: "barundye.firebasestorage.app",
  messagingSenderId: "397831150317",
  appId: "1:397831150317:web:5f37b1be4573e692274ae4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
// export const auth = getAuth(app);

export default app
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()