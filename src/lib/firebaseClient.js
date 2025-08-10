import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRCgDWPIsQihnOxrbDxXOMpQhHOpn6lGg",
  authDomain: "my-web-store-4e1f1.firebaseapp.com",
  projectId: "my-web-store-4e1f1",
  storageBucket: "my-web-store-4e1f1.firebasestorage.app",
  messagingSenderId: "624848042386",
  appId: "1:624848042386:web:712753d521c27e47be694b",
  measurementId: "G-B70RSD4Z21",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
