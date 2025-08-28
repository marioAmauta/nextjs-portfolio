import { ExternalLink } from "lucide-react";
import { ComponentProps } from "react";

import { Link } from "@/i18n/navigation";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

type ButtonLinkProps = ComponentProps<typeof Link>;

export function ButtonLink({ children, className, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(buttonVariants(), className)} {...props}>
      {children}
    </Link>
  );
}

type LinkExternalProps = ComponentProps<"a"> & { isMail?: boolean };

export function LinkExternal({ children, isMail, ...props }: LinkExternalProps) {
  return (
    <a target={!isMail ? "_blank" : undefined} rel={!isMail ? "noopener noreferrer" : undefined} {...props}>
      {children}
    </a>
  );
}

export function TechLinkButton({ children, ...props }: LinkExternalProps) {
  return (
    <LinkExternal {...props}>
      <Badge variant="outline" className="flex items-center justify-center gap-2 hover:bg-muted">
        <ExternalLink className="size-3.5" />
        {children}
      </Badge>
    </LinkExternal>
  );
}
