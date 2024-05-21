import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex h-[--header-height] items-center justify-center border-t border-app-border-color dark:border-app-border-color-dark lg:px-5% xl:px-10% 2xl:px-15%">
      <p className="text-center">{t("madeWithLove")}</p>
    </footer>
  );
}
