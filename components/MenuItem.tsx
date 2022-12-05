import React from "react";
import { motion } from "framer-motion";
import scrollToById from "../utils/scrollToById";

type Props = {
  i: number;
  sectionId: string;
  title: string;
  toggleOpen: any;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i, sectionId, title, toggleOpen }: Props) => {
  const style = { border: `2px solid ${colors[i]}` };
  const hanleClick = (sectionId: string) => {
    scrollToById(sectionId);
    toggleOpen();
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => hanleClick(sectionId)}
      className="list-none mb-5 flex items-center cursor-pointer"
    >
      <div className="icon-placeholder" style={style} />
      <div
        className="text-placeholder py-5 px-5 flex items-center"
        style={style}
      >
        <h1 className="text-neutral-800 font-semibold">{title}</h1>
      </div>
    </motion.li>
  );
};

export default MenuItem;
