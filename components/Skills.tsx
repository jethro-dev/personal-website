import React from "react";
import SkillColumn from "./SkillColumn";
import { Item } from "../components/SkillColumn";

type Props = {};

const columns = [
  {
    title: "Language",
    items: [
      { name: "HTML", img: "/image/html5.svg" },
      { name: "CSS", img: "/image/css3.svg" },
      { name: "JavaScript", img: "/image/javascript.svg" },
      { name: "Java", img: "/image/java.svg" },
      { name: "C#", img: "/image/csharp.svg" },
      { name: "Python", img: "/image/python.svg" },
      { name: "XML", img: "/image/xml.svg" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "ReactJS", img: "/image/react.svg" },
      { name: "Redux", img: "/image/redux.svg" },
      { name: "NextJS", img: "/image/nextjs.svg" },
      { name: "SASS/SCSS", img: "/image/sass.svg" },
      { name: "TailwindCSS", img: "/image/tailwindcss.svg" },
      { name: "jQuery", img: "/image/jquery.svg" },
      { name: "GWT", img: "/image/html5.svg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "ExpressJS", img: "/image/express.svg" },
      { name: "Spring Boot", img: "/image/springboot.svg" },
      { name: "NodeJS", img: "/image/nodejs.svg" },
      { name: "MySQL", img: "/image/mysql.svg" },
      { name: "PostgreSQL", img: "/image/postgresql.svg" },
      { name: "MongoDB", img: "/image/mongodb.svg" },
      { name: "Firebase", img: "/image/firebase.svg" },
      { name: "GraphQL", img: "/image/graphql.svg" },
    ],
  },
];

const Skills = (props: Props) => {
  return (
    <div id="skill-section" className="bg-black">
      <div className="wrapper py-20 pb-40">
        <div className="flex flex-col lg:flex-row gap-8">
          {columns.map((column) => {
            return <SkillColumn title={column.title} items={column.items} />;
          })}
        </div>
        {/* language */}
        {/* frontend */}
        {/* backend*/}
        {/* database*/}
      </div>
    </div>
  );
};

export default Skills;
