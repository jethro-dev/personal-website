import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { Timeline } from "./timeline";

type Props = {};

export const Experience = (props: Props) => {
  return (
    <div
      id="experience"
      className="bg-background py-20 px-6 transition duration-300"
    >
      <div className="text-center max-w-4xl mx-auto">
        <TypographyH1>My Experience</TypographyH1>
        <TypographyP className="!mt-10">
          Embark on a journey through my diverse expertise, where technology
          meets innovation. From crafting immersive web applications to
          pioneering e-commerce solutions, my experience is a testament to a
          dynamic blend of creativity, precision, and a passion for driving
          digital success.
        </TypographyP>

        <span className="inline-block mt-6 text-xs font-light border border-primary text-primary px-2.5 py-1 rounded-full shadow-md">
          🏅 5+ Years of experience
        </span>
      </div>
      <Timeline className="mt-20" />
    </div>
  );
};
