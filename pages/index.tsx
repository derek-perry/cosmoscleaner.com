import type { NextPage } from 'next'
import PageHead from "../components/PageHead"
import PageFooter from "../components/PageFooter"
import LinkExternal from "../components/Links/LinkExternal"

const homePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <PageHead title="Cosmos Cleaner" description="Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game." url="" />

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

      <PageFooter />
    </div>
  )
}

export default homePage