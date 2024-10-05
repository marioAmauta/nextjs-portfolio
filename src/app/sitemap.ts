import { AppPathnames, getPathname, Locale, routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

import { METADATA_DEFAULT } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const keys = Object.keys(routing.pathnames) as Array<AppPathnames>;

  function getUrl(key: AppPathnames, locale: Locale) {
    const pathname = getPathname({ locale, href: key });
    return `${METADATA_DEFAULT.siteUrl}${locale}${pathname === "/" ? "" : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, routing.defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((locale) => [locale, getUrl(key, locale)]))
    }
  }));
}
