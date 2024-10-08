// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

import { getTranslations } from "next-intl/server";

import { APP_LINKS } from "@/lib/constants";

import { ButtonLink } from "@/components/link-button";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

export default async function NotFoundPage() {
  const t = await getTranslations("NotFoundPage");

  return (
    <section className="mx-auto w-max space-y-16 text-center">
      <TypographyH1>404</TypographyH1>
      <TypographyH2>{t("title")}</TypographyH2>
      <TypographyP className="text-lg font-semibold">{t("description")}</TypographyP>
      <ButtonLink href={APP_LINKS.homePage}>{t("buttonLabel")}</ButtonLink>
    </section>
  );
}
