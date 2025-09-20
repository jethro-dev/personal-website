import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

type Props = {};

export const Footer = async (props: Props) => {
  const t = await getTranslations('footer');

  return (
    <div className="bg-background py-4 px-6 w-full">
      <div className=" flex items-center justify-between">
        <span className="text-xs font-light">
          © Jethro Au. {t('rights')}
        </span>

        <div className="flex items-center gap-2.5">
          <Link href={"https://github.com/jethro-dev"} target="_blank">
            <Github className="w-4 h-4" />
          </Link>
          <Link href={"https://www.linkedin.com/in/galongau/"} target="_blank">
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
