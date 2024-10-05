import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],
  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/": "/"
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation(routing);

export type AppPathnames = keyof typeof routing.pathnames;

export type Locale = (typeof routing.locales)[number];
