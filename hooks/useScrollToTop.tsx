import { useEffect, useState } from 'react';

export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollLimit = 1000;

      if (document.documentElement.scrollTop > scrollLimit) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isVisible, scrollToTop };
}
