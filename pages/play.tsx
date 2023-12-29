import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkInternal from '../components/Links/LinkInternal';
import ButtonExternal from '../components/Buttons/ButtonExternal';
import Image from 'next/image';

const playPage: NextPage = () => {
  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner" description="Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!" url="play" image="" />

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
        <h1 className="mt-6 mb-20 font-normal text-3xl max-sm:text-2xl">Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!</h1>

        <div className="max-w-[596px] flex flex-wrap items-center align-center justify-center gap-6 mb-20">
          <div className="max-w-[590px] flex flex-col pb-3 px-3 bg-cyan-100 rounded">
            <h2 id="windows">Download for Windows</h2>
            <p className="text-2xl mt-3"><em><strong>DISCLAIMER:</strong> This is Early Access! (Incomplete)</em></p>
            <p className="text-lg">Send feedback with issues, suggestions, etc...</p>
            <div className="h-px mt-3 bg-cyan-900" />
            <p className="text-lg mt-3"><strong>Game Version:</strong> v0.0.3.5w</p>
            <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
            <p className="text-lg"><strong>File Type/Size:</strong> .exe (435MB) in .zip (250MB)</p>
            <p className="text-lg"><strong>How To Start:</strong> Download, unzip anywhere, enter folder, open .exe</p>
            <ButtonExternal className="text-2xl my-4" href="https://dropbox.com/scl/fi/8psehendksjg8sp0p3pzj/Cosmos-Cleaner-0.0.3.5w.zip?rlkey=nqdd5caqucif01mgtfw2p42ek&dl=1" title="Download Cosmos Cleaner for Windows 10/11 (64-bit)">Download</ButtonExternal>
            <p className="text-sm">By downloading/playing, you agree to the game's <LinkInternal href="tosgame" title="CosmosCleaner.com/tosgame">terms of service</LinkInternal> and <LinkInternal href="privacygame" title="CosmosCleaner.com/privacygame">privacy policy</LinkInternal>.</p>
          </div>
          <div className="flex flex-col bg-cyan-100 rounded">
            <h2 id="mac" className="px-4">Mac</h2>
            <p className="mt-8 text-white bg-cyan-900 py-3 px-5 font-bold text-lg rounded-b">
              <em>Planned</em>
            </p>
          </div>
          <div className="flex flex-col bg-cyan-100 rounded">
            <h2 id="linux" className="px-4">Linux</h2>
            <p className="mt-8 text-white bg-cyan-900 py-3 px-5 font-bold text-lg rounded-b">
              <em>Planned</em>
            </p>
          </div>
          <div className="flex flex-col bg-cyan-100 rounded">
            <h2 id="android" className="px-4">Android</h2>
            <p className="mt-8 text-white bg-cyan-900 py-3 px-5 font-bold text-lg rounded-b">
              <em>Planned</em>
            </p>
          </div>
          <div className="flex flex-col bg-cyan-100 rounded">
            <h2 id="ios" className="px-4">iOS</h2>
            <p className="mt-8 text-white bg-cyan-900 py-3 px-5 font-bold text-lg rounded-b">
              <em>Planned</em>
            </p>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default playPage;