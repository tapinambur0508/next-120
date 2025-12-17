import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header/Header";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import TanstackProvider from "@/components/TanstackProvider/TanstackProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "101 Next.js",
  description: "Simple app to introduce Next.js functionality",
};

interface RootLayoutProps {
  children: React.ReactNode;
  preview: React.ReactNode;
}

export default function RootLayout({ children, preview }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
          <AuthProvider>
            <Header />

            <div
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "4fr 9fr",
            //   gap: "16px",
            // }}
            >
              {children}
              {preview}
            </div>
          </AuthProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
