"use client";

import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { ButtonLinkExternal, TechLinkButton } from "./link-button";

type LinkWithLabel = {
  label: string;
  href: string;
};

export type ProjectCardProps = {
  title: string;
  descriptionKey: TranslationKey;
  imageSrc: string;
  technologies: LinkWithLabel[];
  links: {
    sourceCode: string;
    liveDemo: string;
  };
};

export function ProjectCard({ imageSrc, title, technologies, descriptionKey, links }: ProjectCardProps) {
  const t = useTranslations("ProjectCard");

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc} alt={`${title}'s image`} fill={true} />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{descriptionKey}</CardDescription>
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map(({ label, href }) => (
            <TechLinkButton href={href} key={href}>
              {label}
            </TechLinkButton>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="grid grid-cols-2 gap-8">
        <ButtonLinkExternal href={links.liveDemo} className="flex justify-center gap-2">
          <ExternalLink className="size-4" />
          {t("liveDemo")}
        </ButtonLinkExternal>
        <ButtonLinkExternal href={links.sourceCode} className="flex justify-center gap-2">
          <Github className="size-4" />
          {t("sourceCode")}
        </ButtonLinkExternal>
      </CardFooter>
    </Card>
  );
}
