import "./styles.css";

import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";
import { Toaster } from "sonner";

import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import { METADATA_DEFAULT } from "@/lib/constants";

import { NextThemesProvider } from "@/providers/next-themes-provider";

import { ButtonBackToTop } from "@/components/button-back-to-top";
import { ContactLinks } from "@/components/contact-links";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations("HomePage.HeroSection.aboutMe");

  const { title, ogImageSrc, url, keywords } = METADATA_DEFAULT;
  const description = t("p2");
  const images = ogImageSrc[locale as keyof typeof ogImageSrc];

  return {
    title,
    description,
    metadataBase: url,
    keywords,
    verification: {
      google: "8rlBdvD_NNDqp7ZhshtEtbmcT704mAzV4ZDp-Tb1DYI"
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: title,
      url,
      images,
      alternateLocale: ["en_EN", "es_ES"]
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images
    }
  };
}

type LocaleLayoutProps = PropsWithChildren<{
  params: Params<{ locale: Locale }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen-dynamic grid-rows-pancake-stack bg-background grid">
        <NextThemesProvider>
          <NextIntlClientProvider>
            <header className="bg-background/80 dark:bg-background/50 sticky top-0 z-30 border-b backdrop-blur-sm transition-[top] duration-300">
              <div className="h-header-height max-w-app-container mx-auto flex items-center justify-between gap-2 px-4 font-semibold">
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
            <main className="max-w-app-container mx-auto space-y-16 px-4 py-8">
              {children}
              <Analytics />
              <ButtonBackToTop />
            </main>
            <footer className="border-t">
              <div className="max-w-app-container mx-auto py-6">
                <ContactLinks />
              </div>
            </footer>
            <Toaster position="top-center" />
          </NextIntlClientProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
