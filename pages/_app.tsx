import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
  usePreserveScroll();

  return (
    <Layout>
      <Component {...pageProps} />
      <SpeedInsights />
    </Layout>
  );
}
