"use client";

import { useCart } from "../../components/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your Cart is Empty</h2>
        <p className="text-muted">
          Looks like you haven&apos;t added anything yet.
        </p>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Your Cart</h1>
      <ul className="list-group shadow-sm rounded">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
            style={{ gap: "1rem" }}
          >
            <Image
              src={item.images?.[0] || item.imageUrl}
              alt={item.name}
              width={80}
              height={80}
              style={{ objectFit: "cover", borderRadius: "8px" }}
              loading="lazy"
            />
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">{item.name}</h5>
              <small className="text-muted">
                Quantity: {item.quantity} &nbsp;|&nbsp; Price: $
                {item.price.toFixed(2)}
              </small>
            </div>
            <div className="text-end">
              <p className="mb-1 fw-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 d-flex justify-content-end align-items-center">
        <h4>
          Total: <span className="text-primary">${totalPrice.toFixed(2)}</span>
        </h4>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-primary btn-lg">Proceed to Checkout</button>
      </div>
    </div>
  );
}
