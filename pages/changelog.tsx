import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkInternal from '../components/Links/LinkInternal';
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
            <p className="my-10">By downloading/playing these versions of Cosmos Cleaner, you agree to the game's <LinkInternal href="tosgame" title="CosmosCleaner.com/tosgame">terms of service</LinkInternal> and <LinkInternal href="privacygame" title="CosmosCleaner.com/privacygame">privacy policy</LinkInternal>.</p>

            <hr />

            <h2 id="windows">Windows Releases</h2>
              <p><strong><LinkInternal href="play" title="CosmosCleaner.com/play">Play Latest Version</LinkInternal></strong></p>
              <p className="text-lg"><strong>How To Start/Play Windows Versions:</strong> Download .zip <em>(click version number)</em>, unzip anywhere, open unzipped folder, open .exe, and play!</p>
              <h3 id="001">v0.0.1w</h3>
                <p className="text-lg"><strong>Released:</strong> Nov 16, 2023 at 02:01 EST</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (434MB) in .zip (243MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Released as Early Access</li>
                </ul>
              <h3 id="002">v0.0.2w</h3>
                <p className="text-lg"><strong>Released:</strong> Nov 26, 2023 at 22:57 EST</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (434MB) in .zip (255MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Replaced clutter system with more modular setup</li>
                  <li>Removed cargo display from HUD to display in a cargo menu instead</li>
                  <li>Moved weight display from right to left side of HUD</li>
                </ul>
              <h3 id="0033">v0.0.3.3w</h3>
                <p className="text-lg"><strong>Released:</strong> Dec 23, 2023 at 22:55 EST</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (438MB) in .zip (250MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Fixed clutter amount incrementing after collection</li>
                  <li>Added HUD notifications for collected cargo (disappears after 5 seconds)</li>
                  <li>Adjusted weight display on HUD to disappear after 5 seconds</li>
                  <li>Added collected cargo to cargo bay</li>
                </ul>
              <h3 id="0035">v0.0.3.5w</h3>
                <p className="text-lg"><strong>Released:</strong> Dec 29, 2023 at 14:55 EST</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (435MB) in .zip (250MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added cargo management in the form of dropping and selling picked up clutter</li>
                  <li>Fixed modular clutter colors</li>
                  <li>Fixed menu buttons</li>
                </ul>
              <h3 id="0037">v0.0.3.7w</h3>
                <p className="text-lg"><strong>Released:</strong> Dec 30, 2023 at 22:55 EST</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (435MB) in .zip (250MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added clutter buying while at homebase</li>
                  <li>Improved clutter buy/sell logic</li>
                  <li>Added Nickel clutter type</li>
                </ul>
              <h3 id="0038">v0.0.3.8w</h3>
                <p className="text-lg"><strong>Released:</strong> Dec 31, 2023 at 12:55 EST</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (435MB) in .zip (255MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added dropping clutter into space from the cargo bay</li>
                  <li>Added buy value and sell value of clutter in cargo display</li>
                  <li>Improved visual separation in clutter cargo display</li>
                </ul>
              <h3 id="0043">v0.0.4.3w</h3>
                <p className="text-lg"><strong>Released:</strong> Mar 25, 2024 at 02:00 EDT</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (306MB) in .zip (202MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Replaced procedural clutter spawning with custom designed maps</li>
                  <li>Replaced launch button with "Continue Cleaning" and "Wait for New Day" buttons</li>
                  <li>Replaced temporary noise material instances</li>
                  <li>Added icon-based buttons</li>
                  <li>Fixed button text showing continue or back incorrectly on the settings menu</li>
                  <li>Adjusted playfield borders to not allow anything outside the playfield</li>
                  <li>Improved CET model slightly to better see what is needed for a final version</li>
                  <li>Improved size and collision accuracy of the CET's tractor and collect areas</li>
                </ul>
              <h3 id="0044">v0.0.4.4w</h3>
                <p className="text-lg"><strong>Released:</strong> Mar 26, 2024 at 21:00 EDT</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (306MB) in .zip (202MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Changed settings menu layout from one-page to tab based menus for cleaner settings management</li>
                  <li>Added MouseMovement mode</li>
                  <li>Improved mobile support for all menus</li>
                </ul>
              <h3 id="0045">v0.0.4.5w</h3>
                <p className="text-lg"><strong>Released:</strong> Mar 27, 2024 at 02:34 EDT</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (306MB) in .zip (207MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Improved HUD layout with a background and better sizing and spacing</li>
                  <li>Added X, Y, and Distance displays to HUD</li>
                  <li>Added day counting and displays</li>
                </ul>
              <h3 id="0046">v0.0.4.6w</h3>
                <p className="text-lg"><strong>Released:</strong> Mar 28, 2024 at 02:35 EDT</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (329MB) in .zip (225MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added new music (menu and in-game) from AGMusic on MelodyLoops</li>
                  <li>Added shuffling between multiple in-game music tracks</li>
                  <li>Changed home menu to be tabbed like the settings menu</li>
                  <li>Changed dashboard to be only a cargo bay</li>
                  <li>Fixed MouseMovement mode reliability issue</li>
                  <li>Added more icons to more buttons</li>
                </ul>
              <h3 id="010">v0.1.0w</h3>
                <p className="text-lg"><strong>Released:</strong> Mar 29, 2024 at 01:05 EDT</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (329MB) in .zip (225MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Cleaned full game loop by ensuring death removes clutter, finishing upgrading/refuel, and running initial balancing</li>
                </ul>
              <h3 id="011"><LinkExternal href="https://dropbox.com/scl/fi/zbl6l2ikxm324q4qyn88z/Cosmos-Cleaner-v0.1.1w.zip?rlkey=ujeph8z337t98363lx3v3ycnl&dl=1" title="Download v0.1.1w">v0.1.1w</LinkExternal></h3>
                <p className="text-lg"><strong>Released:</strong> Mar 29, 2024 at 21:28 EDT</p>
                <p className="text-lg"><strong>Compatibility:</strong> Windows 11/10 (64-bit)</p>
                <p className="text-lg"><strong>File Type/Size:</strong> .exe (330MB) in .zip (230MB)</p>
                <p><strong>Changes:</strong></p>
                <ul className="text-2xl list-disc pl-8">
                  <li>Added more sounds including thrust, death, new click/hover, etc</li>
                  <li>Adjust music and SFX volume levels</li>
                  <li>Improve in-game color and lighting consistency</li>
                  <li>Added particles upon collecting clutter</li>
                  <li>Improve CET model</li>
                </ul>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default changelogPage;