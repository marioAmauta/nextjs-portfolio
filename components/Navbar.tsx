import Link from 'next/link';
import { ELEMENT_IDS, NAVBAR_LINKS } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Navbar() {
  const { translations } = useLanguage();

  return (
    <nav
      id={ELEMENT_IDS.mobileMenuId}
      className='fixed -right-full bottom-0 top-0 flex min-h-screen w-[50%] flex-col items-end gap-8 bg-[--navbar-bg-color] pr-12 pt-[15vh] shadow-lg transition-all duration-300 md:static md:min-h-full md:w-auto md:flex-row md:items-center md:justify-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none md:transition-none'
    >
      {NAVBAR_LINKS.map((link) => (
        <div key={link.name} className='flex h-10 w-full items-center justify-end gap-4 md:flex-row-reverse'>
          <Link href={link.path} className='w-max'>
            {translations.navBar[link.name]}
          </Link>
        </div>
      ))}
      <div className='absolute inset-x-0 bottom-[25vh] md:static md:pl-4'>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
