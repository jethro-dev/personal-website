import { About } from "@/components/about";
import { ConnectBanner } from "@/components/connect-banner";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { LatestBlogPosts } from "@/components/latest-blog-posts";
import { ParallaxText } from "@/components/parallax-text";
import { Portfolio } from "@/components/portfolio";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <ConnectBanner />
      <LatestBlogPosts />
    </main>
  );
}
