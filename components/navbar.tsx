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
};

const list_item: NavItem[] = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "experience",
    href: "#experience",
  },
  {
    title: "projects",
    href: "#portfolio",
  },
  {
    title: "blogs",
    href: "#blogs",
  },
];

export const Navbar = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-20 fixed top-0 z-50 w-full flex items-center">
      <div className="container max-w-7xl flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.svg" width={60} height={60} alt="Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {list_item.map((item, i) => (
            <NavItem key={i} {...item} />
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ title, href }: NavItem) => (
  <button
    onClick={() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }}
    className="hidden sm:block"
  >
    {title}
  </button>
);
