import { DrawerDemo } from "./drawer";
import { LearnMoreButton } from "./learn-more-btn";
import { Button } from "./ui/button";
import { TypographyH1 } from "./ui/typography-h1";
import { TypographyP } from "./ui/typography-p";
import { anton } from "@/app/fonts";
import { getTranslations, getLocale } from 'next-intl/server';
import { getHomePageData } from "@/lib/content";

type Props = {};

export const Hero = async (props: Props) => {
  const t = await getTranslations('hero');
  const locale = await getLocale();
  const homeData = getHomePageData(locale);

  return (
    <header className="bg-background relative h-screen min-h-[600px] p-6 flex items-center justify-between transition duration-300">
      <div className="max-w-4xl mx-auto">
        <TypographyH1 className={`${anton.className} tracking-wide`}>
          {homeData.hero?.title || "Welcome"}
        </TypographyH1>
        <TypographyP className="mt-2 w-4/5">{homeData.hero?.paragraph || ""}</TypographyP>
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 mt-12">
          <LearnMoreButton />
          <span>{t('or')}</span>
          <DrawerDemo />
          {/* <Button>Schedule a meeting</Button> */}
        </div>
      </div>
    </header>
  );
};