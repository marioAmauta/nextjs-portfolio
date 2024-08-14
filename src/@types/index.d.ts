type LocaleParams = {
  params: {
    locale: string;
  };
};

type NextPageProps = {
  searchParams?: Record<string, string | string[]>;
  params: {
    locale: Languages;
  };
};

type IntlPath = Paths<IntlMessages>;

type NextPage<T = object> = (props: NextPageProps & T) => ReactElement | Promise<ReactElement> | null;

type LayoutProps = Readonly<{
  children: ReactNode;
  params: {
    locale: string;
  };
}>;

type ErrorFileProps = {
  reset: () => void;
  error: Error & { digest?: string };
};

type TranslationKey = MessageKeys<IntlMessages, unknown>;
