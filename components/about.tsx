import { Download, Eye, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { TypographyH3 } from "./ui/typography-h3";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { getAboutSectionData } from "@/lib/sanity-utils";

type Props = {};

export const About = async (props: Props) => {
  const { title, tldr, paragraphs } = await getAboutSectionData();
  return (
    <div
      id="about"
      className="bg-background py-20 px-6 flex items-center justify-between transition duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <TypographyH1>{title}</TypographyH1>
        <TypographyP className="mt-2">
          Computer Science graduate with great fundamentals, and a passion for
          software development. High level experience in software engineering
          and development, producing quality work.
        </TypographyP>

        <div className="mt-10 border border-border rounded-md p-4 shadow-sm bg-primary/10">
          <h3 className="text-lg font-semibold">TLDR</h3>
          <ol className="mt-2 list-disc space-y-1 pl-6">
            {tldr.map((ss, i) => (
              <li key={i}>
                <TypographyP className="text-foreground">{ss}</TypographyP>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <div className="mt-2 flex items-center gap-2">
            <Button asChild>
              <Link
                href={"/jethro-cv-2024.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview CV
              </Link>
            </Button>

            <Button asChild>
              <Link
                href={"/jethro-cv-2024.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Link>
            </Button>

            <Button size={"icon"} asChild>
              <Link href={"https://github.com/jethro-dev"} target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>

            <Button size={"icon"} asChild>
              <Link
                href={"https://www.linkedin.com/in/galongau/"}
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {paragraphs.map((p, i) => (
            <div key={i}>
              <TypographyH3 className="mt-4">{p.title}</TypographyH3>
              <TypographyP className="mt-2">{p.text}</TypographyP>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
