import { LinkButton } from '@/components/Buttons';
import { ProjectCard, ProjectCardProps } from '@/components/ProjectCard';
import { ProjectSection } from '@/components/Sections';
import { Title } from '@/components/Titles';
import { useLanguage } from '@/hooks/useLanguage';

export default function ProjectsPage() {
  const {
    translations: { projectsPage }
  } = useLanguage();

  return (
    <>
      <Title titleType='h1'>{projectsPage.title}</Title>
      <Title titleType='h2'>{projectsPage.description}</Title>
      <ProjectSection>
        {projectsPage.projectsData.map((project: ProjectCardProps) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </ProjectSection>
      <LinkButton
        label={projectsPage.buttonLabel}
        href='/contact'
        margin='my-12'
      />
    </>
  );
}
