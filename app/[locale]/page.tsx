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
import { HorizontalScrollSection } from "@/components/horizontal-scroll-section";
import { getProjects } from "@/lib/content";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const projects = getProjects(locale);

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
        {/* <Portfolio /> */}
        <HorizontalScrollSection projects={projects} />
        <ConnectBanner />
        <LatestBlogPosts />
      </main>
    </>
  );
}
