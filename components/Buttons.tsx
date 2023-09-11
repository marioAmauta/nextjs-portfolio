import Link from 'next/link';

type LinkButtonProps = {
  href: string;
  label: string;
};

export function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      scroll={false}
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

export function ContactLinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='
        transition-colors duration-300
        bg-[--btn-bg-color]
        px-4 py-2
        rounded-lg
        shadow
        text-center text-lg font-semibold
      '
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
      className='
      bg-zinc-600
      text-white
        px-2 py-1
        rounded-2xl
      '
    >
      {label}
    </Link>
  );
}
