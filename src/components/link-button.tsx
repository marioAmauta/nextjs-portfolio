import { Link, usePathname } from "@/navigation";
import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";
import { ButtonProps, buttonVariants } from "./ui/button";

type LinkButtonProps = ComponentProps<typeof Link> &
  PropsWithChildren<{
    href: ReturnType<typeof usePathname>;
    size?: ButtonProps["size"];
  }>;

export function ButtonLink({ children, href, className }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants(), className)}>
      {children}
    </Link>
  );
}

export function ButtonLinkExternal({ size, children, href, className }: LinkButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size }), className)}>
      {children}
    </Link>
  );
}

export function TechLinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Badge variant="outline">{children}</Badge>
    </Link>
  );
}
