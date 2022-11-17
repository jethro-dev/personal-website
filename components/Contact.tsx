import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import getWindowDimensions from "../hooks/useWindowDimensions";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Contact = (props: Props) => {
  const { width } = getWindowDimensions();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormClick = () => {
    setIsFormOpen((cur) => !cur);
  };
  return (
    <div id="contact-section">
      <div className="wrapper py-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-5 lg:mb-10">
          Contact Me!
        </h1>
        <p className="text-lg lg:text-xl font-thin mb-5 lg:mb-10">
          Like what you are seeing, why not start a conversation by sending me a{" "}
          <b className="text-violet-500 font-bold">Email</b>, find me through{" "}
          <b className="text-violet-500 font-bold">GitHub</b> or{" "}
          <b className="text-violet-500 font-bold">Linkedin</b>, or fill in the{" "}
          <b className="text-violet-500 font-bold">Contact form</b> below?
        </p>
        <div className="flex gap-2 md:gap-4 mb-5 lg:mb-10">
          <a
            className="contact-item full-glassify opacity-70"
            href="mailto:galongau@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineEmail size={width < 768 ? 20 : 80} />
          </a>
          <a
            className="contact-item full-glassify opacity-70"
            href="https://github.com/jethro-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={width < 768 ? 20 : 80} />
          </a>
          <a
            className="contact-item full-glassify opacity-70"
            href="https://www.linkedin.com/in/galongau/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={width < 768 ? 20 : 80} />
          </a>
          <button
            onClick={handleFormClick}
            className={`contact-item full-glassify opacity-70 ${
              isFormOpen ? "bg-opacity-20" : ""
            }`}
          >
            <FaRegCommentAlt size={width < 768 ? 20 : 80} />
          </button>
        </div>
        <AnimatePresence>
          {/* contact form */}
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, translateX: 300 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 300 }}
              transition={{ duration: 0.5 }}
              className="w-full py-16 px-5 full-glassify bg-opacity-5 bg-white grid place-items-center"
            >
              <div className="w-full max-w-[600px]">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex flex-col w-[40%]">
                      <label htmlFor="" className="mb-2">
                        Name:
                      </label>
                      <input type="text" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="" className="mb-2">
                        Email
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <textarea
                    name=""
                    id=""
                    rows={10}
                    className="w-full resize-none mb-4"
                  ></textarea>
                  <button className="bg-violet-700 hover:bg-violet-800 w-full p-2 rounded-md transition-colors duration-500 font-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
