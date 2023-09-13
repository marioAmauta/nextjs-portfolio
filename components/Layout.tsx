import { ReactNode } from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { useLanguage } from '@/hooks/useLanguage';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  const { translations } = useLanguage();

  return (
    <div
      className='
        grid grid-rows-[auto,1fr,auto] min-h-[100dvh]
      '
    >
      <Head>
        <title>Mario Programador</title>
        <meta
          name='description'
          content={translations.metaTags.description}
        />
        <meta
          name='theme-color'
          content=''
        />
      </Head>
      <Header constructionLabel={translations.constructionLabel} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
