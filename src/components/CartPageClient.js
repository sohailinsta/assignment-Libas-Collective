// src/components/CartPageClient.js
"use client";
import { useCart } from "./CartContext";

export default function CartPageClient() {
  const { items, remove, clear } = useCart();

  if (!items || items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  const total = items.reduce(
    (s, it) => s + (it.price || 0) * (it.quantity || 1),
    0
  );

  return (
    <>
      <ul className="list-group mb-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="fw-bold">{item.name}</div>
              <div>Qty: {item.quantity}</div>
            </div>
            <div>
              <div>${((item.price || 0) * item.quantity).toFixed(2)}</div>
              <button
                className="btn btn-sm btn-danger mt-2"
                onClick={() => remove(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mb-3">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <button className="btn btn-secondary me-2" onClick={() => clear()}>
        Clear Cart
      </button>
      <button className="btn btn-primary" disabled>
        Proceed to Checkout (not implemented)
      </button>
    </>
  );
}
