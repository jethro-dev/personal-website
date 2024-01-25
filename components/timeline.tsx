import { cn } from "@/lib/utils";
import { KEYWORDS } from "@/typings";
import React from "react";
import { Badge } from "./badge";

type Props = {
  className?: string;
};
type TimelineItem = {
  title: string;
  description: string;
  location: string;
  company: string;
  from: string;
  to: string;
  badges: KEYWORDS[];
};

const items: TimelineItem[] = [
  {
    title: "Bachelor of Science",
    description: "Enhance company websites and provide better user experience.",
    company: "Univeristy of Sussex",
    location: "East Sussex, UK",
    from: "September 2018",
    to: "June 2021",
    badges: [KEYWORDS.HTML, KEYWORDS.CSS, KEYWORDS.Java, KEYWORDS.JavaScript],
  },
  {
    title: "Internship",
    description: "Enhance company websites and provide better user experience.",
    company: "PR Asia",
    location: "Hong Kong",
    from: "June 2019",
    to: "August 2019",
    badges: [KEYWORDS.HTML, KEYWORDS.CSS, KEYWORDS.JavaScript],
  },
  {
    title: "Freelance Software Developer",
    description:
      "Engineer innovative e-commerce solutions, leveraging advanced web technologies to create seamless and user-centric web applications that optimize online shopping experiences and drive business growth.",
    company: "LATAVIVOS",
    location: "Brighton, UK",
    from: "December 2021",
    to: "March 2022",
    badges: [
      KEYWORDS.HTML,
      KEYWORDS.CSS,
      KEYWORDS.JavaScript,
      KEYWORDS.Shopify,
    ],
  },
  {
    title: "Junior Software Engineer",
    description:
      "Develop a financial planning and analysis platform for small and medium-size businesses, and their financial advisors.",
    company: "The Business Plan Shop",
    location: "London, UK",
    from: "March 2022",
    to: "January 2023",
    badges: [
      KEYWORDS.HTML,
      KEYWORDS.CSS,
      KEYWORDS.Java,
      KEYWORDS.JavaScript,
      KEYWORDS.Node,
      KEYWORDS.PostgreSQL,
    ],
  },
  {
    title: "Fullstack Software Engineer",
    description:
      "Crafting robust full-stack web applications for startups, driving digital initiatives through innovative solutions that seamlessly blend front-end sophistication with powerful back-end functionalities.",
    company: "LIVR",
    location: "London, UK",
    from: "July 2023",
    to: "now",
    badges: [
      KEYWORDS.HTML,
      KEYWORDS.CSS,
      KEYWORDS.JavaScript,
      KEYWORDS.TypeScript,
      KEYWORDS.React,
      KEYWORDS.Next,
      KEYWORDS.Node,
      KEYWORDS.Python,
      KEYWORDS.AWS,
    ],
  },
];

export const Timeline = ({ className }: Props) => {
  return (
    <ol
      className={cn(
        className,
        "max-w-3xl mx-auto relative border-s border-gray-200 dark:border-gray-700"
      )}
    >
      {items.map((item, i) => (
        <TimelineItem key={i} {...item} />
      ))}
    </ol>
  );
};

const TimelineItem = ({
  title,
  company,
  description,
  location,
  from,
  to,
  badges,
}: TimelineItem) => (
  <li className="mb-10 last:mb-0 ms-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {from} - {to}
    </time>
    <h3 className="text-lg font-semibold text-primary dark:text-white">
      {title}
    </h3>
    <p className="mb-4 text-sm font-normal text-muted-foreground">
      {description}
    </p>
    <div className="flex items-center gap-2 flex-wrap">
      {badges.map((badge, i) => (
        <Badge key={i} text={badge} />
      ))}
    </div>
  </li>
);
