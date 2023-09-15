import { DescriptionParagraph, RegularSection } from '@/components/Sections';
import { Title } from '@/components/Titles';
import { useLanguage } from '@/hooks/useLanguage';

export default function AboutPage() {
  const { translations } = useLanguage();

  return (
    <>
      <RegularSection>
        <Title titleType='h1'>{translations.aboutPage.title}</Title>
        <DescriptionParagraph text={translations.aboutPage.description} />
      </RegularSection>
    </>
  );
}
