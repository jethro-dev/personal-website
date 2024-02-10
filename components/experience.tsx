import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { Timeline } from "./timeline";
import { Button } from "./ui/button";
import { getExperienceSectionData } from "@/lib/sanity-utils";

type Props = {};

export const Experience = async (props: Props) => {
  const { title, description } = await getExperienceSectionData();
  return (
    <div
      id="experience"
      className="bg-background py-20 px-6 transition duration-300"
    >
      <div className="text-center max-w-4xl mx-auto">
        <TypographyH1>{title}</TypographyH1>
        <TypographyP className="!mt-10">{description}</TypographyP>

        <span className="inline-block mt-6 text-xs font-light border border-primary text-primary px-2.5 py-1 rounded-full shadow-md">
          🏅 5+ Years of experience
        </span>
      </div>

      <Timeline className="mt-20" />
    </div>
  );
};
