import { Locale } from "@/i18n/routing";
import { ExternalLink, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { getProjectCardData, getProjectDetailData } from "@/lib/data";

import { ButtonLinkExternal, TechLinkButton } from "@/components/link-button";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";

export async function generateStaticParams() {
  const projects = getProjectCardData();

  return projects.map((project) => ({
    slug: project.slug
  }));
}

export default function ProjectDetailPage({ params: { slug, locale } }: { params: { slug: string; locale: Locale } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("ProjectDetailPage");
  const tProjectDescriptions = useTranslations("projectDescriptions");
  const projectData = getProjectDetailData(slug);

  if (!projectData) {
    return notFound();
  }

  return (
    <>
      <TypographyH1>{projectData.title}</TypographyH1>
      <section className="grid gap-16 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg md:hidden">
          <Carousel className="group">
            <CarouselContent>
              {projectData.imageSrc.mobile.map((src) => (
                <CarouselItem
                  key={src}
                  className="relative bg-gradient-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950"
                >
                  <Image
                    key={src}
                    width={375}
                    height={812}
                    src={src}
                    alt={`${projectData.title}'s desktop screenshot`}
                    className="mx-auto h-[30vh] w-fit rounded-md object-contain"
                  />
                  <Drawer>
                    <DrawerTrigger className="absolute bottom-3 right-3 flex justify-end rounded-full border bg-background p-1 transition-transform group-hover:scale-110">
                      <ZoomIn className="size-6 cursor-pointer" />
                    </DrawerTrigger>
                    <DrawerContent className="mx-auto max-w-screen-2xl items-center justify-center gap-6 px-4 pb-4">
                      <Image
                        src={src}
                        width={375}
                        height={812}
                        alt={`${projectData.title}'s mobile screenshot`}
                        className="h-[70vh] max-h-fit w-fit rounded-lg object-contain shadow-xl md:hidden"
                      />
                      <DrawerClose>
                        <Button variant="outline">{t("closeButton")}</Button>
                      </DrawerClose>
                    </DrawerContent>
                  </Drawer>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="transition-transform group-hover:scale-110" />
            <CarouselNext className="transition-transform group-hover:scale-110" />
          </Carousel>
        </div>
        <div className="group hidden h-fit overflow-hidden rounded-lg border md:block">
          <Carousel>
            <CarouselContent>
              {projectData.imageSrc.desktop.map((src) => (
                <CarouselItem key={src} className="relative">
                  <Image
                    key={src}
                    src={src}
                    width={1920}
                    height={1080}
                    alt={`${projectData.title}'s desktop screenshot`}
                    className="w-fit object-contain"
                  />
                  <Drawer>
                    <DrawerTrigger className="absolute bottom-4 right-4 flex justify-end rounded-full border bg-background p-1 transition-transform group-hover:scale-110">
                      <ZoomIn className="size-6 cursor-pointer" />
                    </DrawerTrigger>
                    <DrawerContent className="mx-auto max-w-screen-2xl items-center justify-center gap-6 px-4 pb-4">
                      <Image
                        src={src}
                        width={1920}
                        height={1080}
                        alt={`${projectData.title}'s desktop screenshot`}
                        className="h-[80vh] w-fit border object-contain shadow-xl md:block"
                      />
                      <DrawerClose>
                        <Button variant="outline">{t("closeButton")}</Button>
                      </DrawerClose>
                    </DrawerContent>
                  </Drawer>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="transition-transform group-hover:scale-110" />
            <CarouselNext className="transition-transform group-hover:scale-110" />
          </Carousel>
        </div>
        <div className="space-y-10">
          <TypographyH2>{t("title1")}</TypographyH2>
          {projectData.longDescriptionParagraphs.map((p) => (
            <TypographyP key={p}>
              {tProjectDescriptions(`${projectData.longDescriptionKey}.${p}` as TranslationKey)}
            </TypographyP>
          ))}
          <TypographyH2>{t("title2")}</TypographyH2>
          <div className="flex flex-wrap gap-4">
            {projectData.technologies.map(({ href, label }) => (
              <TechLinkButton href={href} key={href}>
                {label}
              </TechLinkButton>
            ))}
          </div>
        </div>
      </section>
      <div className="flex w-full gap-4 pb-8 md:justify-center">
        <ButtonLinkExternal href={projectData.repoUrl} className="group flex justify-center gap-2">
          <ExternalLink className="size-5 transition-transform group-hover:-translate-y-0.5" />
          {t("codeButton")}
        </ButtonLinkExternal>
        <ButtonLinkExternal href={projectData.liveUrl} className="group flex justify-center gap-2">
          <ExternalLink className="size-5 transition-transform group-hover:-translate-y-0.5" />
          {t("projectButton")}
        </ButtonLinkExternal>
      </div>
    </>
  );
}
