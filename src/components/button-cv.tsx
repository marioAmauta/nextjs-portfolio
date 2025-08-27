"use client";

import { FileDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { LinkExternal } from "./link-button";

export function ButtonCV() {
  const locale = useLocale();

  const t = useTranslations("ButtonCV");

  const cvs = {
    en: "/files/cv-en-mario-poblete-ortiz.pdf",
    es: "/files/cv-es-mario-poblete-ortiz.pdf"
  };

  const href = cvs[locale];

  return (
    <LinkExternal
      href={href}
      download
      className="group flex flex-col items-center fill-muted-foreground text-muted-foreground"
    >
      <FileDown className="size-6 transition-colors" />
      <span className="transition-colors group-hover:text-primary">{t("label")}</span>
    </LinkExternal>
  );
}
