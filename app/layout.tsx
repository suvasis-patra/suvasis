import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suvasis | Personal portfolio",
  description: "suvasis is a full stack engineer based on India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 sm:pt-36 pt-28 relative text-gray-950  dark:bg-gray-900 dark:text-gray-50`}
      >
        <div className="background_blur_1"></div>
        <div className="background_blur_2"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
