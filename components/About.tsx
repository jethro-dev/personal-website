import Image from "next/image";
import React from "react";
import calculateAge from "../utils/calculateAge";
import { FiClipboard } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("galongau@gmail.com");
  };

  const container = {
    hidden: { translateY: 200, opacity: 0 },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div id="about-section" className="bg-black">
      <motion.div
        className="wrapper py-20 flex flex-col md:flex-row gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
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
              <span className="font-medium">Name: </span>
              <span className="font-light text-neutral-300">Jethro Au</span>
            </p>
            <p className="mb-2">
              <span className="font-medium">Email: </span>
              <span
                className="font-light relative text-neutral-300"
                id="myEmail"
              >
                galongau@gmail.com
                <button
                  className="rounded-sm absolute right-[-25px] top-[50%] translate-y-[-50%] text-violet-500 hover:text-violet-600 transition-all"
                  title="copy to clipboard"
                  onClick={() => handleCopy()}
                >
                  <FiClipboard size={20} />
                </button>
              </span>
            </p>
            <p className="mb-2">
              <span className="font-medium">Location: </span>
              <span className="font-light text-neutral-300">London</span>
            </p>
            <p className="mb-2">
              <span className="font-medium">Age: </span>
              <span className="font-light text-neutral-300">
                {calculateAge(new Date(1999, 9, 6))}
              </span>
            </p>
            <p className="mb-4 lg:mb-0">
              <span className="font-medium">Occupation: </span>
              <span className="font-light text-neutral-300">
                Software Engineer
              </span>
            </p>
            <a
              className="px-4 py-2 ring-2 ring-inset ring-violet-500 text-violet-500 rounded-md lg:absolute top-5 right-5 font-semibold hover:bg-violet-500 hover:text-black transition-all duration-500 "
              href="jethro_cv.pdf"
              download
            >
              Download CV
            </a>
            <div className="absolute bottom-5 right-5">
              <ul className="flex items-center gap-4 text-violet-500 ">
                {/* linkedin */}
                <li>
                  <a
                    href="https://www.linkedin.com/in/galongau/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-violet-600 transition-all duration-500"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </li>
                {/* github */}
                <li>
                  <a
                    href="https://github.com/jethro-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-violet-600 transition-all duration-500"
                  >
                    <FaGithub size={28} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-md flex-1 bg-neutral-800 bg-opacity-50 full-glassify p-5">
            <h1 className="text-xl font-medium mb-2">What about me?</h1>
            <p className="font-light mb-5 text-neutral-300">
              A passionate Computer Science graduate chasing his dreams.
              Originated in Hong Kong, currently living in the capital of the UK
              — London. Giving me the ability to read and write fluently in two
              of the most spoken languages in the world, English, and Chinese.
            </p>
            <h1 className="text-xl font-medium mb-2">
              Why do I love software development so much?
            </h1>
            <p className="font-light mb-5 text-neutral-300">
              There&apos;s nothing more satisfying than solving a problem
              that&apos;s been around for a while and nobody else knows how to
              solve. As a software developer, I constantly provide solutions for
              users&apos; problems. I can be working on the occasional quick fix
              as well as more complex strategic solutions.
            </p>
            <h1 className="text-xl font-medium mb-2">
              Then, what makes me a good software engineer?
            </h1>
            <p className="font-light text-neutral-300">
              Great fundamentals built up from university. I am always curious
              and love to stay updated to the latest technology. Also, I love
              challenges and I don&apos;t give up. With the advantages of
              bilingual, I am able to connect and collaborate with developers
              around the world.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
