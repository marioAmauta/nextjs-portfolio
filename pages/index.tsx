import { ContactLinkButton, LinkButton } from '@/components/Buttons';
import { ProjectCard, ProjectCardProps } from '@/components/ProjectCard';
import {
  DescriptionParagraph,
  DescriptionSection,
  HeroSection,
  RegularSection
} from '@/components/Sections';
import { Title } from '@/components/Titles';
import { useLanguage } from '@/hooks/useLanguage';
import { CONTACT_LINKS } from '@/lib/constants';

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
        <h1
          className='
            text-5xl font-bold
          '
        >
          {indexPage.hero.title}
        </h1>
        <h2
          className='
            text-3xl text-center font-semibold
            flex flex-col items-center gap-2
          '
        >
          {indexPage.hero.subtitle.map((text: string, index: number) => (
            <span key={index}>{text}</span>
          ))}
        </h2>
        <div className='flex flex-col gap-4 text-center'>
          {indexPage.hero.description.map((text: string, index: number) => (
            <p
              className='
                text-lg font-semibold
              '
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        <div
          className='
            flex gap-10
          '
        >
          {CONTACT_LINKS.map(({ href, label }) => (
            <ContactLinkButton
              key={href}
              href={href}
              label={label}
            />
          ))}
        </div>
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
          <DescriptionParagraph text={indexPage.projects.description} />
          <div
            className='
              grid grid-cols-1 md:grid-cols-2 gap-12
            '
          >
            {indexPage.projects.projectsData.map((project: ProjectCardProps) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
          <LinkButton
            href='/projects'
            label={indexPage.projects.buttonLabel}
          />
        </DescriptionSection>
      </RegularSection>
    </>
  );
}
