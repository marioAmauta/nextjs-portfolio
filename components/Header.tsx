import Link from 'next/link';
import { ELEMENT_IDS } from '@/lib/constants';
import { Menu } from './Menu';
import { useMobileMenu } from '@/hooks/useMobileMenu';

export function Header() {
  useMobileMenu();

  return (
    <header
      id={ELEMENT_IDS.mainHeaderId}
      className='
        flex justify-between items-center
        p-4
        shadow-sm 
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
      <Menu />
    </header>
  );
}
