import Link from 'next/link';
import { ELEMENT_IDS } from '@/lib/constants';
import { Menu } from './Menu';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useHideHeader } from '@/hooks/useHideHeader';

export function Header() {
  useHideHeader({ headerId: ELEMENT_IDS.mainHeaderId });

  useMobileMenu();

  return (
    <header
      id={ELEMENT_IDS.mainHeaderId}
      className='
          transition-all duration-300
          sticky top-0 z-30
          bg-[--app-bg-color]
          border-b border-[--border-color]
          flex justify-between items-center
          h-[--header-height]
          p-4 lg:px-36 2xl:px-96
        '
    >
      <Link
        href='/'
        className='
            text-xl
          '
      >
        Mario Programador
      </Link>
      <div
        className='
            flex justify-center items-center gap-4 md:flex-row-reverse md:gap-6
          '
      >
        <LanguageSwitcher />
        <Menu />
      </div>
    </header>
  );
}
