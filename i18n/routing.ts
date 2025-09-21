import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'zh-TW', 'zh-CN', 'es', 'ja', 'ko', 'de', 'fr', 'ru', 'pt-BR'],

  // The default locale
  defaultLocale: 'en',

  // Locale prefix for URL paths
  localePrefix: 'always'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);