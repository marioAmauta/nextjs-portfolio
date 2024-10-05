"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export function ButtonBackToTop() {
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
      className={cn(
        "bottom-14 right-8 rounded-full border bg-background/50 p-3 shadow-lg backdrop-blur md:bottom-16 md:right-16",
        isVisible ? "fixed" : "hidden"
      )}
    >
      <ArrowUp className="size-6" />
    </button>
  );
}
