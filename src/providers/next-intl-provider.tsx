"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { PropsWithChildren } from "react";

type IntlClientProviderProps = PropsWithChildren<{
  locale: string;
  messages: AbstractIntlMessages;
}>;

export function IntlClientProvider({ locale, messages, children }: IntlClientProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="America/Santiago">
      {children}
    </NextIntlClientProvider>
  );
}
