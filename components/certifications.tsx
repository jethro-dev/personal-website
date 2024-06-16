import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {};

const courses = [
  {
    title: "Introduction to Back-End Development",
    description:
      "Learn the fundamentals of back-end web development, including server-side programming and database integration.",
  },
  {
    title: "Programming in Python",
    description:
      "Master the basics of Python programming, covering syntax, data structures, and core concepts.",
  },
  {
    title: "Version Control",
    description:
      "Understand version control systems, with a focus on Git and GitHub for efficient collaboration and code management.",
  },
  {
    title: "Introduction to Databases for Back-End Development",
    description:
      "Explore key database concepts and techniques, including SQL queries and database design principles.",
  },
  {
    title: "Django Web Framework",
    description:
      "Build robust and scalable web applications using the Django web framework, covering models, views, and templates.",
  },
  {
    title: "APIs",
    description:
      "Learn to design, build, and consume APIs, focusing on RESTful principles and practical implementation.",
  },
  {
    title: "The Full Stack",
    description:
      "Gain a comprehensive understanding of both front-end and back-end development, integrating all parts of a web application.",
  },
  {
    title: "Back-End Developer Capstone",
    description:
      "Apply your back-end development skills in a comprehensive project, showcasing your ability to build complex systems.",
  },
  {
    title: "Coding Interview Preparation",
    description:
      "Prepare for coding interviews with practice questions, problem-solving strategies, and tips for success.",
  },
];

export const Certifications = (props: Props) => {
  return (
    <div className="container max-w-5xl">
      <div className="relative border border-border rounded-lg py-16 px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Meta Certified <br /> Back-End Developer
          </h2>
          <Image
            src={"/meta-icon.svg"}
            width={200}
            height={60}
            alt="Meta logo"
          />
        </div>
        <p className="text-muted-foreground flex items-center gap-2">
          Issue Date: 4 June, 2024{" "}
          <Link
            className="text-blue-900 hover:text-blue-800 underline transition duration-300"
            href="https://coursera.org/verify/professional-cert/2D5TYDSEUGVN"
          >
            Click to verify
          </Link>
        </p>
        <h3 className="mt-10 text-lg font-medium">Courses</h3>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
          {courses.map((course, index) => (
            <li key={index}>
              <h4 className="text-base font-medium">{course.title}</h4>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                {course.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
