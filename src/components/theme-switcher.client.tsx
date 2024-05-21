"use client";

import { useTheme } from "next-themes";
import { ChangeEvent, useEffect, useState } from "react";
import { THEME_INPUT_DATA } from "@/lib/constants";
import { Theme, ThemeIcons } from "./icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function onThemeChange(event: ChangeEvent<HTMLFormElement>) {
    setTheme(event.target.value);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <form onChange={onThemeChange} className="flex justify-center gap-2">
      {Object.values(THEME_INPUT_DATA).map(({ id, name, value }) => (
        <label
          key={id}
          htmlFor={id}
          className={`cursor-pointer rounded-full p-2 ${theme === value ? "bg-btn-bg-color dark:bg-btn-bg-color-dark" : ""}`}
        >
          <input id={id} name={name} value={value} type="radio" className="hidden" />
          <ThemeIcons theme={value as Theme} />
        </label>
      ))}
    </form>
  );
}
