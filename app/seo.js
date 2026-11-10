export const SITE_URL = "https://andrei-popov.me";

export const metadata = {
  // SEO
  title: "Andrei Popov | Ruby on Rails & React Developer | Netherlands",
  description: "Full-Stack Developer in the Netherlands building web apps with Ruby on Rails. See my projects and source code, or get in touch.",

  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Andrei Popov' }],
  creator: 'Andrei Popov',

  // Open Graph
  openGraph: {
    title: "Andrei Popov | Developer Portfolio",
    description: "Full-Stack Developer based in the Netherlands, working with Ruby on Rails, React and Next.js. See my projects and get in touch.",
    url: '/',
    siteName: 'Andrei Popov Portfolio',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 631,
        alt: 'Andrei Popov, Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Andrei Popov | Developer Portfolio',
    description: 'Ruby on Rails & React developer. View my projects.',
    images: ['/og-image.webp'],
  },
};

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrei Popov",
    "jobTitle": "Full-Stack Developer",
    "url": SITE_URL,
    "image": `${SITE_URL}/og-image.webp`,
    "sameAs": [
      "https://github.com/Andryushik",
      "https://www.linkedin.com/in/andrei-popov-g/"
    ],
    "knowsAbout": [
      "Ruby on Rails",
      "Ruby",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Full-Stack Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "'s-Hertogenbosch",
      "addressRegion": "North Brabant",
      "addressCountry": "NL"
    },
    "description": "Full-Stack Developer specializing in Ruby on Rails and React, based in the Netherlands"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
