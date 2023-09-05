import Link from 'next/link';
import { PAGE_LINKS } from '@/lib/constants';
import { ToggleButton } from './ToggleButton';
import { useLanguage } from '@/hooks/useLanguage';
import { Navbar, NavbarItem } from './Navbar';
import { BlurredBackground } from './BlurredBackground';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Menu() {
  const { translations } = useLanguage();

  return (
    <>
      <ToggleButton />
      <BlurredBackground />
      <Navbar>
        {PAGE_LINKS.NAVBAR_LINKS.map(link => (
          <NavbarItem key={link.name}>
            <Link href={link.path}>{translations.navBar[link.name]}</Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </Navbar>
    </>
  );
}
