import { CONTACT_LINKS } from '@/lib/constants'
import { ContactLinkButton } from './Buttons'
import { DescriptionParagraphProps, DescriptionSectionProps, SectionProps } from '@/lib/definitions'

export function HeroSection({ children }: SectionProps) {
  return (
    <section
      className='
        flex flex-col justify-evenly items-center
        text-center
        h-[calc(100svh-var(--header-height))]
      '
    >
      {children}
    </section>
  )
}

export function RegularSection({ children, id }: SectionProps) {
  return (
    <section
      id={id ?? ''}
      className='
        py-16
      '
    >
      {children}
    </section>
  )
}

export function ParagraphsSection({ children }: SectionProps) {
  return (
    <div
      className='
        flex flex-col gap-8 py-4
      '
    >
      {children}
    </div>
  )
}

export function DescriptionSection({ children, gap }: DescriptionSectionProps) {
  return (
    <div
      className={`
        flex flex-col ${gap ? gap : 'gap-8'}
      `}
    >
      {children}
    </div>
  )
}

export function DescriptionParagraph({ text, customClass }: DescriptionParagraphProps) {
  return <p className={`text-lg ${customClass ?? ''}`}>{text}</p>
}

export function ButtonsContainer({ children }: SectionProps) {
  return <div className='flex justify-center gap-10'>{children}</div>
}

export function ContactButtons() {
  return (
    <ButtonsContainer>
      {CONTACT_LINKS.map(({ href, label }) => (
        <ContactLinkButton
          key={href}
          href={href}
          label={label}
        />
      ))}
    </ButtonsContainer>
  )
}

export function ProjectSection({ children }: SectionProps) {
  return (
    <section
      className='
        grid grid-cols-1 md:grid-flow-row gap-20
        py-4
      '
    >
      {children}
    </section>
  )
}
