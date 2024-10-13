import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { projects } from "@/lib/data";

import { ContactLinks } from "@/components/contact-links";
import { ProjectCard } from "@/components/project-card";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

export default function HomePage({ params: { locale } }: NextPageProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <>
      <section className="grid gap-8 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col items-center space-y-8 md:space-y-4">
          <TypographyH1>{t("HeroSection.title")}</TypographyH1>
          <TypographyH2 className="w-fit text-center">
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {t("HeroSection.subtitle")}
            </span>
          </TypographyH2>
          <ContactLinks />
        </div>
        <div className="space-y-8 text-center md:space-y-4">
          <TypographyP>{t("HeroSection.aboutMe.p1")}</TypographyP>
          <TypographyP>{t("HeroSection.aboutMe.p2")}</TypographyP>
        </div>
      </section>
      <TypographyH2>{t("ProjectsSection.title")}</TypographyH2>
      <ul className="grid justify-items-center gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </>
  );
}
