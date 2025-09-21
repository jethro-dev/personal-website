"use client";
import { StickyNavbar } from "@/components/sticky-navbar";
import { useEffect, useState } from "react";

export function ScrollNavbarWrapper() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky navbar when scrolled past 80% of viewport height
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.8;

      setShowStickyNav(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <StickyNavbar isVisible={showStickyNav} />;
}