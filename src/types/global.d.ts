import { LOCALES } from "@/config/intl";

declare global {
  type IntlLocale = (typeof LOCALES)[number];
  type Viewport = "mobile" | "tablet" | "desktop";

  type ValueOf<T> = T[keyof T];

  type PageProps<
    P = {},
    SP = { [key: string]: string | string[] | undefined },
  > = {
    params: { locale: IntlLocale } & P;
    searchParams: SP;
  };
}
