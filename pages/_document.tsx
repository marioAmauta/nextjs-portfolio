import { ELEMENT_IDS } from '@/lib/constants';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-[--app-bg-color] text-[--app-text-color]'>
        <Main />
        <NextScript />
        <Script id={ELEMENT_IDS.themeChecker} strategy='beforeInteractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
      </body>
    </Html>
  );
}
