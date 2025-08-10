// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "My Web Store",
  description: "A small SEO-friendly Next.js storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              My Store
            </a>
            <div>
              <a className="nav-link d-inline-block" href="/products">
                Products
              </a>
              <a className="nav-link d-inline-block" href="/cart">
                Cart
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
