// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

import { LinkButton } from "@/components/buttons";
import { Title } from "@/components/titles";
import { APP_LINKS } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

export default async function NotFoundPage() {
  const t = await getTranslations("NotFoundPage");

  return (
    <section className="flex h-[calc(100dvh-(var(--header-height)*2))] flex-col items-center justify-center gap-10 text-center">
      <Title titleType="h1" className="py-0">
        404
      </Title>
      <Title titleType="h2" className="mb-0">
        {t("title")}
      </Title>
      <p className="text-lg font-semibold">{t("description")}</p>
      <LinkButton href={APP_LINKS.home} label={t("buttonLabel")} />
    </section>
  );
}
