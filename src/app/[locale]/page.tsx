import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { projects } from "@/lib/data";

import { ContactLinks } from "@/components/contact-links";
import { AnimatedHeroSection } from "@/components/layout/animated-hero-section";
import { AnimatedProjectsSection, AnimatedProjectsSectionItem } from "@/components/layout/animated-projects-section";
import { ProjectCard } from "@/components/project-card";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

type HomePageProps = {
  params: Params<{ locale: Locale }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  const paragraphsKeys = ["p1", "p2", "p3"] as const;

  return (
    <>
      <AnimatedHeroSection className="grid gap-8 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col items-center space-y-8 md:space-y-4">
          <TypographyH1>{t("HeroSection.title")}</TypographyH1>
          <TypographyH2 className="w-fit text-center">
            <span className="bg-linear-to-r from-cyan-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {t("HeroSection.subtitle")}
            </span>
          </TypographyH2>
          <ContactLinks />
        </div>
        <div className="space-y-8 text-center text-pretty md:space-y-4">
          {paragraphsKeys.map((key) => (
            <TypographyP key={key}>{t(`HeroSection.aboutMe.${key}`)}</TypographyP>
          ))}
        </div>
      </AnimatedHeroSection>
      <AnimatedProjectsSection>
        <TypographyH2 className="mb-12">{t("HeroSection.title")}</TypographyH2>
        <ul className="grid justify-items-center gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <AnimatedProjectsSectionItem key={project.title}>
              <ProjectCard {...project} />
            </AnimatedProjectsSectionItem>
          ))}
        </ul>
      </AnimatedProjectsSection>
    </>
  );
}
