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
  left_sided: boolean;
};

const ProjectItem = ({
  name,
  desc,
  github_url,
  live_url,
  topics,
  thumbnail,
  left_sided,
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
          order={left_sided ? "1" : "2"}
        />
        {/* right */}
        <ProjectItemSide
          name={name}
          github_url={github_url}
          live_url={live_url}
          desc={desc}
          topics={topics}
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
  order: string;
}) => {
  return (
    <div className={`relative col-span-8 order-${order}`}>
      <div className="black-gradient z-20"></div>
      <motion.h1 className="font-semibold text-4xl lg:text-8xl">
        {name}
      </motion.h1>
      <Image
        src={thumbnail}
        alt={name}
        layout="fill"
        className="object-cover z-10"
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
}: {
  name: string;
  github_url: string;
  live_url: string;
  desc: string;
  topics: string[];
}) => {
  return (
    <div className="relative col-span-4 p-8">
      <motion.h1 className="font-semibold text-3xl lg:text-5xl mb-4">
        # {name}
      </motion.h1>
      <div className="flex gap-2 mb-4">
        <a
          href={github_url}
          target="_blank"
          rel="noreferrer"
          type="button"
          className="bg-neutral-900 text-white px-2.5 py-2.5 space-x-2 rounded-md text-center flex-1"
        >
          <span>GitHub</span>
          <FaGithub size={28} className="inline" />
        </a>
        <a
          href={live_url}
          target="_blank"
          rel="noreferrer"
          type="button"
          className="bg-white px-2.5 py-2.5 space-x-2 rounded-md text-center ring-neutral-700 shadow-md ring-1 flex-1"
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
      <div className="absolute bottom-0 left-0 mb-4 ml-4">
        {topics.map((topic) => (
          <Bullet text={topic} />
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
