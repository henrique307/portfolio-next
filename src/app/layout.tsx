"use client"

import { Providers } from "./providers/i18n.provider";
import Script from "next/script";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" data-theme="forest">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="images/icons/hd.ico" sizes="16x16 32x32 48x48 192x192 512x512" type="image/x-icon" />

        {/* <!-- Open Graph Tags --> */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR.UTF-8" />
        <meta property="og:site_name" content="Hennridev | Desenvolvimento de Software" />
        <meta property="og:title" content="HennriDev - Desenvolvimento Web & Automação" />
        <meta property="og:description" content="Criação de sistemas escaláveis, automação e integrações de API para seu negócio." />
        <meta property="og:image" itemProp="image" content="images/icons/hd.ico" />

        {/* <!-- TODO: imagem deve ser 1200x630 --> */}
        <meta property="og:image:alt" content="HennriDev - Desenvolvimento Web & Automação" />
        <meta property="og:url" content="https://hennridev.work" />
        {/* <!-- Fim Open Graph Tags --> */}

        {/* <!-- Twitter Tags--> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HennriDev - Desenvolvimento Web & Automação" />
        <meta name="twitter:description" content="Desenvolvimento de software especializado em aplicações modernas e escaláveis." />
        <meta name="twitter:url" content="https://hennridev.work" />
        <meta name="twitter:description" content="Henrique Florencio, Desenvolvedor de Software especializado em desenvolvimento web responsivo e escalável!" />
        <meta name="twitter:image" content="images/icons/hd.ico" />
        <meta name="twitter:image:alt" content="HennriDev - Desenvolvimento Web & Automação" />
        {/* <!-- Fim Twitter Tags--> */}

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="description" content="Desenvolvimento de software especializado em aplicações web modernas, responsivas e escaláveis. React, Node.js, API Rest, Integrações e Automação." />
        <meta name="keywords" content="Henrique Florencio, Desenvolvedor, Desenvolvimento, Programador, Software, Fullstack, Frontend, Backend, Mobile, Integração de APIs, Automação, SEO, Google, TypeScript, Java, SQL, React, Node.js, Next.js, MongoDB, API REST, Chatbot, Web Scraping, Freelancer, Website, Aplicativo, Responsivo, UX, UI, Ecommerce, Hennridev" />
        <meta name="title" content="Hennridev | Desenvolvimento de Software" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>HennriDev | Soluções em Desenvolvimento de Software</title>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HennriDev",
              url: "https://hennridev.work",
              logo: "images/icons/hd.ico",
              description:
                "Desenvolvimento de software especializado em aplicações modernas e escaláveis.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55 21 99086-8835",
                contactType: "customer support",
                areaServed: "BR",
                availableLanguage: "Portuguese"
              },
              sameAs: [
                "https://www.linkedin.com/in/henrique-florencio-dev/",
                "https://github.com/henrique307"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
