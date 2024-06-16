import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {};
type Item = {
  name: string;
  logo: string;
};

const languages = [
  {
    name: "JavaScript",
    logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "TypeScript",
    logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    name: "Python",
    logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    name: "Java",
    logo: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
  },
  {
    name: "C++",
    logo: "https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg",
  },
];

const frontends = [
  {
    name: "HTML",
    logo: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  },
  {
    name: "CSS",
    logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
  },
  {
    name: "React",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  {
    name: "TailwindCSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "ShadcnUI",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg", // Placeholder, replace with actual ShadcnUI logo if available
  },
];

const backends = [
  {
    name: "Django",
    logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  },
  {
    name: "Express.js",
    logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  },
];

const databases = [
  {
    name: "MySQL",
    logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "SQLite",
    logo: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "H2 Database",
    logo: "https://dbdb.io/media/logos/h2-logo.svg",
  },
  {
    name: "MongoDB",
    logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
];

const paas = [
  {
    name: "Vercel",
    logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },
  {
    name: "Heroku",
    logo: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
  },
  {
    name: "Railway",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Railway_Logo.svg/600px-Railway_Logo.svg.png?20231126064002",
  },
];

const baas = [
  {
    name: "Firebase",
    logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    name: "Supabase",
    logo: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  },
  {
    name: "AWS Amplify",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/aws-amplify.svg",
  },
];

const iaas = [
  {
    name: "AWS",
    logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    name: "GCP",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  },
];

const SkillsSection = (props: Props) => {
  return (
    <div
      id="skills"
      className="bg-background pt-60 pb-40 transition duration-300"
    >
      <div className="text-left md:text-center container max-w-5xl mx-auto">
        <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          My skills
        </TypographyH1>
        <TypographyP className="mt-4 lg:mt-6">
          Explore my expertise in Software Development.
        </TypographyP>
      </div>

      <div className="mt-20 container max-w-7xl w-full h-auto md:h-[600px] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-12 md:grid-rows-6 gap-4">
        <div className="md:col-span-7 md:row-span-3 md:col-start-1 md:row-start-1 order-1 md:order-none">
          <Box
            title={"Languages"}
            list={languages}
            extraStyles="bg-blue-900/[.05] hover:bg-blue-900/[.2] border-blue-900/20 hover:border-blue-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-2 md:grid-cols-5"
          />
        </div>
        <div className="md:col-span-5 md:row-span-2 md:col-start-8 md:row-start-1 order-2 md:order-none">
          <Box
            title={"Front-End"}
            list={frontends}
            extraStyles="bg-green-900/10 hover:bg-green-900/[.2] border-green-900/20 hover:border-green-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-2 md:grid-cols-4"
          />
        </div>
        <div className="md:col-span-5 md:row-span-2 md:col-start-8 md:row-start-3 order-3 md:order-none">
          <Box
            title={"Back-End"}
            list={backends}
            extraStyles="bg-green-900/[.05] hover:bg-green-900/[.2] border-green-900/20 hover:border-green-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-2 md:grid-cols-4"
          />
        </div>
        <div className="md:col-span-5 md:row-span-2 md:col-start-8 md:row-start-5 order-4 md:order-none">
          <Box
            title={"Databases"}
            list={databases}
            extraStyles="bg-green-900/[.05] hover:bg-green-900/[.2] border-green-900/20 hover:border-green-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-2 md:grid-cols-4"
          />
        </div>
        <div className="md:col-span-2 md:row-span-3 md:col-start-6 md:row-start-4 order-5 md:order-none">
          <Box
            title={"IaaS"}
            list={iaas}
            extraStyles="bg-red-900/[.05] hover:bg-red-900/[.2] border-red-900/20 hover:border-red-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-3 md:grid-cols-1"
          />
        </div>
        <div className="md:col-span-2 md:row-span-3 md:col-start-4 md:row-start-4 order-6 md:order-none">
          <Box
            title={"PaaS"}
            list={paas}
            extraStyles="bg-red-900/[.05] hover:bg-red-900/[.2] border-red-900/20 hover:border-red-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-3 md:grid-cols-1"
          />
        </div>
        <div className="md:col-span-2 md:row-span-3 md:col-start-2 md:row-start-4 order-7 md:order-none">
          <Box
            title={"BaaS"}
            list={baas}
            extraStyles="bg-red-900/[.05] hover:bg-red-900/[.2] border-red-900/20 hover:border-red-700/20 grid grid-rows-1 grid-cols-3 md:grid-rows-3 md:grid-cols-1"
          />
        </div>
      </div>
    </div>
  );
};

const Box = ({
  title,
  list,
  extraStyles,
}: {
  title: string;
  list: Item[];
  extraStyles?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full grid grid-cols-5 gap-x-4 gap-y-10 border p-8 pt-12 rounded-lg  transition duration-300 cursor-pointer group",
        extraStyles ? extraStyles : ""
      )}
    >
      <div className="absolute top-0 pt-1 left-2.5">
        <span className="text-xs text-neutral-300 font-light group-hover:text-white transition duration-300">
          {title}
        </span>
      </div>
      {list.map((item) => (
        <Item key={item.name} {...item} />
      ))}
    </div>
  );
};

const Item = ({ logo, name }: Item) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      {/* logo */}
      <Image src={logo} alt={name} height={30} width={30} />
      <h6 className="mt-2 text-xs font-light">{name}</h6>
    </div>
  );
};

export default SkillsSection;
