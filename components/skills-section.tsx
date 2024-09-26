'use client';
import React, { useState } from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SkillCategory } from './skill-category';

type Props = {};
type Item = {
  name: string;
  logo: string;
};

const frontends = [
  {
    name: 'JavaScript',
    logo: '/javascript.svg',
  },
  {
    name: 'TypeScript',
    logo: '/typescript.svg',
  },
  {
    name: 'React',
    logo: '/images/icons8-react.svg',
  },
  {
    name: 'Next.js',
    logo: '/nextjs-icon-dark-background.svg',
  },
  {
    name: 'Remix',
    logo: '/remix-letter-glowing.svg',
  },
  {
    name: 'TailwindCSS',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'HTML',
    logo: '/images/icons8-html.svg',
  },
  {
    name: 'CSS/SASS',
    logo: '/images/icons8-css.svg',
  },
  {
    name: 'shadcn-ui',
    logo: '/images/shadcn-icon.png',
  },
];

const backends = [
  {
    name: 'Node.js',
    logo: '/node-js.png',
  },
  {
    name: 'Express.js',
    logo: '/icons8-express-js.svg',
  },
  {
    name: 'Python',
    logo: '/images/icons8-python.svg',
  },
  {
    name: 'Django',
    logo: '/django-icon-svgrepo-com.svg',
  },
  {
    name: 'Java',
    logo: '/icons8-java.svg',
  },
  {
    name: 'REST APIs',
    logo: '/rest-api.png',
  },
  {
    name: 'GraphQL',
    logo: '/graphql-logo.svg',
  },
];
const orm = [
  {
    name: 'Prisma',
    logo: '/icons8-express-js.svg',
  },
  {
    name: 'Drizzle ORM',
    logo: '/node-js.svg',
  },
];

const databases = [
  {
    name: 'MySQL',
    logo: '/icons8-my-sql.svg',
  },
  {
    name: 'PostgreSQL',
    logo: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
  },
];

const paas = [
  {
    name: 'Vercel',
    logo: '/vercel-icon-light.svg',
  },
  {
    name: 'Netlify',
    logo: '/netlify-logo.svg',
  },
  {
    name: 'Heroku',
    logo: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
  },
];
const baas = [
  {
    name: 'Supabase',
    logo: '/vercel-icon-light.svg',
  },
  {
    name: 'Firebase',
    logo: '/netlify-logo.svg',
  },
];

const devOps = [
  {
    name: 'CI/CD',
    logo: '/ci-cd-icon.svg',
  },
  {
    name: 'Docker',
    logo: '/docker-mark-blue.svg',
  },
  {
    name: 'AWS',
    logo: '/icons8-aws.svg',
  },
  {
    name: 'Azure',
    logo: '/icons8-azure.svg',
  },
  {
    name: 'Vercel',
    logo: '/vercel-icon-light.svg',
  },
  {
    name: 'Netlify',
    logo: '/netlify-logo.svg',
  },
];

const tools = [
  {
    name: 'Git',
    logo: '/images/icons8-github.svg',
  },
  {
    name: 'Agile/Scrum',
    logo: '/images/icons8-agile.png',
  },
  {
    name: 'Webpack',
    logo: '/images/icons8-webpack.svg',
  },
  {
    name: 'Figma',
    logo: '/images/icons8-figma.svg',
  },
  {
    name: 'NPM',
    logo: '/images/icons8-npm.png',
  },
  {
    name: 'Yarn',
    logo: '/images/yarn-icon.svg',
  },
  {
    name: 'pnpm',
    logo: '/images/pnpm-icon.svg',
  },
];

const extra = [
  {
    name: 'C++',
    logo: '/icons8-c-plus-plus.svg',
  },
];

const content = [
  {
    title: 'Front-End Development',
    description:
      'Specializing in modern web development, expertise includes JavaScript, TypeScript, React, and Next.js for building high-performance applications. With Remix for full-stack solutions and TailwindCSS with CSS/SASS for creating sleek, responsive designs, modern and accessible user experiences are delivered.',
  },
  {
    title: 'Back-End Development',
    description:
      'Expertise in backend development includes building scalable systems with Node.js, Express.js, and Python. Experience with Django and Java ensures robust solutions, while REST APIs and GraphQL enable seamless data integration.',
  },
  {
    title: 'Databases',
    description:
      'Expertise in database management includes MySQL, PostgreSQL, and MongoDB for designing and implementing scalable, efficient data solutions tailored to meet the needs of modern applications.',
  },
  {
    title: 'Dev Ops',
    description:
      'Specializing in DevOps, expertise includes setting up CI/CD pipelines, containerizing applications with Docker, and utilizing cloud platforms like AWS and Azure. Deployments are optimized on Vercel and Netlify for efficient scaling and performance.',
  },
  {
    title: 'Development Tools & Workflow',
    description:
      'Proficient in essential development tools and methodologies including Git for version control, Agile/Scrum for project management, Jest for testing, Webpack for bundling, and Figma for design and collaboration, ensuring efficient and streamlined development workflows.',
  },
];

const SkillsSection = (props: Props) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleCategoryInView = (index: number) => {
    console.log('Category in view', index);
    setActiveCategoryIndex(index);
  };
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

      <div className="mt-20 container max-w-6xl flex gap-x-10 relative">
        <div className="flex-1 relative">
          <SkillCategory
            title="Front-End Development"
            items={frontends}
            onEnter={() => handleCategoryInView(0)}
          />
          <SkillCategory
            title="Back-End Development"
            items={backends}
            onEnter={() => handleCategoryInView(1)}
          />
          <SkillCategory
            title="Databases Development"
            items={databases}
            onEnter={() => handleCategoryInView(2)}
          />
          <SkillCategory
            title="Dev Ops"
            items={devOps}
            onEnter={() => handleCategoryInView(3)}
          />
          <SkillCategory
            title="Development Tools & Workflow"
            items={tools}
            onEnter={() => handleCategoryInView(4)}
          />
        </div>
        <div className="flex-1 h-full sticky top-[30%]">
          <h2 className="mt-20 text-2xl sm:text-3xl lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            {content[activeCategoryIndex].title}
          </h2>
          <p className="mt-2 text-muted-foreground font-light">
            {content[activeCategoryIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
