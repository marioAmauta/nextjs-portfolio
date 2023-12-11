export function Footer({ translations }: { translations: Record<string, string> }) {
  return (
    <footer className='border-t border-[--border-color] p-4 lg:px-36 2xl:px-96'>
      <p className='text-center'>{translations.madeWithLove}</p>
    </footer>
  );
}
