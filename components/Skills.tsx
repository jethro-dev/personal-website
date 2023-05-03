import React, { useRef, useState } from "react";
import SkillColumn from "./SkillColumn";
import { Item } from "../components/SkillColumn";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

type Props = {};

const columns = [
  {
    title: "Language",
    span: false,
    items: [
      { name: "HTML", img: "/image/html5.svg" },
      { name: "CSS", img: "/image/css3.svg" },
      { name: "JavaScript", img: "/image/javascript.svg" },
      { name: "TypeScript", img: "/image/typescript.svg" },
      { name: "Python", img: "/image/python.svg" },
      { name: "Java", img: "/image/java.svg" },
      { name: "C#", img: "/image/csharp.svg" },
    ],
  },
  {
    title: "Framework / Library",
    span: true,
    items: [
      { name: "React", img: "/image/react.svg" },
      { name: "Redux", img: "/image/redux.svg" },
      { name: "NextJS", img: "/image/nextjs.svg" },
      { name: "TailwindCSS", img: "/image/tailwindcss.svg" },
      { name: "Styled Components", img: "/image/styled-components.svg" },
      { name: "NodeJS", img: "/image/nodejs.svg" },
      { name: "ExpressJS", img: "/image/express.svg" },
      { name: "Django", img: "/image/django.svg" },
      { name: "jQuery", img: "/image/jquery.svg" },
      { name: "Spring", img: "/image/springboot.svg" },
      { name: "MySQL", img: "/image/mysql.svg" },
      { name: "PostgreSQL", img: "/image/postgresql.svg" },
      { name: "MongoDB", img: "/image/mongodb.svg" },
      { name: "Firebase", img: "/image/firebase.svg" },
      { name: "GraphQL", img: "/image/graphql.svg" },
      { name: "RESTful APIs", img: "/image/restapi.svg" },
    ],
  },
];

const Skills = (props: Props) => {
  const [isSearchFound, setIsSearchFound] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchResultRef = useRef<HTMLParagraphElement>(null);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!searchRef || !searchRef.current || searchRef.current.value == "") {
      return;
    }

    let skillList: string[] = [];
    let targetStr = searchRef.current.value.toLowerCase().replaceAll(" ", "");

    for (let i = 0; i < columns.length; i++) {
      let currentColumn = columns[i];
      for (let j = 0; j < currentColumn.items.length; j++) {
        let name = currentColumn.items[j].name.toLowerCase();
        name = name.replaceAll(" ", "");
        skillList.push(name);
      }
    }

    let isFound = false;
    for (let i = 0; i < skillList.length; i++) {
      if (targetStr.includes(skillList[i])) {
        isFound = true;
      }
    }

    setIsSearchFound(isFound);
    searchResultRef.current?.classList.replace("opacity-0", "opacity-100");

    // setInterval(() => {
    //   searchResultRef.current?.classList.replace("opacity-100", "opacity-0");
    // }, 5000);
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div id="skill-section" className="bg-black">
      <div className="wrapper py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          {columns.map((column) => {
            return (
              <SkillColumn
                span={column.span}
                key={column.title}
                title={column.title}
                items={column.items}
              />
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 1 },
          }}
          className="text-center pt-20"
        >
          <h3 className="mb-4 text-lg font-light">
            Can&apos;t seem to find what you are looking for?
          </h3>
          <form className="flex gap-4 justify-center mb-4">
            <input
              ref={searchRef}
              type="text"
              placeholder="e.g. Java, React..."
            />
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="bg-green-700 hover:bg-green-600 transition-colors duration-200 px-3 rounded-lg"
            >
              <BiSearch />
            </button>
          </form>
          <p
            ref={searchResultRef}
            className="transition-all duration-500 opacity-0"
          >
            {isSearchFound
              ? "It is right in my toolbox 🧰! Why not contact me to dicuss further?"
              : "I don't have the skill you are looking for, but just at the moment. As a professional software engineer, I always love challenges and am eager to learn new skills!"}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
