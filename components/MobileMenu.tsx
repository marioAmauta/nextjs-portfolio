import { ELEMENT_IDS, PAGE_LINKS } from '@/lib/constants';
import Link from 'next/link';
import { ToggleButton } from './ToggleButton';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useLanguage } from '@/hooks/useLanguage';

export function MobileMenu() {
  const { locale, translations, changeLanguage } = useLanguage();

  return (
    <>
      <ToggleButton />
      <div
        id={ELEMENT_IDS.bgBlurredId}
        className='
          fixed inset-0
          w-0
          transition duration-100
          backdrop-blur-sm bg-[--bg-blurred-color]
        '
      />
      <nav
        id={ELEMENT_IDS.mobileMenuId}
        className='
          bg-[--navbar-bg-color]
          pt-28 pr-10
          w-2/3
          fixed -right-full top-0 bottom-0
          transition-all duration-300
          flex flex-col items-end gap-8
          shadow-lg
        '
      >
        <ThemeSwitcher />
        <select
          id={ELEMENT_IDS.languageSelectId}
          onChange={changeLanguage}
          defaultValue={locale}
          className='
            bg-[--select-bg-color] text-[--select-text-color]
            rounded-md  
            p-1
            appearance-none
            text-center
            outline-0
          '
        >
          <option value='en'>EN</option>
          <option value='es'>ES</option>
        </select>
        {PAGE_LINKS.NAVBAR_LINKS.map((link, index) => (
          <Link
            key={link.name}
            href={link.path}
          >
            {translations.navBar[link.name]}
          </Link>
        ))}
      </nav>
    </>
  );
}
