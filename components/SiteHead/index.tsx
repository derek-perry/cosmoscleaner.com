import { FC } from 'react';
import Head from 'next/head';

interface ISiteHeadProps {
  title: string | null;
  description: string | null;
  url: string | null;
  image: string | null;
}

const SiteHead: FC<ISiteHeadProps> = ({
  title,
  description,
  url,
  image
}): JSX.Element => {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL ? process.env.NEXT_PUBLIC_DOMAIN_URL : 'https://cosmoscleaner.com';
  const titleValid = title ? title : '';
  const descriptionValid = description ? description : '';
  const urlValid = url ? url : '';
  const imageValid = image ? image : (siteUrl + '/banner.png');
  const imageAltValid = image ? titleValid : 'Banner for CosmosCleaner.com with centered black text on white background';
  return (
    <Head>
      <meta charSet='UTF-8' />
      <meta name='robots' content='max-snippet:-1,max-image-preview:standard,max-video-preview:-1' />

      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <title>{titleValid}</title>
      <meta property='og:title' key='title' content={titleValid} />
      <meta property='og:description' content={descriptionValid} />
      <meta name='description' content={descriptionValid} />
      <meta property='og:url' content={siteUrl + '/' + urlValid} />
      <meta property='og:site_name' content='Cosmos Cleaner' />
      <meta property='og:image' content={imageValid} />
      <meta property='og:image:width' content='1920' />
      <meta property='og:image:height' content='1080' />
      <meta property='og:image:alt' content={imageAltValid} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@CosmosCleaner' />
      <meta name='twitter:title' content={titleValid} />
      <meta name='twitter:description' content={descriptionValid} />
      <meta name='twitter:image' content={imageValid} />
      <meta name='twitter:image:width' content='1920' />
      <meta name='twitter:image:height' content='1080' />
      <meta name='twitter:image:alt' content={imageAltValid} />

      <link rel='icon' href={siteUrl + '/favicon.ico'} />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#1e3a8a' />
      <link rel='manifest' href={siteUrl + '/manifest.webmanifest'} />
      <meta name="apple-mobile-web-app-title" content="Cosmos Cleaner" />
      <meta name="application-name" content="Cosmos Cleaner" />
      <meta name='msapplication-TileColor' content='#2b5797' />
      <meta name='msapplication-TileImage' content={siteUrl + '/mstile-144x144.png'} />
      <meta name='theme-color' content='#1e3a8a' />
    </Head>
  );
};

export default SiteHead;