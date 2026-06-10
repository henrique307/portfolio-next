"use client";

import { I18nProvider } from "./i18n.provider";
import { TanStackProvider } from "./tanstack.provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TanStackProvider>
      <I18nProvider>{children}</I18nProvider>
    </TanStackProvider>
  );
}
