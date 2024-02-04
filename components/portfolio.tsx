import React from "react";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./badge";
import { KEYWORDS, Project } from "@/typings";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRightFromSquare } from "lucide-react";

type Props = {};

export const Portfolio = (props: Props) => {
  return (
    <div
      id="portfolio"
      className="bg-background px-10 py-40 flex items-center justify-center transition duration-300"
    >
      <div className="w-full">
        <div className="flex-1">
          <div className="text-center">
            <TypographyH1>My Work</TypographyH1>
            <TypographyP className="mt-2">
              Passionate software developer with a focus on crafting efficient
              and innovative solutions to real-world problems.
            </TypographyP>
          </div>

          <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row justify-between gap-4 flex-grow-0 flex-shrink-0">
            {projects.map((project, i) => (
              <Project key={i} {...project} />
              // <div className="bg-red-300 h-60 flex-1">s</div>
            ))}
          </div>
          <TypographyP className="mt-10 text-center">
            More projects can be found on my{" "}
            <Link
              href="https://github.com/jethro-dev"
              className="underline"
              target="_blank"
            >
              GitHub
            </Link>
            .
          </TypographyP>
        </div>
      </div>
    </div>
  );
};

const Project = ({
  title,
  link,
  src,
  description,
  keywords,
  slug,
  is_private,
}: Project) => (
  <div className="w-full lg:w-1/3">
    <div className="aspect-video rounded-md relative overflow-hidden">
      <Link
        target="_blank"
        href={is_private ? "/" : link}
        className={`${
          is_private ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <Image
          src={src}
          alt={title}
          fill={true}
          className="object-center object-cover"
        />
      </Link>
      {is_private && (
        <Badge
          text={"Private"}
          className="absolute top-2 right-2 bg-background"
        />
      )}
    </div>

    <Link
      target="_blank"
      href={is_private ? "/" : link}
      className={`${
        is_private ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <h3 className="mt-4 font-semibold hover:underline inline-block">
        {title}
      </h3>
    </Link>
    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    <div className="mt-4 w-full flex items-center flex-wrap gap-2">
      {keywords?.map((keyword, i) => (
        <Badge key={1} text={keyword} />
      ))}
    </div>

    <Button
      className={`mt-4 ${is_private ? "cursor-not-allowed" : ""}`}
      asChild
    >
      {is_private ? (
        <Button>
          <span className="mr-2">🔒</span>Locked
        </Button>
      ) : (
        <Link href={link} target="_blank">
          <ArrowUpRightFromSquare className="w-4 h-4 mr-2" /> Live Site
        </Link>
      )}
    </Button>

    {is_private && (
      <>
        <TypographyP className="text-xs mt-4">
          This project is not public.
        </TypographyP>
        <TypographyP className="text-xs mt-2">
          Send me a message if you are interested.
        </TypographyP>
      </>
    )}
  </div>
);
