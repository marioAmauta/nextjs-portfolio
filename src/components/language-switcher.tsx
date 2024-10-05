"use client";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Select, SelectValue, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams);
  const [, startTransition] = useTransition();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleChange(value: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params, query: { ...searchParamsObject } },
        { locale: value, scroll: false }
      );
    });
  }

  if (!mounted) {
    return <Skeleton className="h-10 w-16" />;
  }

  return (
    <Select defaultValue={locale} onValueChange={handleChange}>
      <SelectTrigger className="h-10 w-16 bg-transparent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="center" className="min-w-max">
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale} className="cursor-pointer">
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
