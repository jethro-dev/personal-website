import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import Bullet from "./Bullet";

type Props = {
  name: string;
  desc: string;
  github_url: string;
  live_url: string;
  index: number;
  topics: string[];
  thumbnail: string;
};

const ProjectItem = ({
  name,
  desc,
  github_url,
  live_url,
  topics,
  thumbnail,
  index,
}: Props) => {
  //   const handleItemClick = (e: MouseEvent) => {
  //     const projectItemEl = document.querySelectorAll(".project-item");
  //     projectItemEl.forEach((el) => el.classList.remove("flex-2"));
  //     setIsActive((current) => !current);
  //   };

  return (
    <div className={`project-item text-black`}>
      {/* <Image
        src={thumbnail}
        alt={name}
        layout="fill"
        className="object-cover object-center brightness-75 z-0"
      /> */}
      {/* <div className="black-gradient"></div> */}
      <div className="grid grid-cols-12 h-full">
        {/* left */}

        <ProjectItemMain
          name={name}
          github_url={github_url}
          live_url={live_url}
          desc={desc}
          topics={topics}
          thumbnail={thumbnail}
          order={index % 2 == 0 ? 1 : 0}
        />
        {/* right */}
        <ProjectItemSide
          name={name}
          github_url={github_url}
          live_url={live_url}
          desc={desc}
          topics={topics}
          thumbnail={thumbnail}
          left={index % 2 == 0 ? true : false}
        />
      </div>
    </div>
  );
};

const ProjectItemMain = ({
  name,
  github_url,
  live_url,
  desc,
  topics,
  thumbnail,
  order,
}: {
  name: string;
  github_url: string;
  live_url: string;
  desc: string;
  topics: string[];
  thumbnail: string;
  order: number;
}) => {
  return (
    <div
      className={`relative col-span-8 hidden md:block`}
      style={{ order: order }}
    >
      <div className="black-gradient z-20 rounded-md overflow-hidden"></div>
      <Image
        src={thumbnail}
        alt={name}
        layout="fill"
        className="object-cover z-10 rounded-md overflow-hidden shadow-md"
      />
    </div>
  );
};

const ProjectItemSide = ({
  name,
  github_url,
  live_url,
  desc,
  topics,
  thumbnail,
  left,
}: {
  name: string;
  github_url: string;
  live_url: string;
  desc: string;
  topics: string[];
  thumbnail: string;
  left: boolean;
}) => {
  return (
    <div
      className={`relative col-span-12 md:col-span-4 px-2 md:px-3 lg:px-4 text-left ${
        left ? "md:text-left" : "md:text-right"
      }`}
    >
      <motion.h1 className="font-semibold text-4xl lg:text-5xl mb-4">
        #{name}
      </motion.h1>
      <div className="block md:hidden mb-4">
        <Image
          src={thumbnail}
          alt={name}
          width={1000}
          height={600}
          className={`object-cover object-center brightness-75 rounded-md`}
        />
      </div>
      <div className="flex gap-2 mb-4">
        <a
          href={github_url}
          target="_blank"
          rel="noreferrer"
          type="button"
          className="bg-neutral-900 ring-neutral-900 text-white hover:bg-white hover:ring-1 hover:text-black px-2.5 py-2.5 space-x-2 rounded-md text-center flex-1 transition-all duration-300 shadow-md"
        >
          <span>GitHub</span>
          <FaGithub size={28} className="inline" />
        </a>
        <a
          href={live_url}
          target="_blank"
          rel="noreferrer"
          type="button"
          className="bg-white ring-neutral-900 text-black hover:bg-neutral-900 ring-1 hover:text-white px-2.5 py-2.5 space-x-2 rounded-md text-center flex-1 transition-all duration-300 shadow-md"
        >
          <span>LiveSite</span>
          <MdOpenInBrowser size={28} className="inline" />
        </a>
      </div>

      <motion.p
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className={`text-sm font-light transition-all duration-300 w-[100%] mb-6`}
      >
        {desc}
      </motion.p>
      <div className="lg:absolute lg:bottom-0 lg:left-0 lg:mb-4 lg:ml-4">
        {topics.map((topic) => (
          <Bullet text={topic} />
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
