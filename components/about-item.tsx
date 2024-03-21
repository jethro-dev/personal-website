"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { TypographyH3 } from "./ui/typography-h3";
import { TypographyP } from "./ui/typography-p";

type Props = {};

export const AboutItem = ({ title, text }: { title: string; text: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      className="my-40 lg:my-80"
      style={{
        opacity: scrollYProgress,
        scale: scale,
      }}
    >
      <TypographyH3 className="text-4xl lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        {title}
      </TypographyH3>
      <TypographyP className="mt-2">{text}</TypographyP>
    </motion.div>
  );
};
