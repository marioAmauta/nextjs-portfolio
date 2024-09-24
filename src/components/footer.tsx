import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="flex h-header-height items-center justify-center border-t">
      <div className="container">
        <p className="text-center">{t("madeWithLove")}</p>
      </div>
    </footer>
  );
}
