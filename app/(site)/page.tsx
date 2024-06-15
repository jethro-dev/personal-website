import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { ConnectBanner } from "@/components/connect-banner";
import { Experience } from "@/components/experience";
import { GridBackgroundDemo } from "@/components/grid-bg-demo";
import { Hero } from "@/components/hero";
import { LatestBlogPosts } from "@/components/latest-blog-posts";
import { ParallaxText } from "@/components/parallax-text";
import { Portfolio } from "@/components/portfolio";
import { PortfolioGrid } from "@/components/portfolio-grid";
import SkillsSection from "@/components/skills-section";
import { StickyScrollRevealDemo } from "@/components/sticky-scroll-reveal-demo";
import { TextRevealCardPreview } from "@/components/text-review-card-preview";
import { TracingBeamDemo } from "@/components/tracing-beam-demo";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export const revalidate = 60; // revalidate at most every minutes

export default function Home() {
  return (
    <main className="">
      <HeroParallax />
      <About />
      <SkillsSection />
      <Certifications />
      <Experience />
      <Portfolio />
      <ConnectBanner />
      <LatestBlogPosts />
    </main>
  );
}
