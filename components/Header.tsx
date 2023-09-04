import Link from 'next/link';
import { ELEMENT_IDS } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';

export function Header() {
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
        className='text-xl'
      >
        Mario Programador
      </Link>
      <MobileMenu />
    </header>
  );
}
