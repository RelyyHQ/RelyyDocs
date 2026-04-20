
import './globals.css'
import 'nextra-theme-docs/style.css'
import Script from 'next/script'
import { Suspense } from 'react'
import { AppThemeProvider } from './theme-provider'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.relyy.app'
const shareImagePath = '/relyy-app-icon.png'

const GTM_CONSENT_DEFAULTS = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
}

export const metadata = {
  title: {
    default: 'Relyy Docs',
    template: '%s | Relyy Docs'
  },
  description: 'Relyy documentation hub',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    images: [
      {
        url: shareImagePath,
        alt: 'Relyy Docs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: [shareImagePath]
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var storedTheme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var isDark = storedTheme === 'dark' || (storedTheme !== 'light' && prefersDark);
                var root = document.documentElement;

                root.classList.toggle('dark', isDark);
                root.style.colorScheme = isDark ? 'dark' : 'light';
              } catch (error) {
                // Ignore theme boot errors so first paint still succeeds.
              }
            })();
          `}
        </Script>
        {GTM_ID ? (
          <>
            <Script id="gtm-consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', ${JSON.stringify(GTM_CONSENT_DEFAULTS)});
                dataLayer.push({
                  event: 'google_consent_default',
                  ...${JSON.stringify(GTM_CONSENT_DEFAULTS)}
                });
              `}
            </Script>
            <Script id="gtm" strategy="lazyOnload">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer',${JSON.stringify(GTM_ID)});
              `}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                title="Google Tag Manager"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        ) : null}
        <AppThemeProvider>
          <Suspense>
          {children}
          </Suspense>
        </AppThemeProvider>
      </body>
    </html>
  )
}