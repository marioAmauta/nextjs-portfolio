import { AppPathnames, Link } from "@/i18n/routing";
import { PropsWithChildren } from "react";

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

export function ButtonLinkExternal({ size, children, href, className }: LinkButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size }), className)}>
      {children}
    </a>
  );
}

export function TechLinkButton({ children, href }: LinkButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Badge variant="outline">{children}</Badge>
    </a>
  );
}
