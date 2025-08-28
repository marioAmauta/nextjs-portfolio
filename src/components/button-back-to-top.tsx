"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

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
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className={cn(
        "group right-4 bottom-20 cursor-pointer rounded-full border bg-background/50 p-6 shadow-lg backdrop-blur-sm md:bottom-16 xl:right-[10%]",
        isVisible ? "fixed" : "hidden"
      )}
    >
      <ArrowUp className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
    </Button>
  );
}
