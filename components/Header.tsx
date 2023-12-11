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
      className='sticky top-0 z-30 flex h-[--header-height] items-center justify-between border-b border-[--border-color] bg-[--app-bg-color] p-4 transition-all duration-300 lg:px-36 2xl:px-96'
    >
      <Link href='/' className='text-xl'>
        Mario Programador
      </Link>
      <div className='flex items-center justify-center gap-4 md:flex-row-reverse md:gap-6'>
        <LanguageSwitcher />
        <Menu />
      </div>
    </header>
  );
}
