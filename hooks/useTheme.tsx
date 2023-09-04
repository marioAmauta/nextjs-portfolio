import { THEME_SELECT_DATA } from '@/lib/constants';
import { ChangeEvent, useEffect, useState } from 'react';

export function useTheme() {
  const [themeStatus, setThemeStatus] = useState('system');

  function handleThemeChange(event: ChangeEvent<HTMLSelectElement>) {
    const theme = event.target.value;

    if (theme === 'system') {
      localStorage.removeItem('theme');
      setThemeStatus('system');
    } else if (theme === 'light') {
      localStorage.theme = 'light';
      setThemeStatus('light');
    } else if (theme === 'dark') {
      localStorage.theme = 'dark';
      setThemeStatus('dark');
    }
  }

  useEffect(() => {
    function checkDarkMode(isDarkMode: boolean) {
      const $rootElement = document.documentElement;

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && isDarkMode)) {
        $rootElement.classList.add('dark');
        setThemeStatus('dark');
      } else {
        $rootElement.classList.remove('dark');
        setThemeStatus('light');
      }

      setThemeStatus(localStorage.theme || 'system');
    }

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    checkDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => checkDarkMode(matches));

    return () =>
      prefersColorScheme.removeEventListener('change', ({ matches }) => checkDarkMode(matches));
  }, [themeStatus]);

  return {
    ...THEME_SELECT_DATA,
    themeStatus,
    handleThemeChange
  };
}
