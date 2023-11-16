import Image from 'next/image';
import LinkInternal from '../Links/LinkInternal';
import LinkExternal from '../Links/LinkExternal';

const PageFooter = (): JSX.Element => {
  let currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-cyan-100 text-xl w-full">
      <div className="text-lg pt-14 pb-12 px-9 flex flex-col gap-y-14 text-center items-center justify-center">
        <div className="flex flex-wrap gap-x-20 gap-y-8 text-center items-center justify-center">
          <LinkInternal
              className="max-md:basis-full m-auto flex text-center items-center justify-center" href="" title="Cosmos Cleaner">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded.svg'}
              width={300}
              height={300}
              alt="Cosmos Cleaner"
            />
          </LinkInternal>
          <div className="flex flex-col gap-y-3 text-left items-left max-md:text-center max-md:items-center">
            <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://wiki.cosmoscleaner.com" title="Cosmos Cleaner Wiki">Wiki</LinkExternal>
            <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="press" title="Media/Press Kit">Press</LinkInternal>
          </div>
          <div className="flex flex-col gap-y-3 text-left items-left max-md:text-center max-md:items-center">
            <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>
            <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="tos" title="Terms of Service">Terms of Service</LinkInternal>
            <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="copyright" title="Copyright/Licenses">Copyright/Licenses</LinkInternal>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-center items-center justify-center">
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://x.com/CosmosCleaner" title="CosmosCleaner on X (formerly Twitter)">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/x.svg' || './x.svg'}
              width={42}
              height={42}
              alt="X"
            />
          </LinkExternal>
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://instagram.com/CosmosCleaner" title="CosmosCleaner on Instagram">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/instagram.svg' || './instagram.svg'}
              width={42}
              height={42}
              alt="Instagram"
            />
          </LinkExternal>
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://threads.net/@CosmosCleaner" title="CosmosCleaner on Threads">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/threads.svg' || './threads.svg'}
              width={42}
              height={42}
              alt="Threads"
            />
          </LinkExternal>
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://facebook.com/CosmosCleaner" title="CosmosCleaner on Facebook">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/facebook.svg' || './facebook.svg'}
              width={42}
              height={42}
              alt="Facebook"
            />
          </LinkExternal>
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://youtube.com/@CosmosCleaner" title="CosmosCleaner on YouTube">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/youtube.svg' || './youtube.svg'}
              width={42}
              height={42}
              alt="YouTube"
            />
          </LinkExternal>
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://reddit.com/r/CosmosCleaner" title="CosmosCleaner on Reddit">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/reddit.svg' || './reddit.svg'}
              width={42}
              height={42}
              alt="Reddit"
            />
          </LinkExternal>
          <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://discord.gg/sncuXN5n2q" title="Join the Official Cosmos Cleaner Discord">
            <Image
              src={process.env.NEXT_PUBLIC_SITE_URL + '/discord.svg' || './discord.svg'}
              width={42}
              height={42}
              alt="Discord"
            />
          </LinkExternal>
        </div>
        <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 text-center items-center justify-center">
          <p className="text-lg">Copyright © {currentYear} <LinkInternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500 no-underline" href="" title="Cosmos Cleaner">Cosmos Cleaner</LinkInternal>™</p>
          <p className="text-lg">Game by <LinkExternal className="!text-cyan-100 focus:!text-lime-500 hover:!text-sky-500" href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal> <Image className="pl-2 inline" src={process.env.NEXT_PUBLIC_SITE_URL + '/dp.svg' || './dp.svg'} alt="" width={33} height={33} /></p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;