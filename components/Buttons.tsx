import Link from 'next/link'
import { ArrowUpIcon } from './Icons'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { LinkButtonProps } from '@/lib/definitions'

export function LinkButton({ href, label, customClass }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`
        transition-colors duration-300
        bg-[--btn-bg-color]
        px-4 py-2 ${customClass ?? ''}
        w-max
        rounded-lg
        shadow
        text-center text-lg font-semibold
        block
      `}
    >
      {label}
    </Link>
  )
}

export function ContactLinkButton({ href, label, customClass }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`
        transition-colors duration-300
        bg-[--btn-bg-color]
        w-28
        px-4 py-2 ${customClass ?? ''}
        rounded-lg
        shadow
        text-center text-lg font-semibold
      `}
    >
      {label}
    </Link>
  )
}

export function TechLinkButton({ label, href }: LinkButtonProps) {
  return (
    <Link
      key={href}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='
        bg-[--btn-bg-color]
        text-[--app-text-color]
        px-2 py-1
        rounded-2xl
      '
    >
      {label}
    </Link>
  )
}

export function ArrowUpButton() {
  const { isVisible, scrollToTop } = useScrollToTop()

  return (
    <button
      className={`
        ${isVisible ? 'fixed' : 'hidden'} bottom-8 right-8
        bg-[--btn-bg-color]
        px-4 py-2
        rounded-full
        shadow-xl
        text-center text-lg font-semibold text-[--app-text-color]     
      `}
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </button>
  )
}
