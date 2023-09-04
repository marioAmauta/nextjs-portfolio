import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body
        className='
          bg-[--app-bg-color] text-[--app-text-color]
        '
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
