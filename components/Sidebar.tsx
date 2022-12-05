import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";
import useWindowDimensions from "../hooks/useWindowDimensions";

type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const { height } = useWindowDimensions();

  const sidebar = {
    open: () => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 355px 45px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className={`fixed top-0 right-0 bottom-0 z-50 w-[400px] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <motion.div
        className="absolute top-0 bottom-0 w-full bg-neutral-100 pointer-events-auto"
        variants={sidebar}
      />
      <Navigation toggleOpen={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export default Sidebar;
