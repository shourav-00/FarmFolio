// src/app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import SessionProvider from "./Components/SessionProvider";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FarmFolio - Agriculture Marketplace",
  description: "Connect with local farmers and get fresh produce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <SessionProvider>
          <Navbar/>
          <main className="flex-1 ">
            <div className="max-w-7xl mx-auto">
                   {children}
                    <Toaster position="top-right" />
            </div>
         
          </main>
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}