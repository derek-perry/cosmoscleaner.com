import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"
import Image from 'next/image'

const homePage: NextPage = () => {
  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner" description="Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!" url="" />

      <main className="py-20 px-9 max-w-[1250px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <Image
          src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnLight-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnLight-Padded-Horizontal.svg'}
          width={1000}
          height={500}
          alt="Cosmos Cleaner"
          className="max-md:hidden"
        />
        <Image
          src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnLight-Padded.svg' || './CosmosCleaner_Logotype_ColorOnLight-Padded.svg'}
          width={500}
          height={500}
          alt="Cosmos Cleaner"
          className="md:hidden"
        />
        <h1 className="mt-6 font-normal text-3xl max-sm:text-2xl">Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!</h1>

        <p className="mt-24 mb-20 text-white bg-lime-500 py-3 px-5 font-bold text-lg rounded-md">
          Coming Soon
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default homePage