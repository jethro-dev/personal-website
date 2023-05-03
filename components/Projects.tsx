import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

type Props = {};

const data = [
  {
    name: "Study Bud",
    desc: "Study Bud is a full-stack social media application development in Django's Model-View-Template (MVT) architecture. Built with Python, Django, PostgreSQL. Secure user login and authentication. Start the chat by creating a room and choose a topic!",
    thumbnail: "/image/studybud.png",
    github_url: "https://github.com/jethro-dev/studybud",
    live_url: "https://studybud-jethro.up.railway.app/",
    topics: [
      "Python",
      "Django",
      "PostgreSQL",
      "Authentication",
      "MVT",
      "Fullstack",
      "Social Media",
      "Forum",
    ],
  },
  {
    name: "Urban Home",
    desc: "Urban Home is an full-stack e-commerce application. Built Next.j, Prisma, NextAuth, Redux, Stripe, and more. Data are stored in Supabase. Fully functional e-commerce application with great UI/UX.",
    thumbnail: "/image/urban-home.png",
    github_url: "https://github.com/jethro-dev/urban-home",
    live_url: "https://urban-home.vercel.app/",
    topics: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Redux",
      "Stripe",
    ],
  },
  {
    name: "Ghost Lifestyle",
    desc: "Ghost Lifestyle is an full-stack e-commerce application. Build with React for front-end,  and Express.js for back-end. Data are stored in MongoDB. Great design and animation to enhance UX/UI.",
    thumbnail: "/image/ghost-lifestyle.png",
    github_url: "https://github.com/jethro-dev/ghost-ecommerce-client",
    live_url: "https://ghost-lifestyle.vercel.app/",
    topics: [
      "React",
      "Express.js",
      "MongoDB",
      "Animation",
      "UI/UX",
      "Fullstack",
    ],
  },
  {
    name: "J-Blog",
    desc: "J-Blog is a full-stack blogging application. This is built with Next.js, TailwindCSS, GraphQL and more.",
    thumbnail: "/image/jblog.png",
    github_url: "https://github.com/jethro-dev/j-blog",
    live_url: "https://jdevblog.vercel.app/",
    topics: [
      "JavaScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "GraphQL",
      "Fullstack",
    ],
  },
  {
    name: "Crypto Tracker",
    desc: "Crypto Tracker is a tracking application for crypto currency. Built with React and fetching data from CoinGecko API.",
    thumbnail: "/image/crypto-tracker.png",
    github_url: "https://github.com/jethro-dev/crypto-tracker",
    live_url: "https://cryptotrkr.netlify.app/",
    topics: ["JavaScript", "React", "RESTful APIs", "Data Fetching"],
  },
];

const Projects = (props: Props) => {
  return (
    <div id="project-section" className="bg-white">
      <div className="max-w-8xl mx-auto h-full pt-20 px-6 md:px-12 lg:px-20">
        <Heading />
        <div className="space-y-10 lg:space-y-20 pb-20">
          {data.map((project, i) => {
            return <ProjectItem key={i} index={i} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Heading = () => {
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
  );
};

export default Projects;
