import { FC } from 'react'
import Head from 'next/head'

interface IPageHeadProps {
  title: string;
  description: string;
  url: string;
}

const PageHead: FC<IPageHeadProps> = ({
  title,
  description,
  url
}): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <title>{description}</title>
      <meta charSet="UTF-8" />
      <meta name="robots" content="max-snippet:-1,max-image-preview:standard,max-video-preview:-1" />
      <link rel="manifest" href="/manifest.webmanifest" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.png' || 'https://cosmoscleaner.com/banner.png'} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content="Banner for CosmosCleaner.com with centered black text on white background" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + '/' + url || 'https://cosmoscleaner.com/' + url || 'https://cosmoscleaner.com'} />
      <meta property="og:site_name" content="Cosmos Cleaner" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@_derekperry" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.NEXT_PUBLIC_SITE_URL + '/banner.png' || 'https://cosmoscleaner.com/banner.png'} />
      <meta name="twitter:image:width" content="1920" />
      <meta name="twitter:image:height" content="1080" />
      <meta name="twitter:image:alt" content="Banner for CosmosCleaner.com with centered black text on white background" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || '/'} />

      <meta name="theme-color" content="#000000" />
      <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || 'https://cosmoscleaner.com/favicon.ico'} />
    </Head>
  )
}

export default PageHead