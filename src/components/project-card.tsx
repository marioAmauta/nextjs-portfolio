import { useTranslations } from "next-intl";
import Image from "next/image";

import { ProjectData } from "@/lib/definitions";

import { GithubIcon, GlobeIcon } from "@/components/icons";
import { LinkExternal, TechLinkButton } from "@/components/link-button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  const tabsValues = {
    mobile: t("mobileTab"),
    desktop: t("desktopTab")
  };

  return (
    <Card className="group size-full overflow-hidden pt-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Tabs defaultValue={tabsValues.mobile}>
        <TabsContent value={tabsValues.mobile}>
          <Carousel className="bg-linear-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950">
            <CarouselContent>
              {imageSrc.mobile.map((src, i) => (
                <CarouselItem key={src}>
                  <Image
                    src={src}
                    width={375}
                    height={812}
                    alt={t("imageMobileAlt", { title, imageNumber: i + 1 })}
                    className="mx-auto h-72 w-fit rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 cursor-pointer" />
            <CarouselNext className="right-4 cursor-pointer" />
          </Carousel>
        </TabsContent>
        <TabsContent value={tabsValues.desktop}>
          <Carousel className="bg-linear-to-r from-slate-300 via-slate-800 to-slate-300 p-4 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950">
            <CarouselContent>
              {imageSrc.desktop.map((src, i) => (
                <CarouselItem key={src}>
                  <Image
                    src={src}
                    width={1920}
                    height={1080}
                    alt={t("imageDesktopAlt", { title, imageNumber: i + 1 })}
                    className="rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 cursor-pointer" />
            <CarouselNext className="right-4 cursor-pointer" />
          </Carousel>
        </TabsContent>
        <TabsList className="mx-auto dark:bg-slate-900">
          <TabsTrigger value={tabsValues.mobile} className="cursor-pointer">
            {tabsValues.mobile}
          </TabsTrigger>
          <TabsTrigger value={tabsValues.desktop} className="cursor-pointer">
            {tabsValues.desktop}
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <CardHeader className="space-y-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-pretty">{tProjectDescription(descriptionKey)}</CardDescription>
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
            className="group/button animate-rotate-border rounded-3xl from-background from-80% via-cyan-500 via-90% to-background to-100% p-px transition-transform group-hover:bg-conic/[from_var(--border-angle)] hover:-translate-y-0.5 dark:from-slate-950 dark:via-slate-400 dark:to-slate-950"
          >
            <div className="flex items-center gap-2 rounded-3xl border bg-background px-4 py-2 hover:bg-muted">
              <Icon className="size-5 fill-muted-foreground transition-colors group-hover/button:fill-primary" />
              <span className="font-semibold text-muted-foreground transition-colors group-hover/button:text-primary">
                {label}
              </span>
            </div>
          </LinkExternal>
        ))}
      </CardFooter>
    </Card>
  );
}
