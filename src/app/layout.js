import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import ProvidersWrapper from "./providers-wrapper";

export const metadata = {
  title: "My Store",
  description: "An SEO optimized Next.js web storefront",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
