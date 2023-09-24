import { ReactNode } from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { useLanguage } from '@/hooks/useLanguage';
import { Footer } from './Footer';
import { ArrowUpButton } from './Buttons';

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
        <meta name='theme-color' />
        <meta
          name='google-site-verification'
          content='8rlBdvD_NNDqp7ZhshtEtbmcT704mAzV4ZDp-Tb1DYI'
        />
      </Head>
      <Header />
      <main
        className='
        px-4 lg:px-36 2xl:px-96
        '
      >
        {children}
      </main>
      <Footer translations={translations} />
      <ArrowUpButton />
    </div>
  );
}
