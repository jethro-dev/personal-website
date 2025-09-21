import { ConnectBanner } from "@/components/connect-banner";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ScrollNavbarWrapper } from "@/components/scroll-navbar-wrapper";
import { About } from "@/components/about";
import SkillsSection from "@/components/skills-section";
import { Certifications } from "@/components/certifications";
import { Experience } from "@/components/experience";
import { Portfolio } from "@/components/portfolio";
import { LatestBlogPosts } from "@/components/latest-blog-posts";
import { Qualities } from "@/components/qualities";

export default function Home() {
  return (
    <>
      {/* Sticky Navigation */}
      <ScrollNavbarWrapper />

      {/* Main Content */}
      <main className="">
        <HeroParallax />

        <Qualities />
        <About />
        <SkillsSection />
        <Certifications />
        <Experience />
        <Portfolio />
        <ConnectBanner />
        <LatestBlogPosts />
      </main>
    </>
  );
}
