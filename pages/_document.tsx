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
          "description": "Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!",
          "abstract": "Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!",
          "gameLocation": "Space",
          "applicationCategory": "Game",
          "playMode": "Single-Player",
          "applicationSubCategory": "Arcade Game",
          "genre": "arcade|action",
          "keywords": "[cosmos,cleaner,game,space]",
          "operatingSystem": "[Windows 10,Windows 11]",
          "gamePlatform": "[Windows 10,Windows 11]",
          "url": "https://cosmoscleaner.com",
          "privacyPolicyURL": "https://cosmoscleaner.com/privacy",
          "downloadUrl": "https://cosmoscleaner.com/play",
          "installUrl": "https://cosmoscleaner.com/play",
          "icon": "https://cosmoscleaner.com/gameIcon.png",
          "gameBanner": "https://cosmoscleaner.com/gameBanner.png",
          "thumbnailUrl": "https://cosmoscleaner.com/banner.png",
          "image": "https://cosmoscleaner.com/banner.png",
          "screenshot": "https://cosmoscleaner.com/banner.png",
          "offers": {
            "@type": "Offer",
            "name": "Cosmos Cleaner",
            "description": "Free",
            "price": 0,
            "priceCurrency": "USD"
          },
          "isAccessibleForFree": true,
          "author": {
            "@type": "Person",
            "name": "Derek Perry",
            "url": "https://dp.design",
            "email": "dp@dp.design",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dp.design/media/logo.png"
            }
          },
          "creditText": "Game and Website by Derek Perry",
          "processorRequirements": "Quad-core Intel or AMD, 2.5 GHz or faster",
          "storageRequirements": "2GB",
          "memoryRequirements": "4GB",
          "copyrightNotice": "Cosmos Cleaner © 2023 Derek Perry",
          "copyrightYear": "2023",
          "datePublished": "2023-04-09",
          "dateCreated": "2023-04-09",
          "dateModified": "2023-08-28T20:43",
          "isFamilyFriendly": true,
          "interactivityType": "active",
          "accessibilityControl": [
            "fullKeyboardControl",
            "fullMouseControl",
            "fullTouchControl"
          ],
          "accessibilityHazard": [
            "flashing",
            "motionSimulation",
            "sound"
          ],
          “gameExecutionMode”: “clientside”,
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