import React from "react";

const scrollToById = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  const yOffset = -10;
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY + yOffset,
    behavior: "smooth",
  });
};

export default scrollToById;
