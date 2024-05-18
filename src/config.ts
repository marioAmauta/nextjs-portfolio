import { Pathnames } from "next-intl/navigation";
import { APP_LINKS } from "@/lib/constants";

export const defaultLocale = "en" as const;
export const locales = [defaultLocale, "es"] as const;

const { home, about, projects } = APP_LINKS;

export const pathnames = {
  [home]: home,
  [about]: { en: about, es: "/acerca" },
  [projects]: { en: projects, es: "/proyectos" }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
