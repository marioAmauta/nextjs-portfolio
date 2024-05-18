"use client";

import { useLocale } from "next-intl";
import { ChangeEvent } from "react";
import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    const options = { locale: event.target.value, scroll: false };

    if (queryParams) {
      router.replace({ pathname: pathname as number, query: { ...queryParams } }, options);
    } else {
      router.replace({ pathname: pathname as number }, options);
    }
  }

  return (
    <select
      defaultValue={locale}
      onChange={handleChange}
      className="z-50 cursor-pointer bg-transparent"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}
