"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
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
  return (
    <div className="h-20 fixed top-0 z-50 w-full flex items-center border-b border-neutral-700 backdrop-blur-sm rounded-md">
      <div className="container max-w-7xl flex items-center justify-between">
        <div>
          <Link href="/">
            {/* <Image src="/logo.svg" width={60} height={60} alt="Logo" /> */}
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
              JethroAu.com
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
  if (smooth) {
    return (
      <button
        onClick={() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden sm:block font-bold text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
      >
        {title}
      </button>
    );
  } else {
    return (
      <Link
        href={href}
        className="hidden sm:block font-bold text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
      >
        {title}
      </Link>
    );
  }
};
