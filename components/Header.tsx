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
        flex justify-between items-center
        p-4
        border-b border-[--border-color]
        sticky top-0 z-30
        bg-[--app-bg-color]
        h-[--header-height]
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
