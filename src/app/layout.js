import { Inter } from "next/font/google";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

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
          <AuthProvider>
            <div className="container">
              <NavBar></NavBar>
              {children}
              <Footer></Footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
