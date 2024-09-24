import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function range({ start, stop, step = 1 }: { start: number; stop: number; step?: number }) {
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
