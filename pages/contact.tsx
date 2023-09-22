import { ContactForm } from '@/components/ContactForm';
import { ContactButtons, DescriptionParagraph } from '@/components/Sections';
import { Title } from '@/components/Titles';
import { useLanguage } from '@/hooks/useLanguage';

export default function ContactPage() {
  const {
    translations: { contactPage, contactForm }
  } = useLanguage();

  return (
    <>
      <Title titleType='h1'>{contactPage.title}</Title>
      <DescriptionParagraph
        text={contactPage.description}
        padding='pt-2 pb-4'
        fontWeight='font-semibold'
      />
      <ContactButtons buttonsMargin='my-6' />
      <ContactForm translations={contactForm} />
    </>
  );
}
