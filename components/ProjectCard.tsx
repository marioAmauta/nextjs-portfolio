import { LinkWithLabel } from '@/pages';
import Image from 'next/image';
import { ContactLinkButton, TechLinkButton } from './Buttons';

export type ProjectCardProps = {
  title: string;
  description: string[];
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
        p-4 mx-auto
        rounded-md
        shadow-md
        flex flex-col gap-4
        w-full max-w-lg
      '
    >
      <h3
        className='
        text-2xl font-bold
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
        w-full
        '
      />
      {description.map((text: string, index: number) => (
        <p key={index}>{text}</p>
      ))}
      <section
        className='
        flex justify-center gap-8
        my-auto
      '
      >
        {links.map(({ label, href }) => (
          <ContactLinkButton
            key={href}
            href={href}
            label={label}
          />
        ))}
      </section>
      <footer>
        <h4
          className='
            text-xl font-semibold mb-4
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
            <TechLinkButton
              key={href}
              href={href}
              label={label}
            />
          ))}
        </section>
      </footer>
    </article>
  );
}
