import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const addJsonLd = () => {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": ["VideoGame", "SoftwareApplication"],
        "name": "Cosmos Cleaner",
        "description": "Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!",
        "abstract": "Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!",
        "gameLocation": "Space",
        "applicationCategory": "GameApplication",
        "applicationSubCategory": "Arcade Game",
        "genre": "arcade",
        "playMode": "Single-Player",
        "keywords": "cosmos, cleaner, game, space",
        "operatingSystem": "Windows 10, Windows 11",
        "gamePlatform": "Windows 10, Windows 11",
        "url": "https://cosmoscleaner.com",
        "downloadUrl": "https://cosmoscleaner.com/play",
        "installUrl": "https://cosmoscleaner.com/play",
        "thumbnailUrl": "https://cosmoscleaner.com/banner.png",
        "image": "https://cosmoscleaner.com/banner.png",
        "screenshot": "https://cosmoscleaner.com/banner.png",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "0",
          "ratingCount": "0"
        },
        "offers": {
          "@type": "Offer",
          "price": 0
        },
        "isAccessibleForFree": true,
        "author": {
          "@type": "Person",
          "name": "Derek Perry",
          "url": "https://dp.design",
          "email": "dp@dp.design",
          "sameAs": [
            "https://github.com/derek-perry",
            "https://twitter.com/_derekperry",
            "https://linkedin.com/in/derek-perry",
            "https://youtube.com/@derek-perry",
            "https://artstation.com/derekperry",
            "https://mastodon.gamedev.place/@dp",
            "https://instagram.com/derekperry",
            "https://threads.net/@derekperry",
            "https://developers.google.com/profile/u/derekperry",
            "https://indiedb.com/members/derekperry",
            "https://derekperry.itch.io",
            "https://twitch.tv/derekperry",
            "https://keybase.io/derekperry",
            "https://gravatar.com/itisperry"
          ]
        },
        "creditText": "Game and Website by Derek Perry",
        "processorRequirements": "Quad-core Intel or AMD 2.5 GHz or faster",
        "storageRequirements": "2GB",
        "memoryRequirements": "4GB",
        "copyrightNotice": "Cosmos Cleaner Copyright 2023 Derek Perry",
        "copyrightYear": "2023",
        "datePublished": "2023-04-09",
        "dateCreated": "2023-04-09",
        "dateModified": "2023-09-06T20:40",
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
        "inLanguage": "en-US"
      }`
    }
  }
  return (
    <Html lang="en">
      <Head>
        <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={addJsonLd()}
          key="item-jsonld"
        />
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