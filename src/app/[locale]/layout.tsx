import { Link, routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Toaster } from "sonner";

import { METADATA_DEFAULT } from "@/lib/constants";

import { IntlClientProvider } from "@/providers/next-intl-provider";
import { NextThemesProvider } from "@/providers/next-themes-provider";

import { ButtonBackToTop } from "@/components/button-back-to-top";

import { ContactLinks } from "@/components/contact-links";
import { Suspense } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
      url: new URL(METADATA_DEFAULT.siteUrl),
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
      <body className="grid min-h-screen-dynamic grid-rows-pancake-stack bg-background">
        <NextThemesProvider>
          <IntlClientProvider locale={locale} messages={messages}>
            <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur transition-[top] duration-300 dark:bg-background/50">
              <div className="mx-auto flex h-header-height max-w-app-container items-center justify-between gap-2 px-4 font-semibold">
                <Link href="/" className="text-lg hover:underline">
                  Mario Programador
                </Link>
                <div className="flex items-center justify-center gap-2">
                  <Suspense>
                    <LanguageSwitcher />
                  </Suspense>
                  <ThemeSwitcher />
                </div>
              </div>
            </header>
            <main className="relative mx-auto max-w-app-container space-y-16 px-4 py-8">
              {children}
              <Analytics />
              <SpeedInsights />
              <ButtonBackToTop />
            </main>
            <footer className="border-t">
              <div className="mx-auto max-w-app-container py-6">
                <ContactLinks />
              </div>
            </footer>
            <Toaster position="top-center" />
          </IntlClientProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
