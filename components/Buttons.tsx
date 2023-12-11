import Link from 'next/link';
import { ArrowUpIcon } from './Icons';
import { LinkButtonProps } from '@/lib/definitions';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function LinkButton({ href, label, customClass }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`
        block w-max rounded-lg bg-[--btn-bg-color] px-4 py-2 text-center text-lg font-semibold shadow transition-colors duration-300
        ${customClass ?? ''}
      `}
    >
      {label}
    </Link>
  );
}

export function ContactLinkButton({ href, label, customClass }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`
        w-28 rounded-lg bg-[--btn-bg-color] px-4 py-2 text-center text-lg font-semibold shadow transition-colors duration-300
        ${customClass ?? ''}
      `}
    >
      {label}
    </Link>
  );
}

export function TechLinkButton({ label, href }: LinkButtonProps) {
  return (
    <Link
      key={href}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='rounded-2xl bg-[--btn-bg-color] px-2 py-1 text-[--app-text-color]'
    >
      {label}
    </Link>
  );
}

export function ArrowUpButton() {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <button
      className={`
        bottom-8 right-8 rounded-full bg-[--btn-bg-color] px-4 py-2 text-center text-lg font-semibold text-[--app-text-color] shadow-xl
        ${isVisible ? 'fixed' : 'hidden'}
      `}
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </button>
  );
}
