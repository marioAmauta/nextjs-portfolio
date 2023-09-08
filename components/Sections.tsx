import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
};

export function HeroSection({ children }: SectionProps) {
  return (
    <section
      className='
        flex flex-col justify-evenly items-center
        h-[calc(100svh-var(--header-height))]
        px-4 lg:px-36
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
        px-4 py-16 lg:px-36
      '
    >
      {children}
    </section>
  );
}
