import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
