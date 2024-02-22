"use client"
// import type { Metadata } from "next";
import "./globals.css";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    Aos.init()
    window.scrollTo(0, 0);
  }, []);
  return (
    <html lang="en">
      <body className="xl:bg-gray-50">{children}</body>
    </html>
  );
}
