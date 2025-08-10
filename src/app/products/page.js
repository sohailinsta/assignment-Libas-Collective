import ClientProductList from "../../components/ClientProductList";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getAllProducts();
  console.log("products:", products);

  return (
    <div className="container mt-4">
      <h1>Products</h1>
      <ClientProductList initialProducts={products || []} />
    </div>
  );
}
