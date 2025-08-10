import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Providers from "../components/Providers";
import ProtectedRoute from "../components/ProtectedRoute";

export const metadata = {
  title: "My Store",
  description: "An SEO optimized Next.js web storefront",
};

export default function RootLayout({ children }) {
  // You may want to skip ProtectedRoute on /login and /register pages if they share this layout,
  // but simplest is to place login/register in a separate folder with a different layout.

  return (
    <html lang="en">
      <body>
        <Providers>
          <ProtectedRoute>{children}</ProtectedRoute>
        </Providers>
      </body>
    </html>
  );
}
