import Image from "next/image";
import { ContactLinkButton, TechLinkButton } from "./buttons";
import { ProjectCardProps } from "@/lib/definitions";
import { useTranslations } from "next-intl";

export function ProjectCard({ title, description, image, technologies, links }: ProjectCardProps) {
  const t = useTranslations("ProjectCard");

  return (
    <article className="grid grid-rows-[auto,1fr] overflow-hidden rounded-lg border-4 border-[--project-card-border-color] bg-[--project-card-bg-color] shadow-lg">
      <Image src={image} alt={title} width={400} height={200} className="w-full" />
      <div className="grid gap-4 px-4 py-8">
        <h3 className="text-center text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <h4 className="text-xl font-semibold">{t("title2")}</h4>
        <section className="flex flex-wrap gap-2">
          {technologies.map(({ label, href }) => (
            <TechLinkButton key={href} href={href} label={label} />
          ))}
        </section>
        <section className="flex justify-center gap-4 md:gap-8">
          <ContactLinkButton href={links.sourceCode} label={t("sourceCode")} />
          <ContactLinkButton href={links.liveDemo} label={t("liveDemo")} />
        </section>
      </div>
    </article>
  );
}
