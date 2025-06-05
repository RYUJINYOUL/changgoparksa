import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjw55I1XOxNt5Hnspu0sBhJxY_W7XvxkQ",
  authDomain: "changgoparksa.firebaseapp.com",
  projectId: "changgoparksa",
  storageBucket: "changgoparksa.firebasestorage.app",
  messagingSenderId: "417250568052",
  appId: "1:417250568052:web:e54316b1e0bb44d8c0ee21"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
// export const auth = getAuth(app);

export default app
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()