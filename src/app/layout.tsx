import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Clyro | UI Component Library",
  description: "Devtoolskit UI Component Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#f4f4f4]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
