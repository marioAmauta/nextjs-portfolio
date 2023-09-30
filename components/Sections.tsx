import { CONTACT_LINKS } from '@/lib/constants';
import { ReactNode } from 'react';
import { ContactLinkButton } from './Buttons';

type SectionProps = {
  children: ReactNode;
  margin?: string;
};

export function HeroSection({ children }: SectionProps) {
  return (
    <section
      className='
        flex flex-col justify-evenly items-center
        text-center
        h-[calc(100svh-var(--header-height))]
      '
    >
      {children}
    </section>
  );
}

export function RegularSection({ children }: SectionProps) {
  return (
    <section
      className='
        py-16
      '
    >
      {children}
    </section>
  );
}

export function ParagraphsSection({ children }: SectionProps) {
  return (
    <div
      className='
        flex flex-col gap-8 py-4
      '
    >
      {children}
    </div>
  );
}

type DescriptionSectionProps = {
  children: ReactNode;
  gap?: string;
};

export function DescriptionSection({ children, gap }: DescriptionSectionProps) {
  return (
    <div
      className={`
        flex flex-col ${gap ? gap : 'gap-8'}
      `}
    >
      {children}
    </div>
  );
}

type DescriptionParagraphProps = {
  text: string;
  fontWeight?: string;
  padding?: string;
};

export function DescriptionParagraph({ text, fontWeight, padding }: DescriptionParagraphProps) {
  return (
    <p className={`text-lg ${fontWeight ? fontWeight : ''} ${padding ? padding : ''}`}>{text}</p>
  );
}

export function ButtonsContainer({ children }: SectionProps) {
  return (
    <div
      className='
        flex justify-center gap-10
      '
    >
      {children}
    </div>
  );
}

export function ContactButtons({ buttonsMargin }: { buttonsMargin?: string }) {
  return (
    <ButtonsContainer>
      {CONTACT_LINKS.map(({ href, label }) => (
        <ContactLinkButton
          key={href}
          href={href}
          label={label}
          margin={buttonsMargin}
        />
      ))}
    </ButtonsContainer>
  );
}

export function ProjectSection({ children }: SectionProps) {
  return (
    <section
      className='
        grid grid-cols-1 md:grid-flow-row gap-20
        py-4
      '
    >
      {children}
    </section>
  );
}
