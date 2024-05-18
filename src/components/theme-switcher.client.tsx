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
    <form onChange={onThemeChange} className="flex justify-center gap-1 ">
      {Object.values(THEME_INPUT_DATA).map(({ id, name, type, value }) => (
        <label
          key={id}
          htmlFor={id}
          className={`flex cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300 ${theme === value ? "active" : ""}`}
        >
          <input id={id} name={name} type={type} value={value} />
          <ThemeIcons theme={value as Theme} />
        </label>
      ))}
    </form>
  );
}

export function MetaThemeColor() {}
