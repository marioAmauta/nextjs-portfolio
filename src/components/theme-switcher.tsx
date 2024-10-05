"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { ComponentType, SVGProps, useEffect, useState } from "react";

import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Skeleton } from "./ui/skeleton";

export function ThemeSwitcher() {
  const t = useTranslations("ThemeSwitcher");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes: {
    label: string;
    value: "light" | "dark" | "system";
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
  }[] = [
    {
      label: t("system"),
      value: "system",
      Icon: Monitor
    },
    {
      label: t("light"),
      value: "light",
      Icon: Sun
    },
    {
      label: t("dark"),
      value: "dark",
      Icon: Moon
    }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className="h-10 w-16" />;
  }

  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className="h-10 w-16 bg-transparent">
        {themes.map(({ value, Icon }) => (theme === value ? <Icon key={value} className="size-4" /> : null))}
      </SelectTrigger>
      <SelectContent align="center" className="min-w-min">
        {themes.map(({ Icon, value, label }) => (
          <SelectItem key={value} value={value}>
            <div className="flex items-center justify-center gap-2">
              <Icon className="size-4" />
              {label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
