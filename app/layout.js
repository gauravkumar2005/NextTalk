import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/navbar/page";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
