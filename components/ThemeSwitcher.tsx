import { ELEMENT_IDS, THEME_INPUT_DATA } from "@/lib/constants";
import { ThemeIcons } from "./Icons";
import { ChangeEvent, useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

  function onThemeChange(event: ChangeEvent<HTMLFormElement>) {
    setTheme(event.target.value);

    if (event.target.value === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", event.target.value);
    }
  }

  useEffect(() => {
    function setDarkMode(isDarkMode: boolean) {
      setTheme(localStorage.theme || "system");

      const $html = document.documentElement;

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && isDarkMode)
      ) {
        $html.classList.add("dark");
      } else {
        $html.classList.remove("dark");
      }
    }

    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    setDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener("change", ({ matches }) =>
      setDarkMode(matches)
    );

    return () =>
      prefersColorScheme.removeEventListener("change", ({ matches }) =>
        setDarkMode(matches)
      );
  }, [theme]);

  useEffect(() => {
    function setMetaThemeColor(isDarkMode: boolean) {
      const metaThemeColors = {
        light: "#f5f5f5",
        dark: "#333",
        system: isDarkMode ? "#333" : "#f5f5f5"
      };

      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute(
          "content",
          metaThemeColors[theme as keyof typeof metaThemeColors]
        );
    }

    const prefersColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    setMetaThemeColor(prefersColorScheme.matches);

    prefersColorScheme.addEventListener("change", ({ matches }) =>
      setMetaThemeColor(matches)
    );

    return () =>
      prefersColorScheme.removeEventListener("change", ({ matches }) =>
        setMetaThemeColor(matches)
      );
  });

  return (
    <form
      id={ELEMENT_IDS.themePalette}
      onChange={onThemeChange}
      className="mx-auto flex w-min gap-1"
    >
      {Object.values(THEME_INPUT_DATA).map(({ id, name, type, value }) => (
        <label
          key={id}
          htmlFor={id}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center transition-all duration-300 ${theme === value ? "active" : ""}`}
        >
          <input id={id} name={name} type={type} value={value} />
          <ThemeIcons theme={value} />
        </label>
      ))}
    </form>
  );
}
