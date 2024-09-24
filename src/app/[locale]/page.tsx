import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { PROJECTS_DATA } from "@/lib/data";

import { ContactButtons } from "@/components/contact-buttons";
import { ContactForm } from "@/components/contact-form";
import { ListGrid } from "@/components/list-grid";
import { ProjectCard } from "@/components/project-card";
import { RegularSection } from "@/components/sections";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

export default function HomePage({ params: { locale } }: NextPageProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("HomePage");
  const tProjects = useTranslations("projectDescriptions");

  const projects = Object.values(PROJECTS_DATA).toReversed();

  return (
    <>
      <section className="-mt-8 flex h-[calc(100svh-var(--header-height))] flex-col items-center justify-evenly text-center">
        <TypographyH1 className="text-5xl">{t("HeroSection.title")}</TypographyH1>
        <TypographyH2>
          <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            {t("HeroSection.subtitle")}
          </span>
        </TypographyH2>
        <TypographyP className="text-lg font-semibold">{t("HeroSection.description")}</TypographyP>
        <ContactButtons />
      </section>
      <RegularSection>
        <TypographyH2>{t("ProjectsSection.title")}</TypographyH2>
        <div className="flex justify-center">
          <ListGrid>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} descriptionKey={tProjects(project.descriptionKey)} />
            ))}
          </ListGrid>
        </div>
      </RegularSection>
      <RegularSection>
        <TypographyH2>{t("AboutSection.title")}</TypographyH2>
        <TypographyP>{t("AboutSection.description.p1")}</TypographyP>
        <TypographyP>{t("AboutSection.description.p2")}</TypographyP>
      </RegularSection>
      <RegularSection>
        <TypographyH2>{t("ContactSection.title")}</TypographyH2>
        <ContactForm />
      </RegularSection>
      <ContactButtons className="pb-6" />
    </>
  );
}
