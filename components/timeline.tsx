import { cn } from '@/lib/utils';
import React from 'react';
import { getExperienceSectionData } from '@/lib/sanity-utils';
import { TimelineItemCard } from './timeline-item-card';

type Props = {
  className?: string;
};

const experience = [
  {
    title: 'Bachelor of Science',
    description: [
      'Honing problem-solving prowess and advanced programming skills, underlining a commitment to excellence in the dynamic world of technology.',
      'Key modules include: Data Structures & Algorithms, Software Engineering, Database',
    ],
    organisation: 'University of Sussex',
    startDate: new Date('2018-09'),
    endDate: new Date('2021-06'),
    is_present: false,
    keywords: [
      'Java',
      'Computer Science',
      'Data Structures',
      'Algorithms',
      'Databases',
      'Software Engineering',
      'Web Development',
    ],
  },
  {
    title: 'Freelance Software Developer',
    description: [
      'Built Shopify eCommerce websites by customizing themes, integrating third-party apps, and ensuring a seamless user experience, resulting in a 40% increase in client sales and customer engagement.',
      'Applied digital marketing strategies by developing targeted campaigns, leveraging SEO techniques, and utilizing social media platforms, resulting in a 20% increase in traffic and higher conversion rates for clients.',
    ],
    organisation: 'JethroAu.com',
    startDate: new Date('2021-06'),
    endDate: new Date('2024-09'),
    is_present: true,
    keywords: [
      'Shopify',
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Coding Tutor',
    description: [
      'Provided one-on-one coding tutoring sessions, helping students grasp complex programming concepts, improve their coding skills, and successfully complete their projects, resulting in consistently positive feedback and improved student outcomes.',
      'Teach HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, and PostgreSQL. Provide clear, comprehensive instruction to help students master both foundational and advanced web technologies.',
    ],
    organisation: 'UpWork',
    startDate: new Date('2024-08'),
    endDate: new Date('2024-09'),
    is_present: true,
    keywords: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'ShadcnUI',
      'PostgresSQL',
    ],
  },
  {
    title: 'Junior Software Engineer',
    description: [
      'Revamped functionality across the business plan editor by updating and refactoring existing code, resulting in a 30% increase in user satisfaction and streamlined editing processes.',
      'Maintained legacy code by identifying and fixing bugs, implementing code enhancements, and ensuring compatibility with modern technologies.',
    ],
    organisation: 'The Business Plan Shop Ltd.',
    startDate: new Date('2022-03'),
    endDate: new Date('2023-05'),
    is_present: false,
    keywords: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Python',
      'AWS',
      'Docker',
    ],
  },
  {
    title: 'Software Engineer',
    description: [
      'Developed a dynamic marketing site by leveraging modern web technologies and frameworks, resulting in a 20% increase in online engagement and lead generation.',
      'Optimized application performance by conducting thorough code reviews, implementing caching strategies, and minimizing resource load, resulting in a 35% decrease in page load times and enhanced user experience.',
    ],
    organisation: 'LIVR',
    startDate: new Date('2023-05'),
    endDate: new Date('2024-03'),
    is_present: false,
    keywords: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Python',
      'AWS',
      'Docker',
    ],
  },
  {
    title: 'Frontend Engineer',
    description: [
      'Developed a sophisticated music streaming service by leveraging React, delivering a seamless and interactive user interface that supports complex functionalities, resulting in a 30% increase in load speed and with 300000+ visitors to the web app in private alpha.',
      'Collaborated with cross-functional teams including AI specialists, designers, and backend developers to align technical development with product goals, resulting in a 15% increase in feature release efficiency and a cohesive product development lifecycle.',
    ],
    organisation: 'STEM',
    startDate: new Date('2024-05'),
    endDate: new Date('2024-09'),
    is_present: true,
    keywords: [
      'React',
      'TypeScript',
      'Next.js',
      'Remix',
      'Tailwind CSS',
      'SCSS',
      'Azure',
      'AWS',
      'Web Audio API',
      'Apollo Client',
    ],
  },
];

export const Timeline = async ({ className }: Props) => {
  return (
    <div className="container">
      <ol
        className={cn(
          className,
          'max-w-3xl mx-auto relative border-s border-gray-200 dark:border-gray-700 flex flex-col gap-10',
        )}
      >
        {experience.map((item, i) => (
          <TimelineItemCard key={i} {...item} />
        ))}
      </ol>
    </div>
  );
};
