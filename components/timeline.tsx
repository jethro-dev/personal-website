import { cn } from "@/lib/utils";
import { Experience, KEYWORDS } from "@/typings";
import React from "react";
import { Badge } from "./badge";
import { getExperienceSectionData } from "@/lib/actions";
import { format } from "date-fns";

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
    from: "Sept 2018",
    to: "Jun 2021",
    badges: [KEYWORDS.HTML, KEYWORDS.CSS, KEYWORDS.Java, KEYWORDS.JavaScript],
  },
  {
    title: "Internship",
    description: "Enhance company websites and provide better user experience.",
    company: "PR Asia",
    location: "Hong Kong",
    from: "Jun 2019",
    to: "Aug 2019",
    badges: [KEYWORDS.HTML, KEYWORDS.CSS, KEYWORDS.JavaScript],
  },
  {
    title: "Freelance Software Developer",
    description:
      "Engineer innovative e-commerce solutions, leveraging advanced web technologies to create seamless and user-centric web applications that optimize online shopping experiences and drive business growth.",
    company: "LATAVIVOS",
    location: "Brighton, UK",
    from: "Jun 2021",
    to: "Mar 2022",
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
    from: "Mar 2022",
    to: "Jun 2023",
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
    title: "Software Engineer",
    description:
      "Crafting robust full-stack web applications for startups, driving digital initiatives through innovative solutions that seamlessly blend front-end sophistication with powerful back-end functionalities.",
    company: "LIVR",
    location: "London, UK",
    from: "Jun 2023",
    to: "Present",
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

export const Timeline = async ({ className }: Props) => {
  const { experience } = await getExperienceSectionData();

  return (
    <ol
      className={cn(
        className,
        "max-w-3xl mx-auto relative border-s border-gray-200 dark:border-gray-700"
      )}
    >
      {experience.map((item, i) => (
        <TimelineItem key={i} {...item} />
      ))}
    </ol>
  );
};

const TimelineItem = ({
  title,
  description,
  organisation,
  startDate,
  endDate,
  is_present,
  keywords,
}: Experience) => {
  return (
    <li className="mb-10 last:mb-0 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {format(startDate, "MMM yyyy")} - {format(endDate, "MMM yyyy")}
      </time>
      <h3 className="text-lg font-semibold text-foreground">
        {organisation} - <span className="italic font-light">{title}</span>
      </h3>
      <p className="mt-4 text-sm font-normal text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {keywords.map((ss, i) => (
          <Badge key={i} text={ss} />
        ))}
      </div>
    </li>
  );
};
