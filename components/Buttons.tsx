import Link from "next/link";
import { ArrowUpIcon } from "./Icons";
import { LinkButtonProps } from "@/lib/definitions";
import { useEffect, useState } from "react";

export function LinkButton({ href, label, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`block w-max rounded-lg bg-[--btn-bg-color] px-4 py-2 text-center text-lg font-semibold shadow transition-colors duration-300 ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

export function ContactLinkButton({ href, label, className }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-12 w-28 items-center justify-center rounded-lg bg-[--btn-bg-color] text-lg font-semibold shadow transition-all duration-300 ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}

export function TechLinkButton({ label, href }: LinkButtonProps) {
  return (
    <Link
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 items-center justify-center rounded-2xl bg-[--btn-bg-color] px-4 text-[--app-text-color]"
    >
      {label}
    </Link>
  );
}

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
      className={`bottom-8 right-8 rounded-full bg-[--btn-bg-color] px-4 py-2 text-center text-lg font-semibold text-[--app-text-color] shadow-xl ${isVisible ? "fixed" : "hidden"}`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </button>
  );
}
