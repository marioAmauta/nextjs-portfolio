import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="container flex h-header-height items-center justify-center border-t">
      <p className="text-center">{t("madeWithLove")}</p>
    </footer>
  );
}
