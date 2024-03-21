"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Experience, Project } from "@/typings";
import { urlFor } from "@/lib/sanity";
import { Badge } from "./badge";
import { Eye, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button as MovingBorderButton } from "./ui/moving-border";
import { Button } from "./ui/button";
import { format } from "date-fns";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const TimelineItemCard = ({
  title,
  description,
  organisation,
  startDate,
  endDate,
  is_present,
  keywords,
}: Experience) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.li
      ref={ref}
      className="bg-gray-50 relative group/card dark:shadow-transparent dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black ms-4 border border-border rounded-lg p-6 cursor-pointer transition-shadow"
      style={{ opacity: scrollYProgress }}
    >
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[23.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {format(startDate, "MMM yyyy")} - {format(endDate, "MMM yyyy")}
      </time>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-foreground italic font-light">
        {organisation}
      </p>
      <p className="mt-4 text-sm font-normal text-muted-foreground">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {keywords.map((ss, i) => (
          <Badge key={i} text={ss} />
        ))}
      </div>
    </motion.li>
  );
};
