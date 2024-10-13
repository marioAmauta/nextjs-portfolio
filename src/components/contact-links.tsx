import { ComponentProps, ComponentType } from "react";

import { cn } from "@/lib/utils";

import { EmailIcon, GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/icons";
import { LinkExternal } from "@/components/link-button";

type ContactLink = {
  href: string;
  Icon: ComponentType<{ className: string }>;
};

const CONTACT_LINKS: ContactLink[] = [
  {
    href: "https://github.com/marioAmauta",
    Icon: GithubIcon
  },
  {
    href: "https://www.linkedin.com/in/marioamauta/",
    Icon: LinkedinIcon
  },
  {
    href: "https://x.com/marioAmauta",
    Icon: XTwitterIcon
  },
  {
    href: "mailto:mariodevcl@gmail.com",
    Icon: EmailIcon
  }
];

export function ContactLinks({ className }: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto flex w-fit gap-4", className)}>
      {CONTACT_LINKS.map(({ href, Icon }) => {
        if (href.includes("mailto:")) {
          return (
            <a href={href}>
              <Icon className="size-5 fill-muted-foreground transition-colors hover:fill-primary" />
            </a>
          );
        }

        return (
          <LinkExternal href={href}>
            <Icon className="size-5 fill-muted-foreground transition-colors hover:fill-primary" />
          </LinkExternal>
        );
      })}
    </div>
  );
}
