import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  name: string;
  desc: string;
  thumbnail: string;
  github_url: string;
  live_url: string;
  index: number;
  isActive: boolean;
  setShowIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ProjectItem = ({
  name,
  desc,
  thumbnail,
  github_url,
  live_url,
  index,
  isActive,
  setShowIndex,
}: Props) => {
  //   const handleItemClick = (e: MouseEvent) => {
  //     const projectItemEl = document.querySelectorAll(".project-item");
  //     projectItemEl.forEach((el) => el.classList.remove("flex-2"));
  //     setIsActive((current) => !current);
  //   };

  return (
    <div
      tabIndex={0}
      onClick={() => setShowIndex(index)}
      className={`project-item ${isActive ? "md:flex-[3]" : "md:flex-[2]"}`}
    >
      <Image
        src={thumbnail}
        alt={name}
        layout="fill"
        className="object-cover object-center"
      />
      <div className="black-gradient"></div>
      <div className="w-full absolute bottom-0 left-0 p-4">
        <motion.h1 className="font-semibold text-xl">{name}</motion.h1>
        {isActive && (
          <motion.p
            initial={{ translateY: 50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            className={`text-sm font-normal transition-all duration-300 mt-2 w-[80%]`}
          >
            {desc}
          </motion.p>
        )}
      </div>
      {isActive && (
        <motion.div
          className="absolute bottom-4 right-4 flex items-center gap-2"
          initial={{ translateY: 50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href={github_url} target="_blank" rel="noreferrer">
            <FaGithub size={22} />
          </a>
          <a href={live_url} target="_blank" rel="noreferrer">
            <MdOpenInBrowser size={28} />
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectItem;
