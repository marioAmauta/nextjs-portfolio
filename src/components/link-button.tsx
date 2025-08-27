import { ExternalLink } from "lucide-react";
import { ComponentProps, PropsWithChildren } from "react";

import { Link } from "@/i18n/navigation";

import { ButtonProps } from "@/lib/types";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

type LinkButtonProps = ComponentProps<typeof Link> &
  PropsWithChildren<{
    size?: ButtonProps["size"];
  }>;

type LinkExternalButtonProps = ComponentProps<"a">;

export function ButtonLink({ children, href, className }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(buttonVariants(), className)}>
      {children}
    </Link>
  );
}

export function LinkExternal({ children, href, className, ...props }: LinkExternalButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  );
}

export function TechLinkButton({ children, href, ...props }: LinkExternalButtonProps) {
  return (
    <LinkExternal href={href} {...props}>
      <Badge variant="outline" className="flex items-center justify-center gap-2 hover:bg-muted">
        <ExternalLink className="size-3.5" />
        {children}
      </Badge>
    </LinkExternal>
  );
}
