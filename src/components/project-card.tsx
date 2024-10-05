import { AppPathnames, Link } from "@/i18n/routing";
import { ArrowRight, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectCardDTO } from "@/lib/dto";

import { ButtonLink } from "@/components/link-button";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

export function ProjectCard({ imageSrc, title, slug, shortDescriptionKey }: ProjectCardDTO) {
  const t = useTranslations("ProjectCard");
  const tProjectDescription = useTranslations("projectDescriptions");

  return (
    <Card className="w-full max-w-lg overflow-hidden">
      <div className="relative bg-gradient-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950">
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
          <DrawerTrigger className="absolute bottom-4 right-4 flex justify-end rounded-full border bg-background p-1 md:bottom-8 md:right-8">
            <ZoomIn className="size-6 cursor-pointer" />
          </DrawerTrigger>
          <DrawerContent className="mx-auto max-w-screen-2xl items-center justify-center gap-6 px-4 pb-4">
            <DrawerClose>
              <Link href={slug as AppPathnames}>
                <DrawerTitle className="underline">{title}</DrawerTitle>
              </Link>
            </DrawerClose>
            <Image
              src={imageSrc.mobile[0]}
              width={375}
              height={812}
              alt={`${title}'s mobile screenshot`}
              className="h-[70vh] max-h-fit w-fit rounded-lg object-contain shadow-xl md:hidden"
            />
            <Image
              src={imageSrc.desktop[0]}
              width={1920}
              height={1080}
              alt={`${title}'s desktop screenshot`}
              className="hidden h-[80vh] w-fit rounded-lg object-contain shadow-xl md:block"
            />
            <DrawerClose>
              <Button variant="outline">{t("closeButton")}</Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{tProjectDescription(shortDescriptionKey as TranslationKey)}</CardDescription>
      </CardHeader>
      <CardFooter className="col-auto grid">
        <ButtonLink href={slug as AppPathnames} className="flex justify-center gap-2">
          {t("viewDetailsLink")}
          <ArrowRight className="size-5" />
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
