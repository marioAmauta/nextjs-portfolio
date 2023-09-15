import Link from 'next/link';
import { ELEMENT_IDS } from '@/lib/constants';
import { Menu } from './Menu';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useHideHeader } from '@/hooks/useHideHeader';

export function Header({ constructionLabel }: { constructionLabel: string }) {
  const tempHeaderId = 'temporal-header';

  useHideHeader({ headerId: tempHeaderId });

  useMobileMenu();

  return (
    <div
      id={tempHeaderId}
      className='
        transition-all duration-300
        sticky top-0 z-30
        bg-[--app-bg-color]
      '
    >
      <div className='text-center border-b border-[--border-color]'>{constructionLabel}</div>
      <header
        id={ELEMENT_IDS.mainHeaderId}
        className='
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
    </div>
  );
}
