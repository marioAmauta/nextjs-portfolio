import { ThemeSwitcher } from './ThemeSwitcher';

export function Footer() {
  return (
    <footer
      className='
        p-4
        border-t border-[--border-color]
      '
    >
      <ThemeSwitcher />
    </footer>
  );
}
