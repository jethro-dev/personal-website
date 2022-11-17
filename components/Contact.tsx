import React, { useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import getWindowDimensions from "../hooks/useWindowDimensions";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {};

const Contact = (props: Props) => {
  const { width } = getWindowDimensions();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleFormClick = () => {
    setIsFormOpen((cur) => !cur);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    if (!nameRef.current || !emailRef.current || !messageRef.current) return;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    alert(`name: ${name}, email: ${email}, message: ${message}`);
    console.log("submit");
    e.preventDefault();
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
            <motion.form
              initial={{ opacity: 0, translateX: 300 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: 300 }}
              transition={{ duration: 0.5 }}
              className="py-8 px-5 full-glassify bg-opacity-5 bg-white grid place-items-center w-full"
            >
              <div className="w-full max-w-[600px]">
                <div>
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="mb-1 block font-thin text-sm text-neutral-300 cursor-pointer"
                      >
                        Name:
                      </label>
                      <input
                        ref={nameRef}
                        id="name"
                        type="text"
                        className="w-full placeholder:text-neutral-500"
                        placeholder="Peter"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="mb-1 block font-thin text-sm text-neutral-300 cursor-pointer"
                      >
                        Email
                      </label>
                      <input
                        ref={emailRef}
                        id="email"
                        type="email"
                        className="w-full placeholder:text-neutral-500"
                        placeholder="peter@gmail.com"
                      />
                    </div>
                  </div>
                  <textarea
                    ref={messageRef}
                    rows={10}
                    className="resize-none mb-4 w-full placeholder:text-neutral-500"
                    placeholder="This site is awesome! Here is a job opportunity..."
                  ></textarea>
                  <div className="flex items-start justify-between">
                    <ReCAPTCHA
                      sitekey="6LdZLBUjAAAAAL8lD0xwfJF_nLCcpysXoIcRF0xS"
                      onChange={() => setIsVerified(true)}
                      theme="dark"
                    />

                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      className={`bg-violet-700 p-2 rounded-md transition-colors duration-500 font-thin w-20 sm:w-40 h-10 sm:h-12 text-sm ${
                        isVerified
                          ? "cursor-pointor hover:bg-violet-800"
                          : "cursor-not-allowed"
                      }`}
                      disabled={!isVerified}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
