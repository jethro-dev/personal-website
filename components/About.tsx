import Image from "next/image";
import React from "react";
import calculateAge from "../utils/calculateAge";
import { FiClipboard } from "react-icons/fi";
type Props = {};

const About = (props: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("galongau@gmail.com");
  };

  return (
    <div id="skill-section" className="bg-black">
      <div className="wrapper py-20 flex flex-col md:flex-row gap-8">
        {/* left */}
        <div className="image-container min-h-[600px] md:w-[50%] relative rounded-lg overflow-hidden">
          <Image
            src="/image/profile_picture.jpg"
            layout="fill"
            alt="Jethro Au"
            className="object-center object-cover"
            id="profile_picture"
          />
        </div>
        {/* right */}
        <div className="md:w-[50%] flex flex-col gap-5">
          <div className="rounded-md bg-neutral-800 bg-opacity-50 full-glassify p-5 relative">
            <p className="mb-2">
              <span className="font-semibold">Name: </span>
              <span className="font-thin">Jethro Au</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email: </span>
              <span className="font-thin relative" id="myEmail">
                galongau@gmail.com
                <button
                  className="rounded-sm absolute right-[-25px] top-[50%] translate-y-[-50%] text-violet-500 hover:scale-105 transition-all"
                  title="copy to clipboard"
                  onClick={() => handleCopy()}
                >
                  <FiClipboard size={20} />
                </button>
              </span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Location: </span>
              <span className="font-thin">London</span>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Age: </span>
              <span className="font-thin">
                {calculateAge(new Date(1999, 9, 6))}
              </span>
            </p>
            <p className="mb-4 lg:mb-0">
              <span className="font-semibold">Occupation: </span>
              <span className="font-thin">Software Engineer</span>
            </p>
            <button className="px-4 py-2 ring-2 ring-inset ring-violet-500 text-violet-500 rounded-md lg:absolute top-5 right-5 font-semibold hover:bg-violet-500 hover:text-black transition-all duration-500 ">
              Download CV
            </button>
          </div>
          <div className="ring-2 rounded-md flex-1 bg-neutral-800 bg-opacity-50 full-glassify p-5">
            <h1 className="text-xl font-semibold mb-2">What about me?</h1>
            <p className="font-thin mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              dolore dolorum repellendus dolores dolorem molestias sit explicabo
              placeat facilis consectetur?
            </p>
            <h1 className="text-xl font-semibold mb-2">
              Why do I love software development?
            </h1>
            <p className="font-thin mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              dolore dolorum repellendus dolores dolorem molestias sit explicabo
              placeat facilis consectetur?
            </p>
            <h1 className="text-xl font-semibold mb-2">
              What makes me a good software engineer?
            </h1>
            <p className="font-thin">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              dolore dolorum repellendus dolores dolorem molestias sit explicabo
              placeat facilis consectetur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
