import React, { useState, useEffect } from "react";

type WindowDimensionType = {
  height: number;
  width: number;
  scrollX: number;
  scrollY: number;
};

function getWindowDimensions(): WindowDimensionType {
  if (typeof window !== "undefined") {
    // Client-side-only code
    const { innerWidth: width, innerHeight: height, scrollX, scrollY } = window;
    return {
      width,
      height,
      scrollX,
      scrollY,
    };
  } else {
    return { height: 0, width: 0, scrollX: 0, scrollY: 0 };
  }
}

const useWindowDimensions = (): WindowDimensionType => {
  const [windowDimensions, setWindowDimensions] = useState({
    height: 0,
    width: 0,
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    setWindowDimensions(getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;
