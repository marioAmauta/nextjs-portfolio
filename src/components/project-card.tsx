import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectData } from "@/lib/definitions";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { GithubIcon, GlobeIcon, ImagesStackIcon } from "./icons";
import { LinkExternal, TechLinkButton } from "./link-button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { DialogDescription, DialogTitle, Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";

export function ProjectCard({ imageSrc, title, descriptionKey, technologies, liveUrl, repoUrl }: ProjectData) {
  const t = useTranslations("ProjectCard");
  const tProjectDescription = useTranslations("projectDescriptions");

  const links = [
    {
      label: t("code"),
      href: repoUrl,
      Icon: GithubIcon
    },
    {
      label: t("project"),
      href: liveUrl,
      Icon: GlobeIcon
    }
  ];

  return (
    <Card className="w-full max-w-lg overflow-hidden">
      <div className="bg-gradient-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950">
        <Image
          src={imageSrc.mobile[0]}
          width={375}
          height={812}
          alt={t("imageMobileAlt", { title, imageNumber: 1 })}
          className="mx-auto h-72 w-fit rounded-lg object-contain lg:hidden"
        />
        <Image
          src={imageSrc.desktop[0]}
          width={1920}
          height={1080}
          alt={t("imageDesktopAlt", { title, imageNumber: 1 })}
          className="hidden rounded-lg object-cover lg:block"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Dialog>
            <DialogTrigger>
              <ImagesStackIcon className="size-6 fill-primary transition-transform hover:scale-110" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{t("projectScreenshots")}</DialogDescription>
              </DialogHeader>
              <Carousel className="lg:hidden">
                <CarouselContent>
                  {imageSrc.mobile.map((src, i) => (
                    <CarouselItem key={src}>
                      <Image
                        src={src}
                        width={375}
                        height={812}
                        alt={t("imageMobileAlt", { title, imageNumber: i + 1 })}
                        className="mx-auto h-[70vh] w-fit rounded-lg object-contain"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <Carousel className="hidden lg:flex">
                <CarouselContent>
                  {imageSrc.desktop.map((src, i) => (
                    <CarouselItem key={src}>
                      <Image
                        src={src}
                        width={1920}
                        height={1080}
                        alt={t("imageDesktopAlt", { title, imageNumber: i + 1 })}
                        className="mx-auto rounded-lg object-contain"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
        </div>
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
        {links.map(({ label, href, Icon }) => (
          <LinkExternal
            key={href}
            href={href}
            className="group flex items-center gap-3 rounded-3xl px-4 py-2 transition-colors hover:bg-muted"
          >
            <Icon className="size-5 fill-blue-700 dark:fill-blue-500" />
            <span className="font-semibold text-blue-700 underline dark:text-blue-500">{label}</span>
          </LinkExternal>
        ))}
      </CardFooter>
    </Card>
  );
}
