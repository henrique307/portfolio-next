import { notFound } from "next/navigation";

const locales = ["pt", "en", "es"];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  return children;
}
