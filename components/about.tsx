import { Download, Eye, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { TypographyH3 } from "./ui/typography-h3";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { getAboutSectionData } from "@/lib/sanity-utils";
import { TracingBeam } from "./ui/tracing-beam";
import { AboutMeCard } from "./about-me-card";
import { AboutItem } from "./about-item";

type Props = {};

export const About = async (props: Props) => {
  const { title, tldr, paragraphs } = await getAboutSectionData();
  return (
    <TracingBeam>
      <div
        id="about"
        className="container bg-background py-20 px-6 flex md:items-start justify-between transition duration-300 gap-10 lg:gap-20 relative flex-col items-center md:flex-row"
      >
        <div className="">
          <TypographyH1 className="text-4xl sm:text-7xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {title}
          </TypographyH1>
          <TypographyP className="mt-2">Lttile things about me</TypographyP>

          {/* <div className="mt-10">
            <div className="mt-2 flex items-center gap-2">
              <Button asChild>
                <Link
                  href={"/jethro-cv-2024.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Resume
                </Link>
              </Button>
            </div>
          </div> */}

          <div className="">
            {paragraphs.map((p, i) => (
              <AboutItem key={i} {...p} />
            ))}
          </div>
        </div>
        <div className="sticky top-[30%]">
          <AboutMeCard />
        </div>
      </div>
    </TracingBeam>
  );
};
