import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Locale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { ComponentProps, ComponentType } from "react";

import { cn } from "@/lib/utils";

import { LinkExternal } from "@/components/link-button";

interface ContactLink {
  href: string;
  label: string;
  Icon: ComponentType<{ className: string }>;
  isMail?: boolean;
}

export async function ContactLinks({ className }: ComponentProps<"section">) {
  const locale = await getLocale();

  const cvTranslation = await getTranslations("ButtonCV");

  const cvs: Record<Locale, string> = {
    en: "/files/cv-en-mario-poblete-ortiz.pdf",
    es: "/files/cv-es-mario-poblete-ortiz.pdf"
  };

  const CONTACT_LINKS: ContactLink[] = [
    {
      href: "https://github.com/marioAmauta",
      label: "Github",
      Icon: Github
    },
    {
      href: "https://www.linkedin.com/in/marioamauta/",
      label: "Linkedin",
      Icon: Linkedin
    },
    {
      href: "mailto:mariodevcl@gmail.com",
      label: "Email",
      Icon: Mail,
      isMail: true
    },
    {
      href: cvs[locale],
      label: cvTranslation("label"),
      Icon: FileDown
    }
  ];

  return (
    <section className={cn("mx-auto flex w-fit gap-6", className)}>
      {CONTACT_LINKS.map(({ href, label, Icon, isMail }) => (
        <LinkExternal
          key={href}
          href={href}
          isMail={isMail}
          className="group flex flex-col items-center text-muted-foreground"
        >
          <Icon className="size-6 transition-colors group-hover:text-primary" />
          <span className="transition-colors group-hover:text-primary">{label}</span>
        </LinkExternal>
      ))}
    </section>
  );
}
