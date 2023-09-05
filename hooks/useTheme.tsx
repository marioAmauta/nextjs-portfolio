import { THEME_INPUT_DATA } from '@/lib/constants';
import { ChangeEvent, useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('');

  function onThemeChange(event: ChangeEvent<HTMLFormElement>) {
    setTheme(event.target.value);

    if (event.target.value === THEME_INPUT_DATA.system.value) {
      localStorage.removeItem('theme');
    } else if (event.target.value === THEME_INPUT_DATA.light.value) {
      localStorage.theme = THEME_INPUT_DATA.light.value;
    } else if (event.target.value === THEME_INPUT_DATA.dark.value) {
      localStorage.theme = THEME_INPUT_DATA.dark.value;
    }
  }

  useEffect(() => {
    setTheme(localStorage.theme || 'system');

    function checkDarkMode(isDarkMode: boolean) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && isDarkMode)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    checkDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => checkDarkMode(matches));

    return () =>
      prefersColorScheme.removeEventListener('change', ({ matches }) => checkDarkMode(matches));
  }, [theme]);

  return { theme, onThemeChange };
}
