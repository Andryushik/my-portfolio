export const metadata = {
  // SEO
  title: "Andrei Popov | Ruby on Rails & React Developer | Netherlands",
  description: "Full-Stack Developer in the Netherlands building web apps with Ruby on Rails. See my projects and source code, or get in touch.",

  metadataBase: new URL("https://andrei-popov.me"),
  alternates: {
    canonical: 'https://andrei-popov.me',
  },
  authors: [{ name: 'Andrei Popov' }],
  creator: 'Andrei Popov',

  // Open Graph
  openGraph: {
    title: "Andrei Popov | Developer Portfolio",
    description: "Full-Stack Developer based in the Netherlands, working with Ruby on Rails, React and Next.js. See my projects and get in touch.",
    url: 'https://andrei-popov.me',
    siteName: 'Andrei Popov Portfolio',
    images: [
      {
        url: 'https://andrei-popov.me/og-image.webp',
        width: 1200,
        height: 631,
        alt: 'Andrei Popov - Full-Stack Software Developer',
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

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrei Popov",
    "jobTitle": "Full-Stack Developer",
    "url": "https://andrei-popov.me",
    "image": "https://andrei-popov.me/og-image.webp",
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
    "description": "Full-Stack Software Developer specializing in Ruby on Rails and React, based in Netherlands"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
