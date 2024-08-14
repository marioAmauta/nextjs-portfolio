import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { APP_LINKS, PROJECTS_DATA } from "@/lib/constants";
import { ProjectCardProps } from "@/lib/definitions";

import { LinkButton } from "@/components/buttons";
import { ProjectCard } from "@/components/project-card";
import { ProjectSection } from "@/components/sections";
import { Title } from "@/components/titles";

export default async function ProjectsPage({ params: { locale } }: NextPageProps) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("ProjectsPage");
  const tProjectData = await getTranslations("projectsData");

  const projects = Object.values(PROJECTS_DATA);

  return (
    <>
      <Title titleType="h1">{t("title")}</Title>
      <ProjectSection>
        {projects.map((project: ProjectCardProps) => (
          <ProjectCard key={project.title} {...project} description={tProjectData(project.description)} />
        ))}
      </ProjectSection>
      <LinkButton label={t("buttonLabel")} href={APP_LINKS.contact} className="my-12" />
    </>
  );
}
