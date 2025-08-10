"use client";

import { AuthProvider } from "./AuthContext";
import { CartProvider } from "./CartContext";

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}
