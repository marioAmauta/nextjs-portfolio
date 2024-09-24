"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { ComponentType, SVGProps, useEffect, useState } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const themes: {
  value: "light" | "dark" | "system";
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    value: "light",
    Icon: Sun
  },
  {
    value: "system",
    Icon: Monitor
  },
  {
    value: "dark",
    Icon: Moon
  }
];

export function ThemeSwitcher() {
  const t = useTranslations("ThemeSwitcher");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className="bg-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="center" className="min-w-min">
        {themes.map(({ Icon, value }) => (
          <SelectItem key={value} value={value}>
            <div className="flex items-center justify-center gap-2">
              <Icon className="size-4" />
              <span>{t(value)}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
