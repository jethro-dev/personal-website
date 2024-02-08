import { DrawerDemo } from "./drawer";
import { LearnMoreButton } from "./learn-more-btn";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { anton } from "@/app/fonts";
type Props = {};

export const Hero = (props: Props) => {
  return (
    <header className="bg-background relative h-screen min-h-[600px] p-6 flex items-center justify-between transition duration-300">
      <div className="max-w-4xl mx-auto">
        <TypographyH1 className={`${anton.className} tracking-wide`}>
          Welcome to jethroau.com
        </TypographyH1>
        <TypographyP className="mt-2 w-4/5">
          Explore the intersection of technology and imagination as we embark on
          a journey to transform concepts into powerful, user-centric
          experiences. Let&apos;s build the future together – one line of code
          at a time.
        </TypographyP>
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
