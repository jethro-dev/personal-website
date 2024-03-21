import { cn } from "@/lib/utils";
import React from "react";
import { getExperienceSectionData } from "@/lib/sanity-utils";
import { TimelineItemCard } from "./timeline-item-card";

type Props = {
  className?: string;
};

export const Timeline = async ({ className }: Props) => {
  const { experience } = await getExperienceSectionData();

  return (
    <div className="container">
      <ol
        className={cn(
          className,
          "max-w-3xl mx-auto relative border-s border-gray-200 dark:border-gray-700 flex flex-col gap-10"
        )}
      >
        {experience.map((item, i) => (
          <TimelineItemCard key={i} {...item} />
        ))}
      </ol>
    </div>
  );
};
