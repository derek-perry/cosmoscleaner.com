import Image from 'next/image'
import LinkInternal from "../Links/LinkInternal"
import LinkExternal from "../Links/LinkExternal"

const PageFooter = (): JSX.Element => {
  let currentYear: number=new Date().getFullYear();

  return (
      <footer className="mt-9 pt-[40px] pb-[35px] w-full flex flex-row flex-wrap items-center justify-center border-t">
          <LinkInternal href="" title="Cosmos Cleaner" className="no-underline">
            <p>© {currentYear} Cosmos Cleaner</p>
          </LinkInternal>
          <p className="pr-2 pl-2"> - </p>
          <LinkInternal href="privacy" title="Privacy Policy" className="no-underline">
            <p>Privacy Policy</p>
          </LinkInternal>
          <p className="pr-2 pl-2"> - </p>
          <LinkInternal href="copyright" title="Copyright/Licenses" className="no-underline">
            <p>Copyright/Licenses</p>
          </LinkInternal>
          <p className="pr-2 pl-2"> - </p>
          <LinkExternal href="https://dp.design" title="Derek Perry" className="no-underline flex flex-row">
            <p>Game by Derek Perry <Image className="pl-2 inline" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="Derek Perry dp.design Logo" width={33} height={33} /></p>
          </LinkExternal>
      </footer>
  )
}

export default PageFooter