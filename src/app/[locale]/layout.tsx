import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";
import { Toaster } from "sonner";

import { Link, Locale, routing } from "@/i18n/routing";

import { METADATA_DEFAULT } from "@/lib/constants";

import { NextThemesProvider } from "@/providers/next-themes-provider";

import { ButtonBackToTop } from "@/components/button-back-to-top";
import { ContactLinks } from "@/components/contact-links";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params<{ locale: Locale }> }): Promise<Metadata> {
  const locale = (await params).locale;

  const t = await getTranslations("HomePage.HeroSection.aboutMe");

  const { title, ogImageSrc, url, keywords } = METADATA_DEFAULT;
  const description = t("p2");
  const images = ogImageSrc[locale];

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

export default async function LocaleLayout({
  children,
  params
}: PropsWithChildren<{ params: Params<{ locale: Locale }> }>) {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="grid min-h-screen-dynamic grid-rows-pancake-stack bg-background">
        <NextThemesProvider>
          <NextIntlClientProvider messages={messages}>
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
            <main className="mx-auto max-w-app-container space-y-16 px-4 py-8">
              {children}
              <Analytics />
              <ButtonBackToTop />
            </main>
            <footer className="border-t">
              <div className="mx-auto max-w-app-container py-6">
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
