import { ELEMENT_IDS } from '@/lib/constants';
import { useEffect } from 'react';

export function useToggleButton() {
  useEffect(() => {
    function handleActiveClass(event: MouseEvent) {
      const $toggleButton = document.getElementById(ELEMENT_IDS.toggleButtonId);
      const $mobileMenu = document.getElementById(ELEMENT_IDS.mobileMenuId);
      const $bgBlurred = document.getElementById(ELEMENT_IDS.bgBlurredId);
      const $themeButton = document.getElementById(ELEMENT_IDS.themeSelectId);
      const $languageButton = document.getElementById(ELEMENT_IDS.languageSelectId);

      if (event.target instanceof HTMLElement) {
        if (event.target.id === $toggleButton?.id) {
          $toggleButton?.classList.toggle('active');
          $mobileMenu?.classList.toggle('active');
          $bgBlurred?.classList.toggle('active');
        } else if (
          event.target.id === $mobileMenu?.id ||
          event.target.id === $themeButton?.id ||
          event.target.id === $languageButton?.id
        ) {
          return;
        } else {
          $toggleButton?.classList.remove('active');
          $mobileMenu?.classList.remove('active');
          $bgBlurred?.classList.remove('active');
        }
      }
    }

    document.addEventListener('click', handleActiveClass);

    return () => document.removeEventListener('click', handleActiveClass);
  }, []);
}
