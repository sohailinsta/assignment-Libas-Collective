// src/lib/products.js
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "./firebaseClient";

export async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}

// Get single product by slug
export async function getProductBySlug(slug) {
  const q = query(
    collection(db, "products"),
    where("id", "==", slug), // make sure "id" matches your slug
    limit(1)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;
  return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
}
