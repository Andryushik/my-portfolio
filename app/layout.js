import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "./components/Navbar";
import Providers from "./providers";
import Footer from "./components/Footer";
import { StructuredData } from "./seo";
import "./globals.css";

export { metadata } from "./seo";

const gaId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <StructuredData />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
