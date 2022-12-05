import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

type Props = {};

const data = [
  {
    name: "Ghost Lifestyle",
    desc: "Ghost Lifestyle is an full-stack e-commerce web application. Great design and animation to enhance UX/UI.",
    thumbnail: "/image/ghost-lifestyle.png",
    github_url: "https://github.com/jethro-dev/ghost-ecommerce",
    live_url: "https://ghost-lifestyle.netlify.app/",
  },
  {
    name: "Crypto Tracker",
    desc: "Crypto Tracker is a tracking application for crypto currency.",
    thumbnail: "/image/crypto-tracker.png",
    github_url: "https://github.com/jethro-dev/crypto-tracker",
    live_url: "https://cryptotrkr.netlify.app/",
  },
  {
    name: "J-Blog",
    desc: "J-Blog is a full-stack blogging application.",
    thumbnail: "/image/jblog.png",
    github_url: "https://github.com/jethro-dev/j-blog",
    live_url: "https://jdevblog.vercel.app/",
  },
];

const Projects = (props: Props) => {
  const [showIndex, setShowIndex] = useState(0);

  const headings = {
    hidden: { translateY: 100, opacity: 0 },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const heading = {
    hidden: { translateX: -100, opacity: 0 },
    show: {
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div id="project-section" className="bg-neutral-300">
      <div className="wrapper h-full pt-20 pb-40">
        <motion.div
          variants={headings}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-left relative mb-10"
        >
          <motion.h1
            variants={heading}
            className="text-6xl font-bold text-neutral-400 ml-[-20px] select-none"
          >
            PROJECTS
          </motion.h1>
          <motion.h1
            variants={heading}
            className="text-6xl font-bold z-10 relative mt-[-30px] select-none text-neutral-700 "
          >
            PROJECTS
          </motion.h1>
          <motion.h1
            variants={heading}
            className="text-6xl font-bold text-neutral-400 mt-[-30px] ml-[20px] mb-5 select-none"
          >
            PROJECTS
          </motion.h1>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center mb-10">
          {data.map((project, i) => {
            return (
              <ProjectItem
                key={i}
                index={i}
                isActive={showIndex == i ? true : false}
                setShowIndex={setShowIndex}
                {...project}
              />
            );
          })}
        </div>
        <a href=""></a>
        <h1 className="text-sm text-neutral-800 sm:text-base font-semibold">
          More projects can be found on my{" "}
          <a
            className="hover:underline underline-offset-2 text-violet-600"
            href="https://github.com/jethro-dev"
          >
            GitHub!
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Projects;
