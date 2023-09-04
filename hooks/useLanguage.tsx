import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { en } from '@/locales/en';
import { es } from '@/locales/es';

export function useLanguage() {
  const router = useRouter();
  const { locale } = router;
  const translations: any = locale === 'en' ? en : es;

  function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value;
    router.push(router.pathname, router.asPath, { locale });
  }

  return { locale, translations, changeLanguage };
}
