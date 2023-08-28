import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script type="application/ld+json" strategy="beforeInteractive">{`
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "@id": "VideoGame",
          "name": "Cosmos Cleaner",
          "description": "Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game.",
          "abstract": "Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game.",
          "gameLocation": "Space",
          "applicationCategory": "Game",
          "playMode": "Single-Player",
          "applicationSubCategory": "Arcade Game",
          "genre": "[Arcade,Action,3rd Person,3D]",
          "keywords": "[cosmos,cleaner,game,space]",
          "operatingSystem": "[Windows 10,Windows 11]",
          "gamePlatform": "[Windows 10,Windows 11]",
          "url": "https://cosmoscleaner.com",
          "downloadUrl": "https://cosmoscleaner.com/play",
          "installUrl": "https://cosmoscleaner.com/play",
          "image": "https://cosmoscleaner.com/banner.png",
          "screenshot": "https://cosmoscleaner.com/banner.png",
          "thumbnailUrl": "https://cosmoscleaner.com/banner.png",
          "offers": {
            "@type": "Offer",
            "name": "Cosmos Cleaner",
            "description": "Free",
            "price": 0,
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Person",
            "name": "Derek Perry",
            "url": "https://dp.design",
            "email": "dp@dp.design"
          },
          "processorRequirements": "Quad-core Intel or AMD, 2.5 GHz or faster",
          "storageRequirements": "2GB",
          "memoryRequirements": "4GB",
          "copyrightNotice": "© 2023 Cosmos Cleaner  -  Game by Derek Perry",
          "copyrightYear": "2023",
          "datePublished": "2023-04-09",
          "interactivityType": "active",
          "inLanguage": "en-US"
        `}</Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'anonymous'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <Script id="plausible-analytics" defer strategy="beforeInteractive" data-domain="cosmoscleaner.com" src="https://plausible.io/js/script.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}