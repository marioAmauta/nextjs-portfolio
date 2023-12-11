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
    function setDarkMode(isDarkMode: boolean) {
      setTheme(localStorage.theme || 'system');

      const $html = document.documentElement;

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && isDarkMode)) {
        $html.classList.add('dark');
      } else {
        $html.classList.remove('dark');
      }
    }

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    setDarkMode(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => setDarkMode(matches));

    return () => prefersColorScheme.removeEventListener('change', ({ matches }) => setDarkMode(matches));
  }, [theme]);

  useEffect(() => {
    function setMetaThemeColor(isDarkMode: boolean) {
      const metaThemeColors = {
        light: '#f5f5f5',
        dark: '#333',
        system: isDarkMode ? '#333' : '#f5f5f5'
      };

      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', metaThemeColors[theme as keyof typeof metaThemeColors]);
    }

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

    setMetaThemeColor(prefersColorScheme.matches);

    prefersColorScheme.addEventListener('change', ({ matches }) => setMetaThemeColor(matches));

    return () => prefersColorScheme.removeEventListener('change', ({ matches }) => setMetaThemeColor(matches));
  });

  return { theme, onThemeChange };
}
