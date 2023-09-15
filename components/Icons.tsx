import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faDesktop, faMoon, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

type ThemeIconProps = {
  theme: string;
};

export function ThemeIcons({ theme }: ThemeIconProps) {
  return (
    <FontAwesomeIcon icon={theme === 'light' ? faSun : theme === 'dark' ? faMoon : faDesktop} />
  );
}

export function BackArrowIcon() {
  return <FontAwesomeIcon icon={faArrowLeft} />;
}
