'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const locales = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文' },
  { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'pt-BR', name: 'Portuguese (Brazil)', nativeName: 'Português (BR)' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[180px]">
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc.code} value={loc.code}>
            <span className="mr-2">{loc.nativeName}</span>
            <span className="text-muted-foreground text-xs">({loc.name})</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}