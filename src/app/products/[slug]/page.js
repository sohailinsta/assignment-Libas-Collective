import { notFound } from "next/navigation";
import { getProductBySlug } from "../../../lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return { title: "Product not found" };

  return {
    title: `${product.name} — My Store`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);
  if (!product) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.sku,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price.toString(),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="container my-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="row">
        {/* Left: Image Gallery */}
        <div className="col-md-6 mb-4">
          <div
            id="productImagesCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded shadow-sm">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? "active" : ""}`}
                >
                  <img
                    src={img.trim()}
                    className="d-block w-100"
                    alt={`${product.name} image ${idx + 1}`}
                    style={{ objectFit: "cover", height: "400px" }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {product.images.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#productImagesCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#productImagesCarousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          <p className="text-muted fst-italic">{product.sku}</p>
          <h3 className="text-primary mb-4">${product.price.toFixed(2)}</h3>

          <p style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
            {product.description}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
