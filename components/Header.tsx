import React, { useState, useEffect, useCallback } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaRegCommentAlt } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { SECTION_HEIGHT as ABOVE_SECTION_HEIGHT } from "../components/About";
import scrollToById from "../utils/scrollToById";
type Props = {};

const Header = (props: Props) => {
  const [show, setShow] = useState(true);
  const [isOverGlassifyLimit, setIsOverGlassifyLimit] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useWindowDimensions();
  const HEADER_STAY_LIMIT = 200;

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY < HEADER_STAY_LIMIT) {
        setShow(true);
      } else {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false);
        } else {
          // if scroll up show the navbar
          setShow(true);
        }
      }

      if (window.scrollY > ABOVE_SECTION_HEIGHT) {
        setIsOverGlassifyLimit(true);
      } else {
        setIsOverGlassifyLimit(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY, handleScroll]);
  return (
    <header
      className={`${!show ? "-translate-y-full" : ""} ${
        isOverGlassifyLimit ? "glassify" : "mini-glassify"
      }`}
    >
      <div className="wrapper h-full w-full flex justify-between items-center">
        {/* left div*/}
        <div className="flex items-end gap-6 md:gap-8 lg:gap-10">
          {/* logo */}
          <h1 className="h-full text-5xl font-semibold transition duration-300 hover:text-neutral-800/50">
            <button onClick={() => scrollToById("about-section")}>
              Jethro
            </button>
          </h1>
          <nav className=" hidden md:block">
            <ul className="flex items-center gap-2 md:gap-4 lg:gap-6 h-full">
              {/* about*/}
              <li className="header-link">
                <button onClick={() => scrollToById("about-section")}>
                  About
                </button>
              </li>
              {/* skills */}
              <li className="header-link">
                <button onClick={() => scrollToById("skill-section")}>
                  Skills
                </button>
              </li>
              {/* experience*/}
              <li className="header-link">
                <button onClick={() => scrollToById("experience-section")}>
                  Experience
                </button>
              </li>
              {/* portfolio*/}
              <li className="header-link">
                <button onClick={() => scrollToById("project-section")}>
                  Projects
                </button>
              </li>
              {/* contact*/}
              <li className="header-link">
                <button onClick={() => scrollToById("contact-section")}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* right div*/}
        <div className="flex">
          <nav className="hidden lg:block">
            <ul className="flex items-end gap-4">
              {/* linkedin */}
              <li className="header-link">
                <a
                  href="https://www.linkedin.com/in/galongau/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
              </li>
              {/* github */}
              <li className="header-link">
                <a href="https://github.com/jethro-dev">
                  <FaGithub size={28} />
                </a>
              </li>
              {/* Comment*/}
              <li className="header-link">
                <a href="https://github.com/jethro-dev">
                  <FaRegCommentAlt size={28} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
