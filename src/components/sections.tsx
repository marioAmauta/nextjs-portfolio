import { useTranslations } from "next-intl";

import { APP_LINKS, CONTACT_LINKS, ELEMENT_IDS, PROJECTS_DATA } from "@/lib/constants";
import { SectionProps, ProjectCardProps, DescriptionSectionProps, DescriptionParagraphProps } from "@/lib/definitions";

import { ContactLinkButton, LinkButton } from "./buttons";
import { ContactForm } from "./contact-form";
import { ProjectCard } from "./project-card";
import { Title } from "./titles";

export function BlurredBackground() {
  return <div id={ELEMENT_IDS.bgBlurredId} className="fixed inset-0 min-h-screen w-0 bg-[#00000080] backdrop-blur-sm md:hidden" />;
}

export function ToggleButton() {
  return (
    <div
      id={ELEMENT_IDS.toggleButtonId}
      className="z-50 flex h-10 w-10 cursor-pointer items-center justify-center before:bg-app-text-color after:bg-app-text-color dark:before:bg-app-text-color-dark dark:after:bg-app-text-color-dark md:hidden"
    />
  );
}

export function RegularSection({ children, id }: SectionProps) {
  return (
    <section id={id ?? ""} className="py-16">
      {children}
    </section>
  );
}

export function ParagraphsSection({ children }: SectionProps) {
  return <div className="flex flex-col gap-8 py-4">{children}</div>;
}

export function DescriptionSection({ children, className }: DescriptionSectionProps) {
  return <div className={`flex flex-col gap-8 ${className ?? ""}`}>{children}</div>;
}

export function DescriptionParagraph({ text, className }: DescriptionParagraphProps) {
  return <p className={`text-lg ${className ?? ""}`}>{text}</p>;
}

export function ContactButtons() {
  return (
    <div className="flex justify-center gap-10">
      {CONTACT_LINKS.map(({ href, label }) => (
        <ContactLinkButton key={href} href={href} label={label} />
      ))}
    </div>
  );
}

export function ProjectSection({ children }: SectionProps) {
  return <section className="grid grid-cols-1 gap-16 py-4 sm:grid-cols-2 sm:gap-6 md:gap-10 lg:gap-16 2xl:grid-cols-3">{children}</section>;
}

export function HeroSection() {
  const t = useTranslations("HeroSection");

  return (
    <section className="flex h-[calc(100svh-var(--header-height))] flex-col items-center justify-evenly text-center">
      <Title titleType="hero">{t("title")}</Title>
      <Title titleType="heroSubtitle">{t("subtitle")}</Title>
      <DescriptionSection className="gap-4 font-semibold">
        <DescriptionParagraph text={t("description.p1")} />
        <DescriptionParagraph text={t("description.p2")} />
      </DescriptionSection>
      <ContactButtons />
    </section>
  );
}

export function AboutSection() {
  const t = useTranslations("AboutSection");

  return (
    <RegularSection>
      <Title titleType="h2">{t("title")}</Title>
      <DescriptionSection>
        <DescriptionParagraph text={t("description.p1")} />
        <DescriptionParagraph text={t("description.p2")} />
        <DescriptionParagraph text={t("description.p3")} />
        <LinkButton href={APP_LINKS.about} label={t("buttonLabel")} />
      </DescriptionSection>
    </RegularSection>
  );
}

export function ProjectsSection() {
  const t = useTranslations("ProjectsSection");
  const tProjectsData = useTranslations("projectsData");

  const projectsData = Object.values(PROJECTS_DATA).toReversed().slice(0, 3);

  return (
    <RegularSection>
      <Title titleType="h2">{t("title")}</Title>
      <DescriptionSection>
        <DescriptionParagraph text={t("description")} className="font-semibold" />
        <ProjectSection>
          {projectsData.map((project: ProjectCardProps) => (
            <ProjectCard key={project.title} {...project} description={tProjectsData(project.description as any)} />
          ))}
        </ProjectSection>
        <LinkButton href={APP_LINKS.projects} label={t("buttonLabel")} />
      </DescriptionSection>
    </RegularSection>
  );
}

export function ContactSection() {
  const t = useTranslations("ContactSection");

  return (
    <RegularSection id={ELEMENT_IDS.contactSectionId}>
      <Title titleType="h2">{t("title")}</Title>
      <ContactForm />
      <DescriptionSection>
        <DescriptionParagraph text={t("description")} className="pb-4 pt-2 text-center font-semibold" />
        <ContactButtons />
      </DescriptionSection>
    </RegularSection>
  );
}
