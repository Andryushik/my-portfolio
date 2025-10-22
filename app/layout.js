import Navbar from "./components/Navbar";
import Providers from "./providers";
import Footer from "./components/Footer";
import { StructuredData } from "./seo";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import "./globals.css";

export { metadata } from "./seo";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
