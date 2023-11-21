import Image from 'next/image'
import { ContactLinkButton, TechLinkButton } from './Buttons'
import { ProjectCardProps } from '@/lib/definitions'

export function ProjectCard({ title, description, image, title2, technologies, links }: ProjectCardProps) {
  return (
    <article
      className='
        bg-[--project-card-bg-color]
        mx-auto
        border-[0.10rem] border-[--project-card-border-color]
        shadow-lg rounded-lg
        overflow-hidden
        grid grid-cols-1 md:grid-cols-2 items-center
        w-full max-w-5xl
      '
    >
      <div className='grid gap-6 md:p-6'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className='
            w-full
            mx-auto
            shadow
            md:rounded
          '
        />
        <h3 className='text-2xl text-center font-bold hidden md:block'>{title}</h3>
      </div>
      <div className='grid gap-6 p-4 md:p-6'>
        <h3 className='text-2xl text-center font-bold md:hidden'>{title}</h3>
        <p>{description}</p>
        <section className='flex justify-center gap-8'>
          {links.map(({ label, href }) => (
            <ContactLinkButton
              key={href}
              href={href}
              label={label}
            />
          ))}
        </section>
        <footer>
          <h4 className='text-xl font-semibold pb-6'>{title2}</h4>
          <section className='flex flex-wrap gap-2'>
            {technologies.map(({ label, href }) => (
              <TechLinkButton
                key={href}
                href={href}
                label={label}
              />
            ))}
          </section>
        </footer>
      </div>
    </article>
  )
}
