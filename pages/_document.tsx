import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script id="plausible-analytics" defer strategy="beforeInteractive" data-domain="cosmoscleaner.com" src="https://plausible.io/js/script.js"></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}