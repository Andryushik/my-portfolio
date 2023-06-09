import Navbar from "./components/Navbar";
import Providers from "./providers";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Andrei Popov | Web Developer",
  description:
    "My name is Andrei Popov. I am Full-stack Web Developer and this is my personal portfolio web site.", //TODO: change description and favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
