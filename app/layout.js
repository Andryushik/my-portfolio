import Navbar from "./components/Navbar";
import Providers from "./providers";
import "./globals.css";
import Footer from "./components/Footer";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

export const metadata = {
  title: "Andrei Popov | Web Developer",
  description:
    "My name is Andrei Popov, and I am a Full-stack Web Developer. Welcome to my personal portfolio website, where I showcase my projects and skills. I have experience working with various frameworks, such as React, Next.js, and Node.js, to create dynamic and interactive web applications. Take a look at my portfolio to explore my projects. I hope you enjoy browsing through my work!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
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
