import { LinkButton } from "@/components/buttons";
import { DescriptionParagraph, ParagraphsSection } from "@/components/sections";
import { Title } from "@/components/titles";
import { APP_LINKS } from "@/lib/constants";
import { range } from "@/lib/utils";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("AboutPage");
  const paragraphs = range({ start: 1, stop: 4 });

  return (
    <>
      <Title titleType="h1">{t("title")}</Title>
      <Title titleType="h2">{t("subtitle")}</Title>
      <ParagraphsSection>
        {paragraphs.map((p) => (
          <DescriptionParagraph key={p} text={t(`paragraphs.p${p}` as any)} />
        ))}
      </ParagraphsSection>
      <LinkButton label={t("linkButton")} href={APP_LINKS.projects} className="my-12" />
    </>
  );
}
