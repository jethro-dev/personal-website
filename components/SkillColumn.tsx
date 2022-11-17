import React from "react";
import { motion } from "framer-motion";

export type Item = {
  name: string;
  img: string;
};

type Props = {
  title: string;
  items: Item[];
};

const container = {
  hidden: { translateY: 100, opacity: 0 },
  show: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
    },
  },
};

const inner = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const SkillColumn = ({ title, items }: Props) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="flex-1"
    >
      <h3 className="text-2xl font-semibold ml-1 mb-4 text-neutral-200">
        {title}
      </h3>
      <div className=" bg-neutral-800 bg-opacity-50 full-glassify p-5 grid grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((item) => {
          return (
            <motion.div
              key={item.name}
              variants={inner}
              className="h-[150px] w-full flex flex-col items-center justify-center"
            >
              <img src={item.img} alt={item.name} className="mb-2" />
              <h4 className="font-thin text-base lg:text-sm text-neutral-300 opacity-90">
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
