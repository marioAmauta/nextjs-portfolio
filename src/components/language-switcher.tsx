"use client";

import { Locale } from "@/config";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace(
      { pathname: pathname.toString(), query: Object.fromEntries(searchParams.entries()) },
      { locale: event.target.value as Locale, scroll: false }
    );
  }

  return (
    <select defaultValue={locale} onChange={handleChange} className="z-50 cursor-pointer bg-transparent">
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}
