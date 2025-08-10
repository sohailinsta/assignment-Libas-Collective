"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartContext";
import { BsCheckCircle } from "react-icons/bs";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const imageUrl =
    (product.images ? product.images[0] : product.imageUrl)?.trim() || "";

  // This mimics AddToCartButton logic inside ProductCard
  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card h-100">
      <Link
        href={`/products/${product.slug || product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Image
          src={imageUrl}
          alt={product.name}
          width={300}
          height={300}
          style={{ objectFit: "cover" }}
          className="card-img-top"
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price.toFixed(2)}</p>
        </div>
      </Link>

      <div className="card-footer">
        <button
          className={`btn btn-md w-100 ${
            added ? "btn-success" : "btn-primary"
          }`}
          onClick={handleAddToCart}
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
      </div>
    </div>
  );
}
