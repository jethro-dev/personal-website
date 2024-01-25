"use client";
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";

type Props = {};

export const About = (props: Props) => {
  return (
    <div id="about" className="py-20 px-6 flex items-center justify-between">
      <div className="max-w-4xl mx-auto">
        <TypographyH1>About me</TypographyH1>
        <TypographyP className="mt-2">
          Computer Science graduate with great fundamentals, and a passion for
          software development. High level experience in software engineering
          and development, producing quality work.
        </TypographyP>

        <div className="mt-10 border border-primary/90 bg-primary rounded-md p-4 text-primary-foreground">
          <h3 className="text-lg font-semibold">TLDR</h3>
          <ol className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <TypographyP>
                Born in Hong Kong, fluent in both English and Chinese
              </TypographyP>
            </li>
            <li>
              <TypographyP>
                Passionate developer and life-time learner
              </TypographyP>
            </li>
            <li>
              <TypographyP>Smart and hardworking</TypographyP>
            </li>
          </ol>
        </div>

        <div className="mt-10">
          <div className="mt-2 flex items-center gap-2">
            <Button>
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button>
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <div>
            <h3 className="text-lg font-semibold">What about me?</h3>
            <TypographyP>
              A passionate Computer Science graduate chasing his dreams.
              Originated in Hong Kong, currently living in the capital of the UK
              — London. Giving me the ability to read and write fluently in two
              of the most spoken languages in the world, English, and Chinese.
            </TypographyP>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Why do I love software development so much?
            </h3>
            <TypographyP>
              There's nothing more satisfying than solving a problem that's been
              around for a while and nobody else knows how to solve. As a
              software developer, I constantly provide solutions for users'
              problems. I can be working on the occasional quick fix as well as
              more complex strategic solutions.
            </TypographyP>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Then, what makes me a good software engineer?
            </h3>
            <TypographyP>
              Great fundamentals built up from university. I am always curious
              and love to stay updated to the latest technology. Also, I love
              challenges and I don't give up. With the advantages of bilingual,
              I am able to connect and collaborate with developers around the
              world.
            </TypographyP>
          </div>
        </div>
      </div>
    </div>
  );
};
