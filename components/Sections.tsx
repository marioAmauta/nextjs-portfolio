import { CONTACT_LINKS } from '@/lib/constants';
import { ReactNode } from 'react';
import { ContactLinkButton } from './Buttons';

type SectionProps = {
  children: ReactNode;
};

export function HeroSection({ children }: SectionProps) {
  return (
    <section
      className='
        flex flex-col justify-evenly items-center
        h-[calc(100svh-var(--header-height))]
        px-4 lg:px-36 2xl:px-96
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
        px-4 py-14 lg:px-36 2xl:px-96
      '
    >
      {children}
    </section>
  );
}

export function DescriptionSection({ children }: SectionProps) {
  return (
    <div
      className='
        flex flex-col gap-8
      '
    >
      {children}
    </div>
  );
}

type DescriptionParagraphProps = {
  text: string;
};

export function DescriptionParagraph({ text }: DescriptionParagraphProps) {
  return <p className='text-lg'>{text}</p>;
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

export function ContactButtons() {
  return (
    <ButtonsContainer>
      {CONTACT_LINKS.map(({ href, label }) => (
        <ContactLinkButton
          key={href}
          href={href}
          label={label}
        />
      ))}
    </ButtonsContainer>
  );
}
