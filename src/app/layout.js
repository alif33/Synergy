import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/base/navbar";
import Footer from "./components/home/footer";
import Social from "./components/home/social";
import AuthProviders from "./providers/AuthProviders";
import UseScroll from "./hook/useScroll";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UseScroll>
        <AuthProviders>
          <body className={urbanist.className}>{children}</body>
        </AuthProviders>
      </UseScroll>
    </html>
  );
}
