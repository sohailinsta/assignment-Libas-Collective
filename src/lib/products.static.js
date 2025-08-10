// src/lib/products.static.js
export const products = [
  {
    id: "1",
    slug: "red-shirt",
    name: "Red Shirt",
    description:
      "A bright red shirt for casual wear. Breathable cotton, comfortable fit.",
    price: 29.99,
    images: ["/images/red-shirt.jpg"],
    sku: "RS-001",
    featured: true,
    updatedAt: "2025-08-01",
  },
  {
    id: "2",
    slug: "blue-jeans",
    name: "Blue Jeans",
    description: "Classic blue jeans with a comfortable fit and modern cut.",
    price: 49.99,
    images: ["/images/blue-jeans.jpg"],
    sku: "BJ-002",
    featured: false,
    updatedAt: "2025-07-20",
  },
];

export async function getAllProducts() {
  return products;
}

export async function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export async function getProductSlugs() {
  return products.map((p) => p.slug);
}
