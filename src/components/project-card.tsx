import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectCardProps } from "@/lib/definitions";

import { ContactLinkButton, TechLinkButton } from "./buttons";

export function ProjectCard({ title, description, image, technologies, links }: ProjectCardProps) {
  const t = useTranslations("ProjectCard");

  return (
    <article className="grid grid-rows-[auto,1fr] overflow-hidden rounded-lg bg-project-card-bg-color text-center shadow-lg dark:bg-project-card-bg-color-dark">
      <Image src={image} alt={title} width={400} height={200} className="w-full" />
      <div className="grid gap-4 px-4 py-8">
        <h2 className="text-center text-2xl font-bold">{title}</h2>
        <p>{description}</p>
        <h3 className="text-xl font-semibold">{t("title2")}</h3>
        <section className="flex flex-wrap justify-center gap-2">
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
