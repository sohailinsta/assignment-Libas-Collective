import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartContext";
import { BsCheckCircle } from "react-icons/bs";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [transformStyle, setTransformStyle] = useState({});

  const imageUrl =
    (product.images ? product.images[0] : product.imageUrl)?.trim() || "";

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Calculate tilt on mouse move
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    setTransformStyle({
      transform: `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
      transition: "transform 0.1s ease",
      cursor: "pointer",
      borderRadius: "8px",
      backgroundColor: "white",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle({
      transform: "scale(1) rotateX(0) rotateY(0)",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      borderRadius: "8px",
      backgroundColor: "white",
      cursor: "default",
    });
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        className="card h-100"
        style={transformStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={`/products/${product.slug || product.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Image
            src={imageUrl}
            alt={product.name}
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
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
    </div>
  );
}
