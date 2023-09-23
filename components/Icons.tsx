import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faDesktop, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons';

type ThemeIconProps = {
  theme: string;
};

export function ThemeIcons({ theme }: ThemeIconProps) {
  return (
    <FontAwesomeIcon icon={theme === 'light' ? faSun : theme === 'dark' ? faMoon : faDesktop} />
  );
}

export function ArrowUpIcon() {
  return <FontAwesomeIcon icon={faArrowUp} />;
}

export function LoadingSpinner() {
  return (
    <div
      className='
        absolute right-12
        h-4 w-4
        border-2 border-solid border-white border-t-black border-r-black
        rounded-full
        animate-spin
      '
    />
  );
}
