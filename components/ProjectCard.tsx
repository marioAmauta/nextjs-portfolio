import { LinkWithLabel } from '@/pages';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  title2: string;
  technologies: LinkWithLabel[];
  links: LinkWithLabel[];
};

export function ProjectCard({
  title,
  description,
  image,
  title2,
  technologies,
  links
}: ProjectCardProps) {
  return (
    <article
      key={title}
      className='
        bg-[--project-card-bg-color]
        p-4
        rounded-md
        shadow-md
        flex flex-col gap-4
        w-full max-w-sm
      '
    >
      <h3
        className='
        text-2xl font-semibold
        '
      >
        {title}
      </h3>
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className='
        rounded-md
        '
      />
      <p>{description}</p>
      <section
        className='
        flex justify-center gap-8
      '
      >
        {links.map(link => (
          <Link
            target='_blank'
            rel='noopener noreferrer'
            key={link.href}
            href={link.href}
            className=''
          >
            {link.label}
          </Link>
        ))}
      </section>
      <h4
        className='
        text-xl font-semibold
      '
      >
        {title2}
      </h4>
      <section
        className='
        flex flex-wrap gap-2
        '
      >
        {technologies.map(({ label, href }) => (
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
        ))}
      </section>
    </article>
  );
}
