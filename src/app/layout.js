import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/base/navbar";
import Footer from "./components/home/footer";
import Social from "./components/home/social";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        {/* <Navbar /> */}
        {children}
        {/* <Social />
        <Footer /> */}
      </body>
    </html>
  );
}
