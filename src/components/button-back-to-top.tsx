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
        "right-4 bottom-20 rounded-full border bg-background/50 p-3 shadow-lg backdrop-blur-sm md:bottom-16 xl:right-[10%]",
        isVisible ? "fixed" : "hidden"
      )}
    >
      <ArrowUp className="size-6" />
    </button>
  );
}
