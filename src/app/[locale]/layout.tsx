import { Metadata } from "next";
import { ReactNode } from "react";
import { METADATA_DEFAULT } from "@/lib/constants";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { IntlClientProvider } from "@/providers/next-intl-provider";
import { NextThemesProvider } from "@/providers/next-themes-provider";
import { locales } from "@/config";
import { Header } from "@/components/header.client";
import { Footer } from "@/components/footer";
import { ArrowUpButton } from "@/components/buttons.client";

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
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="grid min-h-screen-dynamic grid-rows-pancake-stack bg-[--app-bg-color] text-[--app-text-color]">
        <NextThemesProvider>
          <IntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="px-4 lg:px-5% xl:px-10% 2xl:px-15%">{children}</main>
            <Footer />
            <ArrowUpButton />
          </IntlClientProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
