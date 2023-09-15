import { ELEMENT_IDS } from '@/lib/constants';
import { useEffect } from 'react';

export function useMobileMenu() {
  useEffect(() => {
    function handleActiveClass(event: MouseEvent) {
      const toggleElements = [
        ELEMENT_IDS.toggleButtonId,
        ELEMENT_IDS.mobileMenuId,
        ELEMENT_IDS.bgBlurredId
      ];

      if (event.target instanceof HTMLElement) {
        if (event.target.id === ELEMENT_IDS.toggleButtonId) {
          document.querySelector('body')?.classList.toggle('active');

          toggleElements.forEach(element =>
            document.getElementById(element)?.classList.toggle('active')
          );
        } else if (event.target.id === ELEMENT_IDS.bgBlurredId || event.target.tagName === 'A') {
          document.querySelector('body')?.classList.remove('active');

          toggleElements.forEach(element =>
            document.getElementById(element)?.classList.remove('active')
          );
        }
      }
    }

    document.addEventListener('click', handleActiveClass);

    return () => document.removeEventListener('click', handleActiveClass);
  }, []);
}
