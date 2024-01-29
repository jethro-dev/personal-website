"use client";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "./fonts";

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
      <body className={`${poppins.className} !bg-background`}>
        <ThemeProvider>
          <Navbar />
          <div vaul-drawer-wrapper="">{children}</div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
