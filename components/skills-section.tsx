import React from 'react';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
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
    name: 'CSS/SASS',
    logo: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg',
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
    logo: '/python.svg',
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
    logo: '/icons8-aws.svg',
  },
  {
    name: 'Agile/Scrum',
    logo: '/icons8-azure.svg',
  },
  {
    name: 'Jest',
    logo: '/icons8-azure.svg',
  },
  {
    name: 'Webpack',
    logo: '/icons8-azure.svg',
  },
  {
    name: 'Figma',
    logo: '/icons8-azure.svg',
  },
];

const extra = [
  {
    name: 'C++',
    logo: '/icons8-c-plus-plus.svg',
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

      <div className="mt-20 container max-w-7xl flex gap-10">
        {/* left */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="border border-border rounded-lg p-4">
            <h2 className="text-sm text-muted-foreground mb-2">Frontend</h2>
            <div className="grid grid-cols-4 gap-y-4">
              {frontends.map((item) => (
                <div className="flex flex-col items-center justify-between size-20">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <p className="text-sm font-light">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h2 className="text-sm text-muted-foreground mb-2">Backend</h2>
            <div className="grid grid-cols-4 gap-y-4">
              {backends.map((item) => (
                <div className="flex flex-col items-center justify-between size-20">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <p className="text-sm font-light">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h2 className="text-sm text-muted-foreground mb-2">Databases</h2>
            <div className="grid grid-cols-4 gap-y-4">
              {databases.map((item) => (
                <div className="flex flex-col items-center justify-between size-20">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <p className="text-sm font-light">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h2 className="text-sm text-muted-foreground mb-2">Dev Ops</h2>
            <div className="grid grid-cols-4 gap-y-4">
              {devOps.map((item) => (
                <div className="flex flex-col items-center justify-between size-20">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <p className="text-sm font-light">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 space-y-10">
          <h2 className="text-3xl font-semibold">My Tech Stack</h2>
          <p className="font-light text-base text-muted-foreground">
            I pride myself on being a full-stack developer with expertise in
            both <span className="text-white font-medium">frontend</span> and{' '}
            <span className="text-white font-medium">backend</span>{' '}
            technologies, enabling me to create efficient and scalable web
            applications from start to finish. Here’s a breakdown of the tools I
            use:
          </p>
          <p className="font-light text-base text-muted-foreground">
            <span className="text-white font-medium">Frontend</span>: I build
            visually appealing, responsive, and highly interactive user
            interfaces using modern technologies like{' '}
            <span className="text-white font-medium">React</span>,{' '}
            <span className="text-white font-medium">Next.js</span>, and{' '}
            <span className="text-white font-medium">TailwindCSS</span>. My goal
            is to provide users with a seamless and engaging experience,
            optimized for performance across all devices.
          </p>
          <p className="font-light text-base text-muted-foreground">
            <span className="text-white font-medium">Backend</span>: For backend
            development, I leverage the power of{' '}
            <span className="text-white font-medium">Node.js</span>,{' '}
            <span className="text-white font-medium">Express.js</span>, and{' '}
            <span className="text-white font-medium">Python</span> to build
            robust, scalable APIs and services. I also use{' '}
            <span className="text-white font-medium">GraphQL</span> to optimize
            data fetching, providing clients with a more flexible and efficient
            way to interact with backend data.
          </p>
          <p className="font-light text-base text-muted-foreground">
            <span className="text-white font-medium">Databases</span>: Ensuring
            data integrity and performance is crucial. I work with databases
            such as <span className="text-white font-medium">MySQL</span>,{' '}
            <span className="text-white font-medium">PostgreSQL</span>, and{' '}
            <span className="text-white font-medium">MongoDB</span> to store and
            manage data effectively, allowing for fast retrieval and secure
            storage. My experience with these technologies enables me to design
            efficient data structures and ensure the smooth functioning of
            backend services.
          </p>
          <p className="font-light text-base text-muted-foreground">
            <span className="text-white font-medium">DevOps</span>: To ensure
            smooth and efficient deployment processes, I use{' '}
            <span className="text-white font-medium">CI/CD</span> pipelines that
            automate testing and deployment, allowing for seamless code
            integration. I work with tools like{' '}
            <span className="text-white font-medium">Docker</span> for
            containerization, ensuring applications run consistently across
            different environments. My experience with cloud platforms such as{' '}
            <span className="text-white font-medium">AWS</span> and{' '}
            <span className="text-white font-medium">Azure</span> allows me to
            build scalable, reliable infrastructure. Additionally, I leverage{' '}
            <span className="text-white font-medium">Vercel</span> and{' '}
            <span className="text-white font-medium">Netlify</span> for fast,
            automated deployments, making it easy to manage, deploy, and monitor
            web applications with minimal friction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
