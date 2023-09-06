import { ReactNode } from 'react';

export function HeroSection({ children }: { children: ReactNode }) {
  return (
    <section
      className='
        flex flex-col justify-evenly items-center
        h-[calc(100svh-var(--header-height))]
        px-4
      '
    >
      {children}
    </section>
  );
}

export function RegularSection({ children }: { children: ReactNode }) {
  return (
    <section
      className='
        px-4 py-16
      '
    >
      {children}
    </section>
  );
}
