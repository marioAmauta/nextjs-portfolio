export function Footer({
  translations
}: {
  translations: Record<string, string>;
}) {
  return (
    <footer className="border-t border-[--border-color] p-4 lg:px-5% xl:px-10% 2xl:px-15%">
      <p className="text-center">{translations.madeWithLove}</p>
    </footer>
  );
}
