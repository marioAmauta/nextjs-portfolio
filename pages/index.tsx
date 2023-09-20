import { LinkButton } from '@/components/Buttons';
import { ProjectCard, ProjectCardProps } from '@/components/ProjectCard';
import {
  ContactButtons,
  DescriptionParagraph,
  DescriptionSection,
  HeroSection,
  ProjectSection,
  RegularSection
} from '@/components/Sections';
import { Title } from '@/components/Titles';
import { useLanguage } from '@/hooks/useLanguage';

export type LinkWithLabel = {
  label: string;
  href: string;
};

export default function IndexPage() {
  const {
    translations: { indexPage }
  } = useLanguage();

  return (
    <>
      <HeroSection>
        <Title titleType='hero'>{indexPage.hero.title}</Title>
        <Title titleType='heroSubtitle'>{indexPage.hero.subtitle}</Title>
        <DescriptionSection gap='gap-4'>
          {indexPage.hero.description.map((text: string, index: number) => (
            <DescriptionParagraph
              key={index}
              text={text}
              fontWeight='font-semibold'
            />
          ))}
        </DescriptionSection>
        <ContactButtons />
      </HeroSection>
      <RegularSection>
        <Title titleType='h2'>{indexPage.about.title}</Title>
        <DescriptionSection>
          {indexPage.about.description.map((text: string, index: number) => (
            <DescriptionParagraph
              key={index}
              text={text}
            />
          ))}
          <LinkButton
            href='/about'
            label={indexPage.about.buttonLabel}
          />
        </DescriptionSection>
      </RegularSection>
      <RegularSection>
        <Title titleType='h2'>{indexPage.projects.title}</Title>
        <DescriptionSection>
          <DescriptionParagraph
            text={indexPage.projects.description}
            fontWeight='font-semibold'
          />
          <ProjectSection>
            {indexPage.projects.projectsData.map((project: ProjectCardProps) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </ProjectSection>
          <LinkButton
            href='/projects'
            label={indexPage.projects.buttonLabel}
          />
        </DescriptionSection>
      </RegularSection>
      <RegularSection>
        <Title titleType='h2'>{indexPage.contact.title}</Title>
        <DescriptionSection>
          <DescriptionParagraph text={indexPage.contact.description} />
          <ContactButtons buttonsMargin='my-12' />
          <DescriptionParagraph text={indexPage.contact.paragraph} />
          <LinkButton
            href='/contact'
            label={indexPage.contact.buttonLabel}
          />
        </DescriptionSection>
      </RegularSection>
    </>
  );
}
