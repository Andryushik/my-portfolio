import Nav from "./components/Nav";
import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Andrei Popov Portfolio",
  description:
    "My name is Andrei Popov. I am web developer and this is my personal portfolio web site.", //TODO: change description and favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-10 md:px-20 lg:px-40">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
