import { FC } from 'react'
import Head from 'next/head'

interface ISiteHeadProps {
  title: string;
  description: string;
  url: string;
}

const SiteHead: FC<ISiteHeadProps> = ({
  title,
  description,
  url
}): JSX.Element => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + '/' + url || 'https://cosmoscleaner.com'} />
      <meta property="og:site_name" content="Cosmos Cleaner" />
      <meta property="og:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.png' || 'https://cosmoscleaner.com/banner.png'} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Banner for CosmosCleaner.com with centered black text on white background" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_derekperry" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.png' || 'https://cosmoscleaner.com/banner.png'} />
      <meta name="twitter:image:width" content="1920" />
      <meta name="twitter:image:height" content="1080" />
      <meta name="twitter:image:alt" content="Banner for CosmosCleaner.com with centered black text on white background" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://cosmoscleaner.com'} />

      <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || 'https://cosmoscleaner.com/favicon.ico'} />
      <link rel="manifest" href={process.env.NEXT_PUBLIC_SITE_URL + '/manifest.webmanifest' || 'https://cosmoscleaner.com/manifest.webmanifest'} />
      <meta name="apple-mobile-web-app-title" content="Cosmos Cleaner" />
      <meta name="application-name" content="Cosmos Cleaner" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
    </Head>
  )
}

export default SiteHead