import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../components";

type Props = {
  toggleOpen: any;
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggleOpen }: Props) => {
  return (
    <motion.ul
      variants={variants}
      className="px-10 space-y-10 absolute w-full top-[100px]"
    >
      {items.map((item, i) => (
        <MenuItem
          i={i}
          key={i}
          title={item.title}
          sectionId={item.sectionId}
          toggleOpen={toggleOpen}
        />
      ))}
    </motion.ul>
  );
};

const items = [
  { title: "About", sectionId: "about-section" },
  { title: "Skills", sectionId: "skill-section" },
  { title: "Experience", sectionId: "experience-section" },
  { title: "Projects", sectionId: "project-section" },
  { title: "Contact", sectionId: "contact-section" },
];

export default Navigation;
