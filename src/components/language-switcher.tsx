"use client";

import { Locale, locales } from "@/config";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Select, SelectValue, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [selectedLanguage, setSelectedLanguage] = useState(locale);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function handleChange(value: Locale) {
    setSelectedLanguage(value);

    replace(
      { pathname: pathname.toString(), query: { ...Object.fromEntries(searchParams) } },
      { locale: value, scroll: false }
    );
  }

  return (
    <Select value={selectedLanguage} onValueChange={handleChange}>
      <SelectTrigger className="bg-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="center" className="min-w-max">
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="cursor-pointer">
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
