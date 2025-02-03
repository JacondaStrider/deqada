import { defineRouting } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";

export const DEFAULT_LOCALE = "ru" as const;
export const LOCALES = [DEFAULT_LOCALE] as const;

export const routing = defineRouting({
  locales: LOCALES,
  localePrefix: "as-needed",
  defaultLocale: DEFAULT_LOCALE,
});

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    timeZone: "Europe/Moscow",
    messages: (await import(`../intl/locales/${locale}.json`)).default,
  };
});
