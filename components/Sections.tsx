import { CONTACT_LINKS } from "@/lib/constants";
import { ContactLinkButton } from "./Buttons";
import {
  DescriptionParagraphProps,
  DescriptionSectionProps,
  SectionProps
} from "@/lib/definitions";

export function HeroSection({ children }: SectionProps) {
  return (
    <section className="flex h-[calc(100svh-var(--header-height))] flex-col items-center justify-evenly text-center">
      {children}
    </section>
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

export function DescriptionSection({
  children,
  className
}: DescriptionSectionProps) {
  return (
    <div className={`flex flex-col gap-8 ${className ?? ""}`}>{children}</div>
  );
}

export function DescriptionParagraph({
  text,
  className
}: DescriptionParagraphProps) {
  return <p className={`text-lg ${className ?? ""}`}>{text}</p>;
}

export function ButtonsContainer({ children }: SectionProps) {
  return <div className="flex justify-center gap-10">{children}</div>;
}

export function ContactButtons() {
  return (
    <ButtonsContainer>
      {CONTACT_LINKS.map(({ href, label }) => (
        <ContactLinkButton key={href} href={href} label={label} />
      ))}
    </ButtonsContainer>
  );
}

export function ProjectSection({ children }: SectionProps) {
  return (
    <section className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:gap-12 2xl:grid-cols-3">
      {children}
    </section>
  );
}
