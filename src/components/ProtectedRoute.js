"use client";

import { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user, router]);

  if (!user) return null; // or a spinner/loading indicator

  return <>{children}</>;
}
