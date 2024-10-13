import { ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectData } from "@/lib/definitions";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

import { GithubIcon, GlobeIcon } from "./icons";
import { LinkExternal, TechLinkButton } from "./link-button";

export function ProjectCard({ imageSrc, title, descriptionKey, technologies, liveUrl, repoUrl }: ProjectData) {
  const t = useTranslations("ProjectCard");
  const tProjectDescription = useTranslations("projectDescriptions");

  return (
    <Card className="w-full max-w-lg overflow-hidden">
      <div className="group/image relative bg-gradient-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950">
        <Image
          src={imageSrc.mobile[0]}
          width={375}
          height={812}
          alt={`${title}'s mobile screenshot`}
          className="mx-auto h-72 w-fit rounded-lg object-contain lg:hidden"
        />
        <Image
          src={imageSrc.desktop[0]}
          width={1920}
          height={1080}
          alt={`${title}'s desktop screenshot`}
          className="hidden rounded-lg object-cover lg:block"
        />
        <Drawer>
          <DrawerTrigger className="absolute bottom-4 right-4 flex justify-end rounded-full border bg-background p-1 transition-transform group-hover/image:scale-110 md:bottom-8 md:right-8">
            <ZoomIn className="size-6 cursor-pointer" />
          </DrawerTrigger>
          <DrawerContent className="mx-auto max-w-screen-2xl items-center justify-center gap-6 px-4 pb-4">
            <div className="flex w-full items-center justify-between px-4">
              <DrawerTitle>{title}</DrawerTitle>
              <DrawerClose>
                <Button variant="outline">{t("closeButton")}</Button>
              </DrawerClose>
            </div>
            <Image
              src={imageSrc.mobile[0]}
              width={375}
              height={812}
              alt={`${title}'s mobile screenshot`}
              className="h-[80vh] w-fit rounded-lg object-contain shadow-xl md:hidden"
            />
            <Image
              src={imageSrc.desktop[0]}
              width={1920}
              height={1080}
              alt={`${title}'s desktop screenshot`}
              className="hidden h-[80vh] w-fit rounded-lg object-contain shadow-xl md:block"
            />
          </DrawerContent>
        </Drawer>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{tProjectDescription(descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {technologies.map(({ href, label }) => (
          <TechLinkButton key={href} href={href}>
            {label}
          </TechLinkButton>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end gap-4">
        <LinkExternal
          href={repoUrl}
          className="group flex items-center gap-2 rounded px-3 py-2 transition-colors hover:bg-muted"
        >
          <GithubIcon className="size-4 fill-muted-foreground group-hover:fill-primary" />
          {t("code")}
        </LinkExternal>
        <LinkExternal
          href={liveUrl}
          className="group flex items-center gap-2 rounded px-3 py-2 transition-colors hover:bg-muted"
        >
          <GlobeIcon className="size-4 fill-muted-foreground group-hover:fill-primary" />
          {t("project")}
        </LinkExternal>
      </CardFooter>
    </Card>
  );
}
