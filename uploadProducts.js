const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadProducts() {
  try {
    const data = fs.readFileSync("./products.json", "utf-8");
    const products = JSON.parse(data);

    for (const product of products) {
      const docRef = db.collection("products").doc(product.id);
      await docRef.set(product);
      console.log(`Uploaded product: ${product.id}`);
    }

    console.log("All products uploaded!");
  } catch (err) {
    console.error("Error uploading products:", err);
  }
}

uploadProducts();
