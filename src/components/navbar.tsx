import { ELEMENT_IDS, NAVBAR_LINKS } from "@/lib/constants";
import { ThemeSwitcher } from "./theme-switcher.client";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <nav
      id={ELEMENT_IDS.mobileMenuId}
      className="fixed inset-y-0 -right-full flex min-h-screen w-max flex-col items-end gap-6 bg-[--navbar-bg-color] pl-24 pr-14 pt-[15vh] shadow-lg transition-all duration-300 md:static md:min-h-full md:w-auto md:flex-row md:items-center md:justify-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none md:transition-none"
    >
      {NAVBAR_LINKS.map((link) => (
        <div
          key={link.name}
          className="flex h-10 w-full items-center justify-end gap-4 md:flex-row-reverse"
        >
          <Link href={link.path as any} className="w-max">
            {t(link.name as any)}
          </Link>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-[25vh] md:static md:pl-4">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
