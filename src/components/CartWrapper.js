// src/components/CartWrapper.js
"use client";

import { useCart } from "./CartContext";
import Cart from "./Cart";
import { useRouter } from "next/navigation";

export default function CartWrapper() {
  const { itemCount } = useCart();
  const router = useRouter();

  return <Cart onClick={() => router.push("/cart")} itemCount={itemCount} />;
}
