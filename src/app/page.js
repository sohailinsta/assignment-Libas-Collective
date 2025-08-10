// src/app/page.js (Server component)

import ClientProductList from "../components/ClientProductList";
import CartWrapper from "../components/CartWrapper"; // import your client wrapper here
import Image from "next/image";
import { getAllProducts } from "../lib/products";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <div>
          <Image
            src="/images/logo.svg"
            alt="My Store"
            width={180}
            height={50}
            priority
          />
        </div>
        <CartWrapper />
      </header>

      <main className="container mt-4">
        <h1>Products</h1>
        <ClientProductList initialProducts={products} />
      </main>
    </>
  );
}
