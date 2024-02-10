import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "../fonts";

export const metadata: Metadata = {
  title: { default: "JethroAu.com", template: `%s - JethroAu.com` },

  description:
    "Explore the intersection of technology and imagination as we embark on a journey to transform concepts into powerful, user-centric experiences. Let's build the future together – one line of code at a time.",
  keywords: ["jethro", "au", "jethroau", "jethroau.com", "personal", "website"],
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {},
  metadataBase: new URL("https://jethroau.com"),
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
