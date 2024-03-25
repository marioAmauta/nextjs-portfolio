import Image from "next/image";
import { ContactLinkButton, TechLinkButton } from "./Buttons";
import { ProjectCardProps } from "@/lib/definitions";

export function ProjectCard({
  title,
  description,
  image,
  title2,
  technologies,
  links
}: ProjectCardProps) {
  return (
    <article className="grid grid-rows-[auto,1fr] overflow-hidden rounded-lg border-4 border-[--project-card-border-color] bg-[--project-card-bg-color] shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full"
      />
      <div className="grid gap-4 px-4 py-8">
        <h3 className="text-center text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <h4 className="text-xl font-semibold">{title2}</h4>
        <section className="flex flex-wrap gap-2">
          {technologies.map(({ label, href }) => (
            <TechLinkButton key={href} href={href} label={label} />
          ))}
        </section>
        <section className="flex justify-center gap-4 md:gap-8">
          {links.map(({ label, href }) => (
            <ContactLinkButton key={href} href={href} label={label} />
          ))}
        </section>
      </div>
    </article>
  );
}
