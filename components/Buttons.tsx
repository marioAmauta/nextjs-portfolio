import Link from 'next/link';

type LinkButtonProps = {
  href: string;
  label: string;
  openNewTab?: boolean;
};

export function LinkButton({ href, label, openNewTab }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={openNewTab ? '_blank' : '_self'}
      rel='noopener noreferrer'
      className='
        transition-colors duration-300
        bg-[--btn-bg-color]
        px-4 py-2
        w-max
        rounded-lg
        shadow
        text-center text-lg font-semibold
      '
    >
      {label}
    </Link>
  );
}

type ContactLinkButtonProps = Omit<LinkButtonProps, 'openNewTab'>;

export function ContactLinkButton({ href, label }: ContactLinkButtonProps) {
  return (
    <Link
      href={href}
      className='
        transition-colors duration-300
        bg-[--btn-bg-color]
        px-4 py-2
        w-28
        rounded-lg
        shadow
        text-center text-lg font-semibold
      '
    >
      {label}
    </Link>
  );
}
