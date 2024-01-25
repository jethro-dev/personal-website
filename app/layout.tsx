"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "jethroau.com",
  description:
    "Explore the intersection of technology and imagination as we embark on a journey to transform concepts into powerful, user-centric experiences. Let's build the future together – one line of code at a time.",
  keywords: ["jethro", "au", "jethroau", "jethroau.com", "personal", "website"],
  // openGraph: {
  //   title: "Jethro Au Personal Website",
  //   description:
  //     "Explore the intersection of technology and imagination as we embark on a journey to transform concepts into powerful, user-centric experiences. Let's build the future together – one line of code at a time.",
  //   url: "https://jethroau.com",
  //   siteName: "jethroau.com",
  //   images: [
  //     {
  //       url: "https://nextjs.org/og.png", // Must be an absolute URL
  //       width: 800,
  //       height: 600,
  //     },
  //     {
  //       url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
  //       width: 1800,
  //       height: 1600,
  //       alt: "My custom alt",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
