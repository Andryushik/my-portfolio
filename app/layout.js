import Navbar from "./components/Navbar";
import Providers from "./providers";
import Footer from "./components/Footer";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import "./globals.css";

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrei Popov",
    "jobTitle": "Full-Stack Web Developer",
    "url": "https://andrei-popov.me",
    "image": "https://andrei-popov.me/og-image.webp",
    "sameAs": [
      "https://github.com/Andryushik",
      "https://www.linkedin.com/in/andrei-popov-g/"
    ],
    "knowsAbout": [
      "Ruby on Rails",
      "JavaScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "TailwindCSS",
      "Full-Stack Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "'s-Hertogenbosch",
      "addressRegion": "North Brabant",
      "addressCountry": "NL"
    },
    "description": "Full-Stack Web Developer specializing in Ruby on Rails and React, based in Netherlands"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export const metadata = {
  // SEO
  title: "Andrei Popov | Ruby on Rails & React Developer | Netherlands",
  description: "Full-Stack Developer in Netherlands building web apps with Ruby on Rails & React. View projects, code samples. Available for opportunities.",

  metadataBase: new URL("https://andrei-popov.me"),
  alternates: {
    canonical: 'https://andrei-popov.me',
  },
  authors: [{ name: 'Andrei Popov' }],
  creator: 'Andrei Popov',

  // Open Graph
  openGraph: {
    title: "Andrei Popov | Web Developer Portfolio",
    description: "Ruby on Rails & React developer. Check out my projects and let's connect!",
    url: 'https://andrei-popov.me',
    siteName: 'Andrei Popov Portfolio',
    images: [
      {
        url: 'https://andrei-popov.me/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Andrei Popov - Full-Stack Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Andrei Popov | Developer Portfolio',
    description: 'Ruby on Rails & React developer. View my projects.',
    images: ['https://andrei-popov.me/og-image.webp'],
  },

  viewport: 'width=device-width, initial-scale=1',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
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
