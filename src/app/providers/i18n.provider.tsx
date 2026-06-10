"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import i18n from "../translations/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const locale = (params?.locale as string) || "pt";

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <>{children}</>;
}
