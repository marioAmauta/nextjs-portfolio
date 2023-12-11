import { ReactNode } from 'react';
import Head from 'next/head';
import { Header } from './Header';
import { useLanguage } from '@/hooks/useLanguage';
import { Footer } from './Footer';
import { ArrowUpButton } from './Buttons';
import { METADATA_DEFAULT } from '@/lib/constants';

export function Layout({ children }: { children: ReactNode }) {
  const { translations } = useLanguage();

  return (
    <div className='grid min-h-[100dvh] grid-rows-[auto,1fr,auto]'>
      <Head>
        <title>{METADATA_DEFAULT.title}</title>
        <meta name='title' content={METADATA_DEFAULT.title} />
        <meta name='description' content={translations.metaTags.description} />
        <meta property='og:title' content={METADATA_DEFAULT.title} />
        <meta property='og:description' content={translations.metaTags.description} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content={METADATA_DEFAULT.title} />
        <meta property='og:url' content={METADATA_DEFAULT.siteUrl} />
        <meta property='og:image' content={METADATA_DEFAULT.ogImagePath} />
        <meta property='og:locale:alternate' content='en_EN' />
        <meta property='og:locale:alternate' content='es_ES' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={METADATA_DEFAULT.siteUrl} />
        <meta property='twitter:title' content={METADATA_DEFAULT.title} />
        <meta property='twitter:description' content={translations.metaTags.description} />
        <meta property='twitter:image' content={METADATA_DEFAULT.ogImagePath} />
        <meta name='theme-color' />
        <meta name='google-site-verification' content='8rlBdvD_NNDqp7ZhshtEtbmcT704mAzV4ZDp-Tb1DYI' />
      </Head>
      <Header />
      <main className='px-4 lg:px-36 2xl:px-96'>{children}</main>
      <Footer translations={translations} />
      <ArrowUpButton />
    </div>
  );
}
