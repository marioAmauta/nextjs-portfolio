import { ReactNode } from 'react';
import { Header } from './Header';
import Head from 'next/head';
import { useLanguage } from '@/hooks/useLanguage';

export function Layout({ children }: { children: ReactNode }) {
  const { translations } = useLanguage();
  return (
    <>
      <Head>
        <title>Mario Programador</title>
        <meta
          name='description'
          content={translations.metaTags.description}
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
