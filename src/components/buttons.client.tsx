"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function ArrowUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollLimit = 500;

      if (document.documentElement.scrollTop > scrollLimit) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`bottom-8 right-8 rounded-full bg-[--btn-bg-color] ${isVisible ? "fixed" : "hidden"}`}
    >
      <ArrowUpIcon className="m-3 h-5 w-5 fill-[--app-text-color] " />
    </button>
  );
}
