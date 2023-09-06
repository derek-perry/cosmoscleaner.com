import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="bg-blue-900 text-cyan-100 text-xl w-full">
        <div className="pt-14 pb-12 px-9 flex flex-col gap-y-10 text-center items-center justify-center">
          <LinkInternal href="" title="Cosmos Cleaner">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg'}
              width={500}
              height={95}
              alt="Cosmos Cleaner"
              className="max-md:hidden"
            />
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded.svg'}
              width={300}
              height={300}
              alt="Cosmos Cleaner"
              className="md:hidden"
            />
          </LinkInternal>
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
              <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="press" title="Media/Press Kit">Media/Press Kit</LinkInternal>
              <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>
              <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="copyright" title="Copyright/Licenses">Copyright/Licenses</LinkInternal>
          </div>
          <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
                <p><LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500 no-underline" href="" title="Cosmos Cleaner">Cosmos Cleaner</LinkInternal> © {currentYear}</p>
                <p>Game and Website by <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://dp.design" title="Go to Derek Perry's Website at dp.design">Derek Perry</LinkExternal> <Image className="pl-2 inline" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="" width={33} height={33} /></p>
          </div>
        </div>
      </footer>
  )
}

export default PageFooter