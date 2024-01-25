"use client";
import Image from "next/image";
import React from "react";

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
    title: "portfolio",
    href: "#portfolio",
  },
  {
    title: "experience",
    href: "#experience",
  },
  // {
  //   title: "blog",
  //   href: "#blog",
  // },
];

export const Navbar = (props: Props) => {
  return (
    <div className="h-20 fixed top-0 z-50 w-full p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <Image src="/logo.svg" width={60} height={60} alt="Logo" />
        </div>
        <div className="flex items-center gap-4">
          {list_item.map((item, i) => (
            <NavItem key={i} {...item} />
          ))}
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
  >
    {title}
  </button>
);
