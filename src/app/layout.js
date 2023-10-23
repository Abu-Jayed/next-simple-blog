import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechTales",
  description: "The future is in next blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <SessionProvider>
            <div className="container">
              <NavBar></NavBar>
              {children}
              <Footer></Footer>
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
