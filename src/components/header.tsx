import { Link } from "@/i18n/routing";
import { Suspense } from "react";

import { APP_LINKS } from "@/lib/constants";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur transition-[top] duration-300 dark:bg-background/50">
      <div className="container mx-auto flex h-header-height items-center justify-between gap-2 px-4 font-semibold">
        <Link href={APP_LINKS.homePage} className="text-lg hover:underline">
          Mario Programador
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Suspense>
            <LanguageSwitcher />
          </Suspense>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
