import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../components";

type Props = {};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = (props: Props) => {
  return (
    <motion.ul
      variants={variants}
      className="px-10 space-y-10 absolute top-[100px] w-full"
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

const itemIds = [0, 1, 2, 3, 4];

export default Navigation;
