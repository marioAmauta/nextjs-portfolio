import { ContactLinkButton, LinkButton } from '@/components/Buttons';
import { HeroSection, RegularSection } from '@/components/Sections';
import { Title } from '@/components/Titles';
import { useLanguage } from '@/hooks/useLanguage';
import { CONTACT_LINKS } from '@/lib/constants';

export default function IndexPage() {
  const {
    translations: { indexPage }
  } = useLanguage();

  return (
    <>
      <HeroSection>
        <h1
          className='
            text-5xl font-bold
          '
        >
          {indexPage.hero.title}
        </h1>
        <h2
          className='
            text-3xl text-center font-semibold
            flex flex-col items-center gap-2
          '
        >
          {indexPage.hero.subtitle.map((text: string, index: number) => (
            <span key={index}>{text}</span>
          ))}
        </h2>
        <div className='flex flex-col gap-4 text-center'>
          {indexPage.hero.description.map((text: string, index: number) => (
            <p
              className='
                text-lg font-semibold
              '
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
        <div
          className='
            flex gap-10
          '
        >
          {CONTACT_LINKS.map(({ href, label }) => (
            <ContactLinkButton
              key={href}
              href={href}
              label={label}
            />
          ))}
        </div>
      </HeroSection>
      <RegularSection>
        <Title titleType='h2'>{indexPage.about.title}</Title>
        <div className='flex flex-col gap-8'>
          {indexPage.about.description.map((text: string, index: number) => (
            <p
              className='text-lg'
              key={index}
            >
              {text}
            </p>
          ))}
          <LinkButton
            href='/about'
            label={indexPage.about.buttonLabel}
          />
        </div>
      </RegularSection>
    </>
  );
}
