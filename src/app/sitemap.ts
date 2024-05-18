import { MetadataRoute } from "next";
import { AppPathnames, defaultLocale, locales, pathnames } from "@/config";
import { getPathname } from "@/navigation";
import { METADATA_DEFAULT } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const keys = Object.keys(pathnames) as Array<AppPathnames>;

  function getUrl(key: AppPathnames, locale: (typeof locales)[number]) {
    const pathname = getPathname({ locale, href: key });
    return `${METADATA_DEFAULT.siteUrl}${locale}${pathname === "/" ? "" : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getUrl(key, locale)]))
    }
  }));
}
