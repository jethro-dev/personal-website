"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import { LanguageSwitcher } from "./language-switcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

type Props = {};

type NavItem = {
  title: string;
  href: string;
  smooth: boolean;
};

// Move this inside the component to access translations
// const list_item defined inside component now

export const Navbar = (props: Props) => {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Define list_item inside component to use translations
  const list_item: NavItem[] = [
    {
      title: t("about"),
      href: "#about",
      smooth: true,
    },
    {
      title: t("skills"),
      href: "#skills",
      smooth: true,
    },
    {
      title: t("experience"),
      href: "#experience",
      smooth: true,
    },
    {
      title: t("projects"),
      href: "#portfolio",
      smooth: true,
    },
    {
      title: t("blogs"),
      href: "/blogs",
      smooth: false,
    },
  ];

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`h-20 fixed top-0 z-50 w-full flex items-center border-b border-neutral-700 backdrop-blur-sm rounded-md transition-transform duration-300 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/logo.svg" width={60} height={60} alt="Logo" /> */}
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              jethroau.com
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {list_item.map((item, i) => (
            <NavItem key={i} {...item} />
          ))}
          <LanguageSwitcher />
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ title, href, smooth }: NavItem) => {
  const pathname = usePathname();
  let classNames =
    "hidden sm:block font-light text-lg text-white/50 hover:text-white transition duration-300";

  if (smooth) {
    // Check if we're on the home page (considering locale)
    const isHomePage = pathname === '/' || pathname.match(/^\/[a-z]{2}(-[A-Z]{2})?\/?$/);

    if (isHomePage) {
      // On home page, use smooth scroll
      return (
        <button
          onClick={() => {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={classNames}
        >
          {title}
        </button>
      );
    } else {
      // On other pages, navigate to home with the hash
      return (
        <Link href={`/${href}`} className={classNames}>
          {title}
        </Link>
      );
    }
  } else {
    return (
      <Link href={href} className={classNames}>
        {title}
      </Link>
    );
  }
};
