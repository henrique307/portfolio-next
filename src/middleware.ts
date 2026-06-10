import { NextRequest, NextResponse } from 'next/server';

const locales = ['pt', 'en', 'es'];
const defaultLocale = 'pt';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora arquivos estáticos e API
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Verifica se já tem locale na URL
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!hasLocale) {
    // Redireciona / → /pt
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};