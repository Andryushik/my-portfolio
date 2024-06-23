import Navbar from "./components/Navbar";
import Providers from "./providers";
import "./globals.css";
import Footer from "./components/Footer";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

export const metadata = {
  title: "Andrei Popov | Full-Stack Web Developer",
  description:
    "Hi, I'm Andrei Popov, a Full-Stack Web Developer specializing in JavaScript, Ruby, React, Next.js, Node.js, Ruby on Rails, and Alpine.js. Welcome to my portfolio where you can explore my projects and see my skills in action. Enjoy browsing and feel free to reach out for collaboration!",
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
