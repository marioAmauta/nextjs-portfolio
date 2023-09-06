import Link from 'next/link';

export function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='
        transition-colors duration-300
        bg-[--btn-bg-color] hover:bg-[--btn-hover-bg-color] 
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
