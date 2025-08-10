"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

export default function ClientProductList({ initialProducts = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("initialProducts:", initialProducts);

  // Use safe array to avoid undefined error
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [initialProducts, searchTerm]);

  return (
    <>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}
