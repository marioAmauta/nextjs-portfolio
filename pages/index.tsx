import { LinkButton } from '@/components/Buttons';
import { ContactForm } from '@/components/ContactForm';
import { ProjectCard } from '@/components/ProjectCard';
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
import { ELEMENT_IDS } from '@/lib/constants';
import { ProjectCardProps } from '@/lib/definitions';

export default function IndexPage() {
  const {
    translations: { indexPage, contactForm }
  } = useLanguage();

  return (
    <>
      <HeroSection>
        <Title titleType='hero'>{indexPage.hero.title}</Title>
        <Title titleType='heroSubtitle'>{indexPage.hero.subtitle}</Title>
        <DescriptionSection gap='gap-4'>
          {indexPage.hero.description.map((text: string, index: number) => (
            <DescriptionParagraph key={index} text={text} customClass='font-semibold' />
          ))}
        </DescriptionSection>
        <ContactButtons />
      </HeroSection>
      <RegularSection>
        <Title titleType='h2'>{indexPage.about.title}</Title>
        <DescriptionSection>
          {indexPage.about.description.map((text: string, index: number) => (
            <DescriptionParagraph key={index} text={text} />
          ))}
          <LinkButton href='/about' label={indexPage.about.buttonLabel} />
        </DescriptionSection>
      </RegularSection>
      <RegularSection>
        <Title titleType='h2'>{indexPage.projects.title}</Title>
        <DescriptionSection>
          <DescriptionParagraph text={indexPage.projects.description} customClass='font-semibold' />
          <ProjectSection>
            {indexPage.projects.projectsData.map((project: ProjectCardProps) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </ProjectSection>
          <LinkButton href='/projects' label={indexPage.projects.buttonLabel} />
        </DescriptionSection>
      </RegularSection>
      <RegularSection id={ELEMENT_IDS.contactSectionId}>
        <Title titleType='h2'>{indexPage.contact.title}</Title>
        <ContactForm translations={contactForm} />
        <DescriptionSection>
          <DescriptionParagraph
            text={indexPage.contact.description}
            customClass='pt-2 pb-4 font-semibold text-center'
          />
          <ContactButtons />
        </DescriptionSection>
      </RegularSection>
    </>
  );
}
