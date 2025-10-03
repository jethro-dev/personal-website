import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "../fonts";
import SmoothScrollingWrapper from "@/components/smooth-scrolling-wrapper";
import { Analytics } from "@vercel/analytics/react";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s - ${t('title')}`
    },
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  modal,
  params
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={`${poppins.className} !bg-background`}>
            <ThemeProvider>
              <SmoothScrollingWrapper>
                <div vaul-drawer-wrapper="">
                  {children}
                  {modal}
                </div>
              </SmoothScrollingWrapper>
              <Footer />
              <Toaster />
            </ThemeProvider>
            <Analytics />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
