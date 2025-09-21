import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getPortfolioProjects } from '@/lib/content';
import { getLocale } from 'next-intl/server';

type Props = {};

export const PortfolioGrid = async (props: Props) => {
  const locale = await getLocale();
  const translatedProjects = getPortfolioProjects(locale);

  // Create a map for easy lookup of translations by project ID
  const translationsMap = new Map(translatedProjects.map(p => [p.id, p.description]));

  // Keep the original hardcoded structure but use translated descriptions
  const projects = [
    {
      title: 'JethroAu.com',
      description: translationsMap.get('jethroau-website') ||
        'A personal website built with Next.js 14 and TypeScript, by creating a dynamic platform for blogging and showcasing projects, resulting in a professional online presence and a valuable resource for sharing insights and connecting with the tech community.',
      github: 'https://github.com/jethro-dev/personal-website',
      demo: 'https://jethroau.com',
      image: '/jethroau-cover.png',
      size: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
      title: 'LIVR Studios',
      description: translationsMap.get('livr-studios') ||
        'Developed a dynamic marketing site by leveraging modern web technologies and frameworks, resulting in a 20% increase in online engagement and lead generation.',
      github: '',
      demo: 'https://www.livrstudios.com/',
      image: '/livr-studios-cover.png',
      size: 'col-span-1 md:col-span-1 row-span-1',
    },
    {
      title: 'SceneAI',
      description: translationsMap.get('sceneai') ||
        'An AI-powered tool that generates detailed scene descriptions for writers and creators, by utilizing third-party generative services and RESTful APIs, resulting in enhanced inspiration and a streamlined creative process for users.',
      github: 'https://github.com/jethro-dev/ai-environment-generator',
      demo: 'https://sceneai.vercel.app/',
      image: '/sceneai-cover.png',
      size: 'col-span-1 md:col-span-1 md:row-span-2',
    },
    {
      title: 'DVSA Driving Test Booking Automation',
      description: translationsMap.get('dvsa-booking') ||
        'Automate booking driving tests on the DVSA website, highly efficient solution that navigates the site, fills in details, and searches for available slots.',
      github: 'https://github.com/jethro-dev/dvsa-driving-test-booking-automation',
      demo: '',
      image: '/dvsa-cover.png',
      size: 'col-span-1 md:col-span-2 lg:col-span-1 row-span-1',
    },
    {
      title: 'StudyBud',
      description: translationsMap.get('studybud') ||
        "An innovative platform for finding study partners, by implementing messaging, group study sessions, and user matching algorithms, resulting in a collaborative environment that enhances students' learning experiences and fosters academic connections.",
      github: 'https://github.com/jethro-dev/studybud',
      demo: 'https://studybud-jethro.up.railway.app/',
      image: '/studybud-cover.png',
      size: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    },
    {
      title: 'StemFM',
      description: translationsMap.get('stemfm') ||
        'StemFM is a cutting-edge music streaming platform that uses AI for automatic stem splitting and intelligent mixing, offering listeners a completely new and immersive way to experience music.',
      github: '',
      demo: 'https://www.stemplayer.com/',
      image: '/stemfm-cover.png',
      size: 'col-span-1 md:col-span-2 row-span-1',
    },
    {
      title: 'Yee Studio',
      description: translationsMap.get('yee-studio') || 'My creative studio',
      github: 'https://github.com/jethro-dev/studio-landing-page',
      demo: 'https://studio-landing-page-six.vercel.app',
      image: '/yeestudio-cover.png',
      size: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1',
    },
  ];

  return (
    <div className="container max-w-8xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[250px] lg:auto-rows-[250px]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
  image: string;
  size: string;
};

const ProjectCard = ({
  title,
  description,
  github,
  demo,
  image,
  size,
}: ProjectCardProps) => {
  return (
    <div
      className={`relative group border border-white/20 rounded-md overflow-hidden shadow-lg cursor-pointer transition duration-300 ${size}`}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition duration-300 ease-in-out transform group-hover:scale-105 brightness-75 group-hover:brightness-[.3]"
        />
      </div>
      <div className="absolute bottom-0 w-full px-4 pb-4 transition-transform duration-500 ease-in-out transform translate-y-full group-hover:-translate-y-0">
        <h3 className="absolute bottom-full pb-2 font-medium text-lg text-neutral-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm font-light">
          {description}
        </p>
        <div className="flex space-x-4 mt-4">
          {github ? (
            <Link
              href={github}
              className="text-sm font-light text-neutral-300 hover:underline hover:text-white"
            >
              GitHub
            </Link>
          ) : (
            <p className="text-sm font-light text-neutral-300 hover:underline hover:text-white">
              Private Repo
            </p>
          )}
          {demo && (
            <Link
              href={demo}
              className="text-sm font-light text-neutral-300 hover:underline hover:text-white"
            >
              Live Site
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};