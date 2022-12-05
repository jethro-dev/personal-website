import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const experience = [
  {
    title: "Junior Software Engineer",
    company: "The Business Plan Shop",
    location: "London, UK",
    desc: "Help develop a financial planning and analysis platform for small and medium size businesses, and their financial advisors.",
    startDate: "Mar 2022",
    endDate: "Present",
    isWork: true,
  },
  {
    title: "Freelance Software Developer",
    company: "LATAVIVOS",
    location: "Brighton, UK",
    desc: "Help develop shopify e-commerce web application.",
    startDate: "Dec 2021",
    endDate: "Mar 2022",
    isWork: true,
  },
  {
    title: "Internship",
    company: "PR Asia",
    location: "Hong Kong",
    desc: "Enhance company websites and provide better user experience.",
    startDate: "Jun 2019",
    endDate: "Aug 2019",
    isWork: true,
  },
  {
    title: "Bachelor of Science",
    company: "Univeristy of Sussex",
    location: "East Sussex, UK",
    desc: "Key modules included: Data Structures & Algorithms, Software Engineering, Databases, Web 3D Applications",
    startDate: "Sept 2018",
    endDate: "Aug 2021",
    isWork: false,
  },
];

const timeline = {
  hidden: { translateY: 100, opacity: 0 },
  show: {
    translateY: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Experience = (props: Props) => {
  return (
    <div id="experience-section" className="relative">
      <div className="timeline-gradient"></div>
      <div className="wrapper py-20">
        Experience
        <motion.div
          variants={timeline}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <VerticalTimeline
            animate={true}
            lineColor="rgba(196, 196, 196, 0.74)"
            className="transition-all duration-500"
          >
            {experience.map((item, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(38 38 38 / 0.5)",
                    color: "#dfdfdf",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(8.1px)",
                    border: "1px solid rgba(196, 196, 196, 0.35)",
                  }}
                  icon={
                    <div className="w-full h-full grid place-items-center">
                      <Image
                        src={`/image/${
                          item.isWork ? "work" : "university"
                        }.svg`}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                  }
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(139, 92, 246)",
                  }}
                  date={item.startDate + ` - ` + item.endDate}
                  iconStyle={{
                    background: "rgb(38 38 38 / 0.9)",
                    color: "#dfdfdf",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(8.1px)",
                    border: "2px solid rgba(139, 92, 246,0.8)",
                  }}
                  // icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-lg text-violet-400">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-title font-normal text-violet-300">
                    {item.company}
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle font-light text-violet-300">
                    {item.location}
                  </h4>
                  <p className="!font-light !text-neutral-300">{item.desc}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
