import { useLanguage } from '@/hooks/useLanguage';

export default function IndexPage() {
  const {
    translations: { indexPage }
  } = useLanguage();

  return (
    <>
      <h1>{indexPage.title}</h1>
    </>
  );
}
