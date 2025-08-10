"use client";

import { useState } from "react";
import { useCart } from "../components/CartContext";
import { BsCheckCircle } from "react-icons/bs";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);

    // Optional: reset added after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      className={`btn btn-lg w-100 ${added ? "btn-success" : "btn-primary"}`}
      onClick={handleClick}
      type="button"
      aria-live="polite"
    >
      {added ? (
        <>
          <BsCheckCircle size={20} className="me-2" />
          Added to Cart
        </>
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}
