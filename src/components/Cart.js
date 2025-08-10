"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";

export default function Cart({ onClick }) {
  const { itemCount } = useCart();

  return (
    <div
      className="d-flex align-items-center p-2"
      style={{ cursor: "pointer" }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Open cart"
    >
      <FaShoppingCart size={24} />
      <span className="ms-2 fw-semibold">Cart ({itemCount})</span>
    </div>
  );
}
