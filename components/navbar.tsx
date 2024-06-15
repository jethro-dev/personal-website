"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import Link from "next/link";

type Props = {};

type NavItem = {
  title: string;
  href: string;
  smooth: boolean;
};

const list_item: NavItem[] = [
  {
    title: "About",
    href: "#about",
    smooth: true,
  },
  {
    title: "Skills",
    href: "#skills",
    smooth: true,
  },
  {
    title: "Experience",
    href: "#experience",
    smooth: true,
  },
  {
    title: "Projects",
    href: "#portfolio",
    smooth: true,
  },
  {
    title: "Blogs",
    href: "/blogs",
    smooth: false,
  },
];

export const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
      <div className="container max-w-8xl flex items-center justify-between">
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
          {/* <ThemeSwitch /> */}
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ title, href, smooth }: NavItem) => {
  let classNames =
    "hidden sm:block font-light text-lg text-white/50 hover:text-white transition duration-300";

  if (smooth) {
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
    return (
      <Link href={href} className={classNames}>
        {title}
      </Link>
    );
  }
};
