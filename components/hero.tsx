import { client } from "@/lib/sanity";
import { DrawerDemo } from "./drawer";
import { LearnMoreButton } from "./learn-more-btn";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { anton } from "@/app/fonts";
import { groq } from "next-sanity";
import { MacbookScroll } from "./ui/macbook-scroll";
type Props = {};

export const Hero = async (props: Props) => {
  const data =
    await client.fetch(groq`*[_type=='page' && title == 'Home'][0].section[_type == 'heroSection'][0]{
    title,paragraph
  }`);

  return (
    <header className="bg-background relative h-screen min-h-[600px] p-6 flex items-center justify-between transition duration-300">
      <div className="max-w-4xl mx-auto">
        <TypographyH1 className={`${anton.className} tracking-wide`}>
          {data.title}
        </TypographyH1>
        <TypographyP className="mt-2 w-4/5">{data.paragraph}</TypographyP>
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 mt-12">
          <LearnMoreButton />
          <span>or</span>
          <DrawerDemo />
          {/* <Button>Schedule a meeting</Button> */}
        </div>
      </div>
    </header>
  );
};
