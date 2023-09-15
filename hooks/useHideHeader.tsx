import { useEffect } from 'react';

type HideHeaderProps = {
  headerId: string;
};

export function useHideHeader({ headerId }: HideHeaderProps) {
  useEffect(() => {
    let previousScrollPosition = window.scrollY;

    function handleScroll() {
      let currentScrollPosition = window.scrollY;
      const $header = document.getElementById(headerId);

      if ($header === null) return;

      if (previousScrollPosition > currentScrollPosition) {
        $header.style.top = '0px';
      } else {
        $header.style.top = `-${$header.offsetHeight}px`;
      }

      previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerId]);
}
