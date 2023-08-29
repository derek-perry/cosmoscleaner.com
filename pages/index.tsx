import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import Image from 'next/image'

const homePage: NextPage = () => {
  return (
    <div className="bg-blue-900 text-cyan-100 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner" description="Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game." url="" />

      <main className="py-9 px-9 max-w-[1100px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <Image
          src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg'}
          width={1000}
          height={500}
          alt="Cosmos Cleaner"
          className="max-md:hidden"
        />
        <Image
          src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded.svg'}
          width={500}
          height={500}
          alt="Cosmos Cleaner"
          className="md:hidden"
        />
        <h1 className="text-3xl"><strong><em>Cosmos Cleaner</em></strong> is a 2.5D space vehicle arcade collect-a-thon game.</h1>

        <p className="my-20 bg-cyan-900 p-3 font-bold text-lg rounded-md">
          Coming Soon
        </p>

        <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center text-2xl">
          <p className="pr-2">View <LinkExternal className="focus:text-lime-500" href="https://github.com/derek-perry/CosmosCleaner" title="Cosmos Cleaner Game GitHub">Game GitHub</LinkExternal></p>
          <p className="pr-2">View <LinkExternal className="focus:text-lime-500" href="https://github.com/derek-perry/CosmosCleaner-Website" title="Cosmos Cleaner Website GitHub">Website GitHub</LinkExternal></p>
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage