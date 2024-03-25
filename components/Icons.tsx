import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faDesktop,
  faMoon,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

export function ThemeIcons({ theme }: { theme: string }) {
  return (
    <FontAwesomeIcon
      icon={theme === "light" ? faSun : theme === "dark" ? faMoon : faDesktop}
    />
  );
}

export function ArrowUpIcon() {
  return <FontAwesomeIcon icon={faArrowUp} />;
}

export function LoadingSpinner() {
  return (
    <div className="absolute right-12 h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-black border-t-black" />
  );
}
