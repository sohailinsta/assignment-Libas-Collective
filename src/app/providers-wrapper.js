"use client";

import Providers from "../components/Providers";
import ProtectedRoute from "../components/ProtectedRoute";
import { usePathname } from "next/navigation";

export default function ProvidersWrapper({ children }) {
  const pathname = usePathname();
  const publicPaths = ["/login", "/register"];
  const isPublicPage = publicPaths.includes(pathname);

  return (
    <Providers>
      {isPublicPage ? children : <ProtectedRoute>{children}</ProtectedRoute>}
    </Providers>
  );
}
