export function Footer({ translations }: { translations: Record<string, any> }) {
  return (
    <footer
      className='
        p-4 lg:px-36 2xl:px-96
        border-t border-[--border-color]
      '
    >
      <p className='text-center'>{translations.madeWithLove}</p>
    </footer>
  );
}
