import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkExternal from '../components/Links/LinkExternal';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const changelogPage: NextPage = () => {
  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner Change Log" description="Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!" url="changelog" image="" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="changelog">
          <section id="contentheader">
            <h1>Cosmos Cleaner Change Log</h1>
            <div className="flex flex-col gap-4 mt-4">
              <ButtonInternal href="" title="Go to the home/index page of CosmosCleaner.com"><p>Go to Homepage</p></ButtonInternal>
            </div>
          </section>

          <section id="changelogs" className="max-w-[1000px] text-left">
            <h2 id="changelogoverview">Change Log Overview</h2>
            <p>Cosmos Cleaner uses a version release system with separate versions for each public change/release on each platform. The format follows v[X].[Y].[Z][PLATFORM] where [X] is a major release, [Y] is a minor release, [Z] is an individual change, and [PLATFORM] is a letter which represents the relevant platform.</p>

            <h2 id="windows">Windows</h2>
              <h3 id="001"><LinkExternal href="https://dropbox.com/scl/fi/ujch6x2veyd2k6kwuu1u5/Cosmos-Cleaner-v0.0.1w.zip?rlkey=j4l75xw633i82b6f21soribrm&dl=1" title="Download v0.0.1w">v0.0.1w</LinkExternal></h3>
                <p>Released Nov 16, 2023 at 02:01 EST</p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Released as Early Access</li>
                </ul>
              <h3 id="002"><LinkExternal href="https://dropbox.com/scl/fi/ptwz321thamgkd9ezz4p2/Cosmos-Cleaner-v0.0.2w.zip?rlkey=cmc2psukypp8j0zk32itkicqr&dl=1" title="Download v0.0.2w">v0.0.2w</LinkExternal></h3>
                <p>Released Nov 26, 2023 at 22:57 EST</p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Replaced clutter system with more modular setup</li>
                  <li>Removed cargo display from HUD to display in a cargo menu instead</li>
                  <li>Moved weight display from right to left side of HUD</li>
                </ul>
              <h3 id="0033"><LinkExternal href="https://dropbox.com/scl/fi/afb7hjtusek94edwchq6w/Cosmos-Cleaner-v0.0.3.3w.zip?rlkey=594ozzqjhucbxxak25snlpmi5&dl=1" title="Download v0.0.3.3w">v0.0.3.3w</LinkExternal></h3>
                <p>Released Dec 23, 2023 at 22:55 EST</p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Fixed clutter amount incrementing after collection</li>
                  <li>Added HUD notifications for collected cargo (disappears after 5 seconds)</li>
                  <li>Adjusted weight display on HUD to disappear after 5 seconds</li>
                  <li>Added collected cargo to cargo bay</li>
                </ul>
              <h3 id="0035"><LinkExternal href="https://dropbox.com/scl/fi/8psehendksjg8sp0p3pzj/Cosmos-Cleaner-v0.0.3.5w.zip?rlkey=nqdd5caqucif01mgtfw2p42ek&dl=1" title="Download v0.0.3.5w">v0.0.3.5w</LinkExternal></h3>
                <p>Released Dec 29, 2023 at 14:55 EST</p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added cargo management in the form of dropping and selling picked up clutter</li>
                  <li>Fixed modular clutter colors</li>
                  <li>Fixed menu buttons</li>
                </ul>
              <h3 id="0037"><LinkExternal href="https://dropbox.com/scl/fi/hb4il2awfx8mgb9an44o3/Cosmos-Cleaner-v0.0.3.7w.zip?rlkey=6nb9pureygwu6eilkfps8e2fa&dl=1" title="Download v0.0.3.7w">v0.0.3.7w</LinkExternal></h3>
                <p>Released Dec 30, 2023 at 22:55 EST</p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added clutter buying while at homebase</li>
                  <li>Improved clutter buy/sell logic</li>
                  <li>Added Nickel clutter type</li>
                </ul>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default changelogPage;