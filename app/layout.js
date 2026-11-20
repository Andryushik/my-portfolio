import { Analytics } from "@vercel/analytics/next";
import Navbar from "./components/Navbar";
import Providers from "./providers";
import Footer from "./components/Footer";
import { StructuredData } from "./seo";
import "./globals.css";

export { metadata } from "./seo";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
