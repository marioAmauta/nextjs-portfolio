import { Github, Linkedin, Mail } from "lucide-react";
import { ComponentProps, ComponentType } from "react";

import { cn } from "@/lib/utils";

import { LinkExternal } from "@/components/link-button";

import { ButtonCV } from "./button-cv";

interface ContactLink {
  href: string;
  label: string;
  Icon: ComponentType<{ className: string }>;
}

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
    Icon: Mail
  }
];

export function ContactLinks({ className }: ComponentProps<"section">) {
  return (
    <section className={cn("mx-auto flex w-fit gap-6", className)}>
      {CONTACT_LINKS.map(({ href, label, Icon }) => {
        if (href.includes("mailto:")) {
          return (
            <a
              key={href}
              href={href}
              className="group flex flex-col items-center fill-muted-foreground text-muted-foreground"
            >
              <Icon className="size-6 transition-colors" />
              <span className="transition-colors group-hover:text-primary">{label}</span>
            </a>
          );
        }

        return (
          <LinkExternal
            key={href}
            href={href}
            className="group flex flex-col items-center fill-muted-foreground text-muted-foreground"
          >
            <Icon className="size-6 transition-colors" />
            <span className="transition-colors group-hover:text-primary">{label}</span>
          </LinkExternal>
        );
      })}
      <ButtonCV />
    </section>
  );
}
