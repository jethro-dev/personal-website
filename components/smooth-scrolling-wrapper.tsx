"use client";
import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
// import { useLenisStateStore } from "@/hooks/use-lenis-state-store";

type Props = {
  children: React.ReactNode;
};

const SmoothScrollingWrapper = ({ children }: Props) => {
  //   const { isScrollDisabled, setIsScrollDisabled } = useLenisStateStore(
  //     (state) => state
  //   );
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  //   useEffect(() => {
  //     if (isScrollDisabled) {
  //       lenis?.stop();
  //     } else {
  //       lenis?.start();
  //     }
  //   }, [isScrollDisabled]);

  // lenis?.stop();
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollingWrapper;
