import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import getWindowDimensions from "../hooks/useWindowDimensions";
import { motion, AnimatePresence } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { sendContactForm } from "../utils/sendContactForm";
import scrollToById from "../utils/scrollToById";

type Props = {};

const initValues = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues };
const Contact = (props: Props) => {
  const { width } = getWindowDimensions();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [data, setData] = useState(initState);
  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFormClick = () => {
    setIsFormOpen((cur) => !cur);
    scrollToById("contact-form");
  };

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    const id = target.id;

    setData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [id]: target.value,
      },
    }));

    console.log(data);
  };

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    setIsTouched((prev) => ({ ...prev, [e.target.id]: true }));
    console.log(isTouched);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    await sendContactForm(data.values);

    setData(initState);
    setIsTouched({
      name: false,
      email: false,
      subject: false,
      message: false,
    });
    e.preventDefault();
  };

  return (
    <div id="contact-section">
      <div className="wrapper py-14 lg:py-20">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-5 lg:mb-10">
          Contact Me!
        </h1>
        <p className="text-sm md:text-base lg:text-xl font-thin mb-5 lg:mb-10">
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
              id="contact-form"
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
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full placeholder:text-neutral-500 ${
                          !data.values.name &&
                          isTouched.name &&
                          "ring-2 ring-inset ring-red-600"
                        }`}
                        placeholder="Peter"
                        value={data.values.name}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => onBlur(e)}
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="mb-1 block font-thin text-sm text-neutral-300 cursor-pointer"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full placeholder:text-neutral-500 ${
                          !data.values.email &&
                          isTouched.email &&
                          "ring-2 ring-inset ring-red-600"
                        }`}
                        placeholder="peter@gmail.com"
                        value={data.values.email}
                        onChange={(e) => handleChange(e)}
                        onBlur={(e) => onBlur(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mb-4">
                    <label
                      htmlFor="subject"
                      className="mb-1 block font-thin text-sm text-neutral-300 cursor-pointer"
                    >
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`w-full placeholder:text-neutral-500 ${
                        !data.values.subject &&
                        isTouched.subject &&
                        "ring-2 ring-inset ring-red-600"
                      }`}
                      placeholder="Here is a new opportunity..."
                      value={data.values.subject}
                      onChange={(e) => handleChange(e)}
                      onBlur={(e) => onBlur(e)}
                      required
                    />
                  </div>
                  <label
                    htmlFor="message"
                    className="mb-1 block font-thin text-sm text-neutral-300 cursor-pointer"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={10}
                    className={`mb-4 w-full placeholder:text-neutral-500 resize-none ${
                      !data.values.message &&
                      isTouched.message &&
                      "ring-2 ring-inset ring-red-600"
                    }`}
                    placeholder="This site is awesome! Here is a job opportunity..."
                    value={data.values.message}
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => onBlur(e)}
                    required
                  ></textarea>
                  {isTouched.name &&
                    isTouched.email &&
                    isTouched.subject &&
                    isTouched.message &&
                    (!data.values.name ||
                      !data.values.email ||
                      !data.values.subject ||
                      !data.values.message) && (
                      <p className="text-red-500 mb-4 font-thin text-sm">
                        All fields are required!
                      </p>
                    )}
                  <div className="flex flex-col gap-5 sm:flex-row items-start justify-between">
                    <ReCAPTCHA
                      sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                      onChange={() => setIsVerified(true)}
                      theme="dark"
                    />

                    <button
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                      className={`bg-violet-700 p-2 rounded-md transition-colors duration-500 font-thin w-20 sm:w-40 h-10 sm:h-12 text-sm ${
                        isVerified &&
                        data.values.name &&
                        data.values.email &&
                        data.values.subject &&
                        data.values.message
                          ? "cursor-pointor hover:bg-violet-800"
                          : "cursor-not-allowed"
                      }`}
                      disabled={
                        !isVerified ||
                        !data.values.name ||
                        !data.values.email ||
                        !data.values.subject ||
                        !data.values.message
                      }
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
