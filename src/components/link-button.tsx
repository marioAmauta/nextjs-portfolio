import { ExternalLink } from "lucide-react";
import { PropsWithChildren } from "react";

import { AppPathnames, Link } from "@/i18n/routing";

import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";
import { ButtonProps, buttonVariants } from "./ui/button";

type LinkButtonProps = PropsWithChildren<{
  href: string;
  size?: ButtonProps["size"];
  className?: string;
}>;

export function ButtonLink({ children, href, className }: LinkButtonProps) {
  return (
    <Link href={href as AppPathnames} className={cn(buttonVariants(), className)}>
      {children}
    </Link>
  );
}

export function LinkExternal({ children, href, className }: LinkButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function TechLinkButton({ children, href }: LinkButtonProps) {
  return (
    <LinkExternal href={href}>
      <Badge variant="outline" className="flex items-center justify-center gap-2 hover:bg-muted">
        <ExternalLink className="size-3.5" />
        {children}
      </Badge>
    </LinkExternal>
  );
}
