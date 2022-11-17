import React from "react";
import useConfettiGradient from "../hooks/useConfettiGradient";
import useWindowDimensions from "../hooks/useWindowDimensions";
import StaggeredGrid from "./StaggeredGrid";
import { FaArrowDown } from "react-icons/fa";
type Props = {};

export const SECTION_HEIGHT = 800;

const About = (props: Props) => {
  const { ConfettiGradient } = useConfettiGradient(1.5);
  const { height, width } = useWindowDimensions();

  const handleClickScroll = () => {
    const element = document.getElementById("skill-section");
    window.scroll({
      top: element?.clientHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`relative h-[${SECTION_HEIGHT}px]`}
      style={{ height: height > SECTION_HEIGHT ? height : SECTION_HEIGHT }}
    >
      <ConfettiGradient />
      <StaggeredGrid
        height={height > SECTION_HEIGHT ? height : SECTION_HEIGHT}
        width={width}
      />
      <div className="px-6 lg:px-10 absolute z-10 h-full w-full pointer-events-none bg-gradient">
        <div className="wrapper h-full grid place-items-center">
          <div>
            <h1 className="text-7xl font-semibold mb-2">Hello, I am Jethro.</h1>
            <h2 className="text-3xl font-light mb-4">A Software Engineer</h2>
            <p className="text-xl font-light mb-20">
              High level experience in software engineering and development,
              producing quality work.
            </p>
            <div className="grid place-items-center">
              <h3 className="mb-3 text-neutral-300 opacity-90 font-medium">
                click to see more
              </h3>
              <button
                onClick={handleClickScroll}
                className="full-glassify font-semibold text-3xl p-4 rounded-full pointer-events-auto !border-2 hover:scale-105 transition-all duration-500"
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
