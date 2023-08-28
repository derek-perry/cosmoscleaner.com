import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="bg-cyan-900 text-cyan-100 text-xl mt-9 w-full">
        <div className="pt-[40px] pb-[35px] flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center">
              <LinkInternal href="privacy" title="Privacy Policy" className="no-underline">
                <p>Privacy Policy</p>
              </LinkInternal>
              <p className="pr-2 pl-2"> - </p>
              <LinkInternal href="copyright" title="Copyright/Licenses" className="no-underline">
                <p>Copyright/Licenses</p>
              </LinkInternal>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center">
              
                <p>© {currentYear} <LinkInternal href="" title="Cosmos Cleaner" className="no-underline">Cosmos Cleaner</LinkInternal></p>
              
              <p className="pr-2 pl-2"> - </p>
              
                <p>Game and Website by <LinkExternal href="https://dp.design" title="Go to Derek Perry's Website at dp.design" className="no-underline">Derek Perry</LinkExternal> <Image className="pl-2 inline" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="" width={33} height={33} /></p>
              
          </div>
        </div>
      </footer>
  )
}

export default PageFooter