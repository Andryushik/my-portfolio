import Navbar from "./components/Navbar";
import Providers from "./providers";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Andrei Popov",
  description:
    "My name is Andrei Popov. I am web developer and this is my personal portfolio web site.", //TODO: change description and favicon
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
