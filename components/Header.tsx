import Link from 'next/link';
import { ELEMENT_IDS } from '@/lib/constants';
import { Menu } from './Menu';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  useMobileMenu();

  return (
    <header
      id={ELEMENT_IDS.mainHeaderId}
      className='
        border-b border-[--border-color]
        bg-[--app-bg-color]
        sticky top-0 z-30
        flex justify-between items-center
        h-[--header-height]
        p-4 lg:px-36
      '
    >
      <Link
        href='/'
        className='
          text-xl font-light
        '
      >
        Mario Programador
      </Link>
      <div className='flex justify-center items-center gap-4 md:flex-row-reverse md:gap-10'>
        <LanguageSwitcher />
        <Menu />
      </div>
    </header>
  );
}
