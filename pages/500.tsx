import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"

const error500Page: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Error 500: Internal Server Error" description="Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game." url="500" />

      <main className="py-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col text-center items-center justify-center">
        <h1 className="text-6xl font-bold text-red-600">Error 500: Internal Server Error</h1>

        <p className="my-4 text-2xl">
          The server encountered an internal error or misconfiguration and was unable to complete your request.
        </p>

        <p className="my-4 text-2xl">
          <LinkInternal href="" title="Return to Index Page">Go Home</LinkInternal>
        </p>
      </main>

      <PageFooter />
    </div>
  )
}

export default error500Page