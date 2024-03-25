import Link from "next/link";
import { APP_LINKS, ELEMENT_IDS } from "@/lib/constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useEffect } from "react";
import { Navbar } from "./Navbar";

export function BlurredBackground() {
  return (
    <div
      id={ELEMENT_IDS.bgBlurredId}
      className="fixed inset-0 min-h-screen w-0 bg-[--bg-blurred-color] backdrop-blur-sm transition duration-100 md:hidden"
    />
  );
}

export function ToggleButton() {
  return (
    <div
      id={ELEMENT_IDS.toggleButtonId}
      className="z-50 flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
    />
  );
}

export function Header() {
  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    function handleScroll() {
      let currentScrollPosition = window.scrollY;
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
      const toggleElements = [
        ELEMENT_IDS.toggleButtonId,
        ELEMENT_IDS.mobileMenuId,
        ELEMENT_IDS.bgBlurredId
      ];

      if (event.target instanceof HTMLElement) {
        const activeClass = "active";

        if (event.target.id === ELEMENT_IDS.toggleButtonId) {
          document.body?.classList.toggle(activeClass);
          toggleElements.forEach((element) =>
            document.getElementById(element)?.classList.toggle(activeClass)
          );
        } else if (
          event.target.id === ELEMENT_IDS.bgBlurredId ||
          event.target.tagName === "A"
        ) {
          document.body?.classList.remove(activeClass);
          toggleElements.forEach((element) =>
            document.getElementById(element)?.classList.remove(activeClass)
          );
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
      className="sticky top-0 z-30 flex h-[--header-height] items-center justify-between border-b border-[--border-color] bg-[--app-bg-color] p-4 transition-all duration-300 lg:px-5% xl:px-10% 2xl:px-15%"
    >
      <Link href={APP_LINKS.home} className="text-xl">
        Mario Programador
      </Link>
      <div className="flex items-center justify-center gap-4 md:flex-row-reverse md:gap-6">
        <LanguageSwitcher />
        <ToggleButton />
        <BlurredBackground />
        <Navbar />
      </div>
    </header>
  );
}
