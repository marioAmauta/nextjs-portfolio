import { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type SectionProps = PropsWithChildren<{ className?: string }>;

export function RegularSection({ children, className }: SectionProps) {
  return <section className={cn("space-y-8", className)}>{children}</section>;
}
