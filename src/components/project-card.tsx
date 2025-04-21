import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectData } from "@/lib/definitions";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { GithubIcon, GlobeIcon, ImagesStackIcon } from "./icons";
import { LinkExternal, TechLinkButton } from "./link-button";
import { buttonVariants } from "./ui/button";
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
    <Card className="flex h-full w-full max-w-lg flex-col overflow-hidden">
      <div className="relative bg-linear-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950">
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
        <Dialog>
          <DialogTrigger
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon"
              }),
              "absolute right-4 bottom-4 rounded-lg"
            )}
          >
            <ImagesStackIcon className="fill-primary size-6 transition-transform hover:scale-110" />
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
      <CardHeader className="space-y-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{tProjectDescription(descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {technologies.map(({ href, label }) => (
            <TechLinkButton key={href} href={href}>
              {label}
            </TechLinkButton>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto flex justify-end gap-2">
        {links.map(({ label, href, Icon }) => (
          <LinkExternal
            key={href}
            href={href}
            className={cn(
              buttonVariants({
                variant: "outline"
              }),
              "group hover:bg-muted flex items-center gap-2 rounded-3xl px-4 py-2 transition-colors"
            )}
          >
            <Icon className="fill-muted-foreground group-hover:fill-primary size-5 transition-colors" />
            <span className="text-muted-foreground group-hover:text-primary font-semibold transition-colors">
              {label}
            </span>
          </LinkExternal>
        ))}
      </CardFooter>
    </Card>
  );
}
