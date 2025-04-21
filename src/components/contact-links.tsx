import { ComponentProps, ComponentType } from "react";

import { cn } from "@/lib/utils";

import { EmailIcon, GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/icons";
import { LinkExternal } from "@/components/link-button";

interface ContactLink {
  href: string;
  label: string;
  Icon: ComponentType<{ className: string }>;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    href: "https://github.com/marioAmauta",
    label: "Github",
    Icon: GithubIcon
  },
  {
    href: "https://www.linkedin.com/in/marioamauta/",
    label: "Linkedin",
    Icon: LinkedinIcon
  },
  {
    href: "https://x.com/marioAmauta",
    label: "Twitter",
    Icon: XTwitterIcon
  },
  {
    href: "mailto:mariodevcl@gmail.com",
    label: "Email",
    Icon: EmailIcon
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
              className="group fill-muted-foreground text-muted-foreground flex flex-col items-center"
            >
              <Icon className="group-hover:fill-primary size-6 transition-colors" />
              <span className="group-hover:text-primary transition-colors">{label}</span>
            </a>
          );
        }

        return (
          <LinkExternal
            key={href}
            href={href}
            className="group fill-muted-foreground text-muted-foreground flex flex-col items-center"
          >
            <Icon className="group-hover:fill-primary size-6 transition-colors" />
            <span className="group-hover:text-primary transition-colors">{label}</span>
          </LinkExternal>
        );
      })}
    </section>
  );
}
