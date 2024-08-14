"use client";

import { Link } from "@/navigation";
import { Suspense, useEffect } from "react";

import { APP_LINKS, ELEMENT_IDS } from "@/lib/constants";

import { LanguageSwitcher } from "./language-switcher";
import { Navbar } from "./navbar";
import { BlurredBackground, ToggleButton } from "./sections";

export function Header() {
  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      const $header = document.getElementById(ELEMENT_IDS.mainHeaderId);

      if ($header === null) return;

      if (previousScrollPosition > currentScrollPosition) {
        $header.style.top = "0px";
      } else {
        $header.style.top = `-${$header.offsetHeight}px`;
      }

      previousScrollPosition = currentScrollPosition;
    }

    function handleMobileMenu(event: MouseEvent) {
      const { toggleButtonId, mobileMenuId, bgBlurredId } = ELEMENT_IDS;
      const toggleElements = [toggleButtonId, mobileMenuId, bgBlurredId];

      if (event.target instanceof HTMLElement) {
        const activeClass = "active";

        if (event.target.id === toggleButtonId) {
          document.body?.classList.toggle(activeClass);
          toggleElements.forEach((element) => document.getElementById(element)?.classList.toggle(activeClass));
        } else if (event.target.id === bgBlurredId || event.target.tagName === "A") {
          document.body?.classList.remove(activeClass);
          toggleElements.forEach((element) => document.getElementById(element)?.classList.remove(activeClass));
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleMobileMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleMobileMenu);
    };
  }, []);

  return (
    <header
      id={ELEMENT_IDS.mainHeaderId}
      className="sticky top-0 z-30 flex h-[--header-height] items-center justify-between border-b border-app-border-color bg-app-bg-color px-4 font-semibold transition-all duration-300 dark:border-app-border-color-dark dark:bg-app-bg-color-dark lg:px-5% xl:px-10% 2xl:px-15%"
    >
      <Link href={APP_LINKS.home} className="text-xl">
        Mario Programador
      </Link>
      <div className="flex items-center justify-center gap-4 md:flex-row-reverse md:gap-6">
        <Suspense fallback={null}>
          <LanguageSwitcher />
        </Suspense>
        <ToggleButton />
        <BlurredBackground />
        <Navbar />
      </div>
    </header>
  );
}
