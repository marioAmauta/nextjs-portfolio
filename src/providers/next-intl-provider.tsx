"use client";

import { ReactNode } from "react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export function IntlClientProvider({
  locale,
  messages,
  children
}: {
  locale: string;
  messages: AbstractIntlMessages;
  children: ReactNode;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="America/Santiago">
      {children}
    </NextIntlClientProvider>
  );
}
