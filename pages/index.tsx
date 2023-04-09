import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"

const homePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Cosmos Cleaner</title>
        <link rel="icon" href={process.env.NEXT_PUBLIC_SITE_URL + '/favicon.ico' || './favicon.ico'} />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <div className="flex w-full flex-row items-center justify-center text-center">
          <h1 className="text-6xl font-bold">Cosmos Cleaner</h1>
      </div>

      <p className="my-4 text-2xl">
        <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          Coming Soon
        </code>
      </p>

      <div className="flex w-full flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">View </p>
        <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="Cosmos Cleaner Game GitHub"><p className="mt-3 text-2xl">Game GitHub</p></LinkExternal>
      </div>

      <div className="flex w-full flex-row items-center justify-center text-center">
        <p className="mt-3 pr-2 text-2xl">View </p>
        <LinkExternal href="https://github.com/derek-perry/CosmosCleaner-Website" title="Cosmos Cleaner Website GitHub"><p className="mt-3 text-2xl">Website GitHub</p></LinkExternal>
      </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div
          className="flex items-center justify-center gap-2"
        >
          <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="Cosmos Cleaner Game GitHub" className="no-underline"><p>Cosmos Cleaner</p></LinkExternal> - <LinkExternal href="https://dp.design" title="Derek Perry" className="no-underline"><p>Derek Perry</p></LinkExternal>{' '}
          <Image src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="Derek Perry dp.design Logo" width={50} height={50} />
        </div>
      </footer>
    </div>
  )
}

export default homePage