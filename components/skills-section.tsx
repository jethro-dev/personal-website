'use client';
import React, { useState } from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SkillCategory } from './skill-category';
import { useTranslations } from 'next-intl';

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
    logo: '/images/shadcn-ui.svg',
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
    logo: '/icons8-django.svg',
  },
  {
    name: 'Java',
    logo: '/images/icons8-java.svg',
  },
  {
    name: 'REST API',
    logo: '/rest-api.png',
  },
  {
    name: 'GraphQL',
    logo: '/graphql-logo.svg',
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
  {
    name: 'Firebase',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    name: 'DynamoDB',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-dynamodb.svg',
  },
  {
    name: 'MariaDB',
    logo: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg',
  },
  {
    name: 'Redis',
    logo: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg',
  },
  {
    name: 'ElasticSearch',
    logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
  },
  {
    name: 'SQLite',
    logo: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg',
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
    name: 'Kubernetes',
    logo: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
  },
  {
    name: 'Jenkins',
    logo: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
  },
  {
    name: 'GitHub Actions',
    logo: '/images/icons8-github.svg',
  },
  {
    name: 'GitLab CI/CD',
    logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg',
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

const SkillsSection = (props: Props) => {
  const t = useTranslations('skills');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleCategoryInView = (index: number) => {
    console.log('Category in view', index);
    setActiveCategoryIndex(index);
  };

  // Create content array using translations
  const content = [
    {
      title: t('categories.frontend.title'),
      description: t('categories.frontend.description'),
    },
    {
      title: t('categories.backend.title'),
      description: t('categories.backend.description'),
    },
    {
      title: t('categories.databases.title'),
      description: t('categories.databases.description'),
    },
    {
      title: t('categories.devops.title'),
      description: t('categories.devops.description'),
    },
    {
      title: t('categories.tools.title'),
      description: t('categories.tools.description'),
    },
  ];

  return (
    <div
      id="skills"
      className="bg-background pt-60 pb-40 transition duration-300"
    >
      <div className="text-left md:text-center container max-w-5xl mx-auto">
        <TypographyH1 className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          {t('title')}
        </TypographyH1>
        <TypographyP className="mt-4 lg:mt-6">
          {t('description')}
        </TypographyP>
      </div>

      <div className="mt-20 container max-w-8xl flex gap-x-10 relative">
        <div className="flex-1 relative">
          <SkillCategory
            title={t('categories.frontend.title')}
            items={frontends}
            onEnter={() => handleCategoryInView(0)}
          />
          <SkillCategory
            title={t('categories.backend.title')}
            items={backends}
            onEnter={() => handleCategoryInView(1)}
          />
          <SkillCategory
            title={t('categories.databases.title')}
            items={databases}
            onEnter={() => handleCategoryInView(2)}
          />
          <SkillCategory
            title={t('categories.devops.title')}
            items={devOps}
            onEnter={() => handleCategoryInView(3)}
          />
          <SkillCategory
            title={t('categories.tools.title')}
            items={tools}
            onEnter={() => handleCategoryInView(4)}
          />
        </div>
        <div className="flex-1 h-full sticky top-[30%]">
          <h3 className="font-bold mb-4 text-3xl">
            {content[activeCategoryIndex]?.title}
          </h3>
          <p className="dark:text-neutral-400">
            {content[activeCategoryIndex]?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;