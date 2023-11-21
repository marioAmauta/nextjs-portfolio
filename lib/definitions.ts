import { ReactNode } from 'react'

export type LinkWithLabel = {
  label: string
  href: string
}

export type ProjectCardProps = {
  title: string
  description: string[]
  image: string
  title2: string
  technologies: LinkWithLabel[]
  links: LinkWithLabel[]
}

export type LinkButtonProps = {
  href: string
  label: string
  customClass?: string
}

export type SectionProps = {
  children: ReactNode
  margin?: string
  id?: string
}

export type DescriptionParagraphProps = {
  text: string
  customClass?: string
}

export type DescriptionSectionProps = {
  children: ReactNode
  gap?: string
}

export type TitleProps = {
  children: ReactNode
  titleType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hero' | 'heroSubtitle'
  customClass?: string
}

export type isMessageSentType = 'not sent yet' | 'sent' | 'error'

export type HideHeaderProps = { headerId: string }

export type ModalProps = {
  message: string
  buttonLabel: string
  onClickClose: () => void
} & useModalProps

export type useModalProps = {
  isActive: boolean
}

export type ProjectData = {
  title: string
  images: {
    desktop: string
  }
  links: {
    sourceCode: string
    liveDemo: string
  }
}
