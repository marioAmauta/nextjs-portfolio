import { ReactNode } from 'react';
import { ELEMENT_IDS } from '@/lib/constants';

export function NavbarItem({ children }: { children: ReactNode }) {
  return (
    <div
      className='
        flex justify-end items-center gap-4 md:flex-row-reverse
        w-full h-10
        px-4 md: p-0
      '
    >
      {children}
    </div>
  );
}

export function Navbar({ children }: { children: ReactNode }) {
  return (
    <nav
      id={ELEMENT_IDS.mobileMenuId}
      className='
          bg-[--navbar-bg-color]
          pt-20 md:pt-0
          w-2/3 md:w-auto
          fixed -right-full top-0 bottom-0 md:static 
          transition-all duration-300
          flex flex-col items-end gap-8 md:flex-row md:justify-center md:items-center md:gap-0
          shadow-lg md:shadow-none
        '
    >
      {children}
    </nav>
  );
}
