import Link from 'next/link';
import { NAVBAR_LINKS } from '@/lib/constants';
import { ToggleButton } from './ToggleButton';
import { useLanguage } from '@/hooks/useLanguage';
import { Navbar, NavbarItem } from './Navbar';
import { BlurredBackground } from './BlurredBackground';

export function Menu() {
  const { translations } = useLanguage();

  return (
    <>
      <ToggleButton />
      <BlurredBackground />
      <Navbar>
        {NAVBAR_LINKS.map(link => (
          <NavbarItem key={link.name}>
            <Link href={link.path}>{translations.navBar[link.name]}</Link>
          </NavbarItem>
        ))}
      </Navbar>
    </>
  );
}
