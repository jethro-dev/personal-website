import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./badge";
import { KEYWORDS } from "@/typings";
import Link from "next/link";

type Props = {};

type Project = {
  title: string;
  link: string;
  src: string;
  description: string;
  keywords: string[];
};

const projects: Project[] = [
  {
    title: "Premium Design Landing Page",
    link: "https://jnft.vercel.app/",
    src: "/jnft-cover.webp",
    description:
      "Discover my NFT Landing Page: a captivating fusion of design and animations, offering a visual journey into the world of digital art. Explore the unique essence of each NFT collection through an engaging and seamless platform.",
    keywords: [
      KEYWORDS.JavaScript,
      KEYWORDS.React,
      KEYWORDS.Next,
      KEYWORDS.Animations,
    ],
  },
  {
    title: "AI Environmment Generator",
    link: "/",
    src: "/ai-environment-generator-cover.webp",
    description:
      "Discover my NFT Landing Page: a captivating fusion of design and animations, offering a visual journey into the world of digital art. Explore the unique essence of each NFT collection through an engaging and seamless platform.",
    keywords: [
      KEYWORDS.React,
      KEYWORDS.Next,
      KEYWORDS.Fullstack,
      KEYWORDS.APIs,
      KEYWORDS.StableDiffusion,
      KEYWORDS.AI,
    ],
  },
  {
    title: "Blogging Web App",
    link: "https://jdevblog.vercel.app/",
    src: "/jblog-cover.webp",
    description:
      "J-Blog is a full-stack blogging web application. It is built with React, Next.js, GraphQL, TailwindCSS, and more.",
    keywords: [
      KEYWORDS.TypeScript,
      KEYWORDS.React,
      KEYWORDS.Next,
      KEYWORDS.Fullstack,
      KEYWORDS.APIs,
    ],
  },
];

export const Portfolio = (props: Props) => {
  return (
    <div
      id="portfolio"
      className="px-10 py-40 flex items-center justify-center"
    >
      <div className="w-full">
        <div className="flex-1">
          <div className="text-center">
            <TypographyH1>My Work</TypographyH1>
            <TypographyP className="mt-2">
              Passionate software developer with a focus on crafting efficient
              and innovative solutions to real-world problems.
            </TypographyP>
          </div>

          <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row justify-between gap-4 flex-grow-0 flex-shrink-0">
            {projects.map((project, i) => (
              <Project key={i} {...project} />
              // <div className="bg-red-300 h-60 flex-1">s</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, link, src, description, keywords }: Project) => (
  <div className="w-full lg:w-1/3">
    <div className="aspect-video rounded-md relative overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill={true}
        className="object-center object-cover"
      />
    </div>

    <h3 className="mt-4 font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    <div className="mt-4 w-full flex items-center flex-wrap gap-2">
      {keywords?.map((keyword, i) => (
        <Badge key={1} text={keyword} />
      ))}
    </div>
    <Button className="mt-4" asChild>
      <Link href={link} target="_blank">
        Live Site
      </Link>
    </Button>
  </div>
);
