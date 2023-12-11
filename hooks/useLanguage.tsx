import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { en } from '@/locales/en';
import { es } from '@/locales/es';
import { contactLink } from '@/lib/constants';

export function useLanguage() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;

  const withoutContactLink = asPath.replace(contactLink, '/');
  const translations: any = locale === 'en' ? en : es;

  function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value;

    router.push(pathname, withoutContactLink, { locale, scroll: false });
  }

  return { locale, translations, changeLanguage };
}
