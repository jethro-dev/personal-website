import "../../globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "../../fonts";
import SmoothScrollingWrapper from "@/components/smooth-scrolling-wrapper";
import { Analytics } from "@vercel/analytics/react";

export default function SiteLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className={`${poppins.className} !bg-background`}>
      <ThemeProvider>
        <SmoothScrollingWrapper>
          <div vaul-drawer-wrapper="">
            {children}
            {modal}
          </div>
        </SmoothScrollingWrapper>
        <Footer />
        <Toaster />
      </ThemeProvider>
      <Analytics />
    </div>
  );
}