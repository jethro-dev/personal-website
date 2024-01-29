import { KEYWORDS, Project } from "@/typings";

export const projects: Project[] = [
  {
    title: "AI Environmment Generator",
    link: "/",
    src: "/ai-environment-generator-cover.webp",
    description:
      "Transform ideas into stunning 3D panoramas effortlessly with the AI Environment Generator. By interpreting prompts, this project crafts dynamic and realistic scenes, making creativity accessible to everyone.",
    keywords: [
      KEYWORDS.React,
      KEYWORDS.Next,
      KEYWORDS.Fullstack,
      KEYWORDS.APIs,
      KEYWORDS.StableDiffusion,
      KEYWORDS.AI,
    ],
    slug: "ai-environment-generator",
    is_private: true,
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
    slug: "j-blog",
    is_private: false,
  },
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
    slug: "jnft-landing-page",
    is_private: false,
  },
];
