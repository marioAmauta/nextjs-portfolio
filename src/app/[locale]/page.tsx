import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

import { getProjectCardData } from "@/lib/data";

import { ContactButtons } from "@/components/contact-buttons";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

export default function HomePage({ params: { locale } }: NextPageProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  const projects = getProjectCardData();

  return (
    <>
      <section className="-mt-10 flex h-[calc(100svh-var(--header-height))] max-h-[800px] min-h-[500px] flex-col items-center justify-evenly text-center">
        <TypographyH1 className="text-5xl">{t("HeroSection.title")}</TypographyH1>
        <TypographyH2>
          <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            {t("HeroSection.subtitle")}
          </span>
        </TypographyH2>
        <TypographyP className="text-lg font-semibold italic">{t("HeroSection.description")}</TypographyP>
        <ContactButtons />
      </section>
      <TypographyH2>{t("ProjectsSection.title")}</TypographyH2>
      <ul className="grid justify-items-center gap-16 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
      <TypographyH2>{t("AboutSection.title")}</TypographyH2>
      <section>
        <TypographyP>{t("AboutSection.description.p1")}</TypographyP>
        <TypographyP>{t("AboutSection.description.p2")}</TypographyP>
      </section>
      <TypographyH2>{t("ContactSection.title")}</TypographyH2>
      <ContactForm />
      <ContactButtons className="pb-6" />
    </>
  );
}
