import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import Image from 'next/image'

const homePage: NextPage = () => {
  return (
    <div className="bg-blue-900 text-cyan-100 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner" description="Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game." url="" />

      <main className="py-9 px-9 max-w-[1100px] w-full flex flex-1 flex-col items-center justify-center">
        <Image
          src="/CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg"
          width={1000}
          height={500}
          alt="Cosmos Cleaner"
        />
        <h1 className="text-3xl"><strong><em>Cosmos Cleaner</em></strong> is a 2.5D space vehicle arcade collect-a-thon game.</h1>

        <p className="my-8 text-2xl">
          <code className="bg-cyan-900 p-3 font-mono text-lg rounded-md">
            Coming Soon
          </code>
        </p>

        <div className="w-full flex flex-row items-center justify-center text-center">
          <p className="mt-3 pr-2 text-2xl">View </p>
          <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="Cosmos Cleaner Game GitHub"><p className="mt-3 text-2xl">Game GitHub</p></LinkExternal>
        </div>

        <div className="w-full flex flex-row items-center justify-center text-center">
          <p className="mt-3 pr-2 text-2xl">View </p>
          <LinkExternal href="https://github.com/derek-perry/CosmosCleaner-Website" title="Cosmos Cleaner Website GitHub"><p className="mt-3 text-2xl">Website GitHub</p></LinkExternal>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage