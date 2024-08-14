import { locales } from "@/config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";

import { IntlClientProvider } from "@/providers/next-intl-provider";
import { NextThemesProvider } from "@/providers/next-themes-provider";

import { METADATA_DEFAULT } from "@/lib/constants";

import { ArrowUpButton } from "@/components/buttons.client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header.client";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    title: METADATA_DEFAULT.title,
    description: t("description"),
    metadataBase: new URL(METADATA_DEFAULT.siteUrl),
    verification: { google: "8rlBdvD_NNDqp7ZhshtEtbmcT704mAzV4ZDp-Tb1DYI" },
    openGraph: {
      title: METADATA_DEFAULT.title,
      description: t("description"),
      type: "website",
      siteName: METADATA_DEFAULT.title,
      url: METADATA_DEFAULT.siteUrl,
      images: METADATA_DEFAULT.ogImagePath,
      alternateLocale: ["en_EN", "es_ES"]
    },
    twitter: {
      title: METADATA_DEFAULT.title,
      description: t("description"),
      card: "summary_large_image",
      images: METADATA_DEFAULT.ogImagePath
    },
    keywords: [
      "mario programador",
      "mario developer",
      "programador web",
      "web programmer",
      "desarrollador web",
      "web developer",
      "desarrollador frontend",
      "frontend developer",
      "typescript",
      "javascript",
      "reactjs",
      "react.js",
      "nextjs",
      "next.js",
      "next-intl",
      "next-themes",
      "css",
      "tailwindcss"
    ]
  };
}

export default async function LocaleLayout({ children, params: { locale } }: LayoutProps) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="grid min-h-screen-dynamic grid-rows-pancake-stack bg-app-bg-color text-app-text-color dark:bg-app-bg-color-dark dark:text-app-text-color-dark">
        <NextThemesProvider>
          <IntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="px-4 lg:px-5% xl:px-10% 2xl:px-15%">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
            <ArrowUpButton />
          </IntlClientProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
