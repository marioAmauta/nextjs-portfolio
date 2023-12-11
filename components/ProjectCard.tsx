import Image from 'next/image';
import { ContactLinkButton, TechLinkButton } from './Buttons';
import { ProjectCardProps } from '@/lib/definitions';

export function ProjectCard({ title, description, image, title2, technologies, links }: ProjectCardProps) {
  return (
    <article className='mx-auto grid w-full max-w-5xl grid-cols-1 items-center overflow-hidden rounded-lg border-[0.10rem] border-[--project-card-border-color] bg-[--project-card-bg-color] shadow-lg md:grid-cols-2'>
      <div className='grid gap-6 md:p-6'>
        <Image src={image} alt={title} width={400} height={200} className='mx-auto w-full shadow md:rounded' />
        <h3 className='hidden text-center text-2xl font-bold md:block'>{title}</h3>
      </div>
      <div className='grid gap-6 p-4 md:p-6'>
        <h3 className='text-center text-2xl font-bold md:hidden'>{title}</h3>
        <p>{description}</p>
        <section className='flex justify-center gap-8'>
          {links.map(({ label, href }) => (
            <ContactLinkButton key={href} href={href} label={label} />
          ))}
        </section>
        <footer>
          <h4 className='pb-6 text-xl font-semibold'>{title2}</h4>
          <section className='flex flex-wrap gap-2'>
            {technologies.map(({ label, href }) => (
              <TechLinkButton key={href} href={href} label={label} />
            ))}
          </section>
        </footer>
      </div>
    </article>
  );
}
