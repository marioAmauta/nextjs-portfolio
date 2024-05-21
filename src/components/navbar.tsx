import { ELEMENT_IDS, NAVBAR_LINKS } from "@/lib/constants";
import { ThemeSwitcher } from "./theme-switcher.client";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav
      id={ELEMENT_IDS.mobileMenuId}
      className="fixed inset-y-0 -right-full flex min-h-screen w-max flex-col items-end gap-10 bg-app-bg-color pl-24 pr-12 pt-[20vh] shadow-lg transition-all duration-300 dark:bg-app-bg-color-dark md:static md:min-h-full md:w-auto md:flex-row md:items-center md:justify-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none md:transition-none"
    >
      {NAVBAR_LINKS.map((link) => (
        <Link key={link.name} href={link.path as any} className="w-max">
          {t(link.name as any)}
        </Link>
      ))}
      <div className="absolute inset-x-0 bottom-[30vh] md:static">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
