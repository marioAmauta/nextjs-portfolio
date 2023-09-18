import { ChangeEvent, useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('');

  function onThemeChange(event: ChangeEvent<HTMLFormElement>) {
    setTheme(event.target.value);

    if (event.target.value === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', event.target.value);
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

  useEffect(() => {
    const metaThemeColors = {
      selector: 'meta[name="theme-color"]',
      light: '#f5f5f5',
      dark: '#333',
      system: ''
    };

    document
      .querySelector(metaThemeColors.selector)
      ?.setAttribute('content', metaThemeColors[theme as keyof typeof metaThemeColors]);
  });

  return { theme, onThemeChange };
}
