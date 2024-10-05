import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type TypographyProps = PropsWithChildren<{
  className?: string;
}>;

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
  );
}

export function TypographyH2({ children }: TypographyProps) {
  return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>;
}

export function TypographyH3({ children }: TypographyProps) {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
}

export function TypographyLead({ children }: TypographyProps) {
  return <p className="text-xl text-muted-foreground">{children}</p>;
}

export function TypographyP({ children, className }: TypographyProps) {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
}
