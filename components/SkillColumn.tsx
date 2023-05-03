import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type Item = {
  name: string;
  img: string;
};

type Props = {
  title: string;
  items: Item[];
  span: boolean;
};

const container = {
  hidden: { translateY: 100, opacity: 0 },
  show: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const inner = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const SkillColumn = ({ title, items, span }: Props) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className={`col-span-12 ${span ? "lg:col-span-7" : "lg:col-span-5"}`}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold ml-1 mb-4 text-neutral-200">
        {title}
      </h3>
      <div
        className={`bg-neutral-800 bg-opacity-50 full-glassify p-5 grid gap-5 ${
          span
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            : "grid-cols-2 sm:grid-cols-3 md:grid-cols-3"
        }`}
      >
        {items.map((item) => {
          return (
            <motion.div
              key={item.name}
              variants={inner}
              className="h-[150px] w-full flex flex-col items-center justify-center"
            >
              <Image width={60} height={60} src={item.img} alt={item.name} />
              <h4 className="mt-2 font-light text-base lg:text-sm text-neutral-300 opacity-90 text-center">
                {item.name}
              </h4>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillColumn;
