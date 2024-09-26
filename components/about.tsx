import { Download, Eye, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { TypographyH1 } from './ui/typography-h1';
import { TypographyP } from './ui/typography-p';
import { TypographyH3 } from './ui/typography-h3';
import Link from 'next/link';
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { getAboutSectionData } from '@/lib/sanity-utils';
import { TracingBeam } from './ui/tracing-beam';
import { AboutMeCard } from './about-me-card';
import { AboutItem } from './about-item';

type Props = {};

const paragraphs = [
  {
    title: 'What about me?',
    text: 'A passionate Computer Science graduate chasing his dreams. Originated in Hong Kong, currently living in the capital of the UK — London. Giving me the ability to read and write fluently in two of the most spoken languages in the world, English, and Chinese.',
  },
  {
    title: 'Why do I love software development so much?',
    text: "There's nothing more satisfying than solving a problem that's been around for a while and nobody else knows how to solve. As a software developer, I constantly provide solutions for users' problems. I can be working on the occasional quick fix as well as more complex strategic solutions.",
  },
  {
    title: 'Then, what makes me a good software engineer?',
    text: "Great fundamentals built up from university. I am always curious and love to stay updated to the latest technology. Also, I love challenges and I don't give up. With the advantages of bilingual, I am able to connect and collaborate with developers around the world.",
  },
];

export const About = async (props: Props) => {
  return (
    <TracingBeam>
      <div
        id="about"
        className="container bg-background py-20 px-6 flex md:items-start justify-between transition duration-300 gap-10 lg:gap-20 relative flex-col items-center md:flex-row"
      >
        <div className="">
          <TypographyH1 className="text-4xl sm:text-7xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            About Me
          </TypographyH1>
          <TypographyP className="mt-2">Lttile things about me</TypographyP>

          <div className="">
            {paragraphs.map((p, i) => (
              <AboutItem key={i} {...p} />
            ))}
          </div>
        </div>
        <div className="sticky top-[30%]">
          <AboutMeCard />
        </div>
      </div>
    </TracingBeam>
  );
};
