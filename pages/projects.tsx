import { ProjectCardProps } from "@/lib/definitions";
import { useLanguage } from "@/hooks/useLanguage";
import { Title } from "@/components/Titles";
import { ProjectSection } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { LinkButton } from "@/components/Buttons";
import { APP_LINKS } from "@/lib/constants";

export default function ProjectsPage() {
  const {
    translations: { projectsPage }
  } = useLanguage();

  return (
    <>
      <Title titleType="h1">{projectsPage.title}</Title>
      <ProjectSection>
        {projectsPage.projectsData.map((project: ProjectCardProps) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ProjectSection>
      <LinkButton
        label={projectsPage.buttonLabel}
        href={APP_LINKS.contact}
        className="my-12"
      />
    </>
  );
}
