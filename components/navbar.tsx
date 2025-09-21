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

export const Navbar = () => {
  const t = useTranslations("nav");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`h-20 fixed top-0 z-50 w-full flex items-center border-b border-neutral-700 backdrop-blur-sm rounded-md transition-transform duration-300 ease-in-out ${
          visible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="container flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                jethroau.com
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {list_item.map((item, i) => (
              <NavItem key={i} {...item} />
            ))}
            <LanguageSwitcher />
          </div>

          {/* Tablet Menu - Show Language Switcher and Hamburger */}
          <div className="hidden sm:flex lg:hidden items-center gap-4">
            <LanguageSwitcher />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-black border-neutral-700">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                  {list_item.map((item, i) => (
                    <MobileNavItem
                      key={i}
                      {...item}
                      onClose={() => setIsMenuOpen(false)}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu - Only Hamburger */}
          <div className="flex sm:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-black border-neutral-700">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                  {list_item.map((item, i) => (
                    <MobileNavItem
                      key={i}
                      {...item}
                      onClose={() => setIsMenuOpen(false)}
                    />
                  ))}
                </nav>

                {/* Language Switcher at bottom for mobile */}
                <div className="absolute bottom-6 left-6 right-6 border-t border-neutral-700 pt-6">
                  <LanguageSwitcher />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ title, href, smooth }: NavItem) => {
  const pathname = usePathname();
  let classNames =
    "font-light text-lg text-white/50 hover:text-white transition duration-300";

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

// Mobile Navigation Item Component
const MobileNavItem = ({
  title,
  href,
  smooth,
  onClose
}: NavItem & { onClose: () => void }) => {
  const pathname = usePathname();
  const classNames =
    "block py-3 text-lg text-white/70 hover:text-white transition-colors";

  const handleClick = () => {
    onClose();
    if (smooth) {
      const isHomePage = pathname === '/' || pathname.match(/^\/[a-z]{2}(-[A-Z]{2})?\/?$/);
      if (isHomePage) {
        // Small delay to allow menu to close before scrolling
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  if (smooth) {
    const isHomePage = pathname === '/' || pathname.match(/^\/[a-z]{2}(-[A-Z]{2})?\/?$/);

    if (isHomePage) {
      return (
        <button
          onClick={handleClick}
          className={classNames + " w-full text-left"}
        >
          {title}
        </button>
      );
    } else {
      return (
        <Link
          href={`/${href}`}
          className={classNames}
          onClick={onClose}
        >
          {title}
        </Link>
      );
    }
  } else {
    return (
      <Link
        href={href}
        className={classNames}
        onClick={onClose}
      >
        {title}
      </Link>
    );
  }
};
