"use client";

import { signOut } from "firebase/auth";
import { auth } from "../lib/firebaseClient";

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully!");
      // Optional: Redirect or update UI on sign out
    } catch (err) {
      alert("Error signing out: " + err.message);
    }
  };

  return (
    <button onClick={handleSignOut} type="button">
      Sign Out
    </button>
  );
}
