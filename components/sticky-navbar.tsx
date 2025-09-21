"use client";
import React, { useEffect, useState, useCallback } from "react";
import { LanguageSwitcher } from "./language-switcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

type NavItem = {
  title: string;
  href: string;
  smooth: boolean;
};

interface StickyNavbarProps {
  isVisible: boolean;
}

export const StickyNavbar = ({ isVisible }: StickyNavbarProps) => {
  const t = useTranslations("nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Define navigation items
  const list_item: NavItem[] = [
    {
      title: t("about"),
      href: "/#about",
      smooth: true,
    },
    {
      title: t("experience"),
      href: "/#experience",
      smooth: true,
    },
    {
      title: t("portfolio"),
      href: "/#portfolio",
      smooth: true,
    },
    {
      title: t("blogs"),
      href: "/blogs",
      smooth: false,
    },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const MobileNavItem = ({ item }: { item: NavItem }) => {
    const isExternal = item.href.startsWith("http");
    const Component = isExternal ? "a" : Link;
    const linkProps = isExternal
      ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
      : { href: item.href };

    return (
      <Component
        {...linkProps}
        onClick={handleLinkClick}
        className="block w-full text-left text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white transition-colors py-3 px-4 hover:bg-neutral-100 dark:hover:bg-white/5 rounded-md"
      >
        {item.title}
      </Component>
    );
  };

  const DesktopNavItem = ({ item }: { item: NavItem }) => {
    const isExternal = item.href.startsWith("http");
    const Component = isExternal ? "a" : Link;
    const linkProps = isExternal
      ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
      : { href: item.href };

    return (
      <Component
        {...linkProps}
        className="text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200 text-sm font-medium"
      >
        {item.title}
      </Component>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-neutral-900 dark:text-white font-bold text-xl">
          {t("siteName")}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {list_item.map((item, index) => (
            <DesktopNavItem key={index} item={item} />
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white dark:bg-black border-neutral-200 dark:border-neutral-700">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col space-y-1 mt-8">
                {list_item.map((item, index) => (
                  <MobileNavItem key={index} item={item} />
                ))}
                <div className="sm:hidden pt-4 px-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};