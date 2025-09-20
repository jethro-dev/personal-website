import "../../globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "../../fonts";
import SmoothScrollingWrapper from "@/components/smooth-scrolling-wrapper";
import { Analytics } from "@vercel/analytics/react";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.className} !bg-background`}>
      <ThemeProvider>
        <Navbar />
        <SmoothScrollingWrapper>
          <div vaul-drawer-wrapper="">{children}</div>
        </SmoothScrollingWrapper>
        <Footer />
        <Toaster />
      </ThemeProvider>
      <Analytics />
    </div>
  );
}