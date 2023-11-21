import { LinkButton } from '@/components/Buttons'
import { DescriptionParagraph, ParagraphsSection } from '@/components/Sections'
import { Title } from '@/components/Titles'
import { useLanguage } from '@/hooks/useLanguage'

export default function AboutPage() {
  const {
    translations: { aboutPage }
  } = useLanguage()

  return (
    <>
      <Title titleType='h1'>{aboutPage.title}</Title>
      <Title titleType='h2'>{aboutPage.subtitle1}</Title>
      <ParagraphsSection>
        {aboutPage.paragraphs1.map((text: string, index: number) => (
          <DescriptionParagraph
            key={index}
            text={text}
          />
        ))}
      </ParagraphsSection>
      <LinkButton
        label={aboutPage.linkButton}
        href='/projects'
        customClass='my-12'
      />
    </>
  )
}
