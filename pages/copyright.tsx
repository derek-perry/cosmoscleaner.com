import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkInternal from '../components/Links/LinkInternal';
import LinkExternal from '../components/Links/LinkExternal';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const CopyrightPage: NextPage = () => {
  let currentYear: number = new Date().getFullYear();

  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner Copyright and Licenses" description="Cosmos Cleaner is copyright 2023-2024. - Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!" url="copyright" image="" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="copyright">
          <section id="contentheader">
            <h1>Cosmos Cleaner Copyright & License Info</h1>
            <div className="flex flex-col gap-4 mt-4">
              <ButtonInternal href="" title="Go to the home/index page of CosmosCleaner.com"><p>Go to Homepage</p></ButtonInternal>
            </div>
          </section>

          <section id="copyrightlicenseoverview" className="max-w-[1000px] text-left">
            <h2 id="copyrightoverview">Copyright Overview</h2>
            <p>Cosmos Cleaner™ is copyright © 2023-{currentYear}. Some rights are reserved. Keep reading to learn more.</p>
            <p>The name "Cosmos Cleaner" is a trademark from 2023 to {currentYear} under the sole ownership of <LinkExternal href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal>.</p>
            <p>The Cosmos Cleaner name, logo, logotype, and icon are trademarks from 2023 to {currentYear} under the sole ownership of <LinkExternal href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal> and the Cosmos Cleaner brand.</p>
            <p>The Cosmos Cleaner's <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="View Cosmos Cleaner by Derek Perry on GitHub">game code on GitHub</LinkExternal> is copyprotected 2023-{currentYear} under the sole ownership of <LinkExternal href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal> and the Cosmos Cleaner brand.</p>

            <h2 id="licenses">License Information</h2>

            <h3 id="game-licenses">In-Game Content Licenses</h3>
            <p>Certain parts of Cosmos Cleaner are licensed content. Below details the individual licenses of in-game content made and not made by <LinkExternal href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal>.</p>
            <p>The Cosmos Cleaner's game itself along with the code/blueprints, scripts, engine content, and other relevant in-game intellectual property is fully read, write, and copy protected (proprietary/closed source) starting in 2023 under the sole ownership of <LinkExternal href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal> and the Cosmos Cleaner brand. Although, certain content used in the development of the Cosmos Cleaner game may be licensed, so read below for more details about that licensed content.</p>
            <p>The paragraph font used in Cosmos Cleaner <em>(specifically for "Cosmos" in the logo, in-game paragraphs, and in-game headings)</em> is <LinkExternal href="https://github.com/cadsondemak/Bai-Jamjuree" title="View Bai Jamjuree on GitHub">Bai Jamjuree</LinkExternal> and was created by <LinkExternal href="https://github.com/itfoundry" title="Go to Cadson Demak, the Creator of Bai Jamjuree, on GitHub">Cadson Demak</LinkExternal> (Copyright 2008 Cadson Demak) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>
            <p>The display font used in Cosmos Cleaner <em>(specifically for "Cleaner" in the logo)</em> is <LinkExternal href="http://www.rdftype.it/?/projects/sonsie/" title="View Sonsie One of Riccardo De Franceschi's Website">Sonsie One</LinkExternal> and was created by <LinkExternal href="http://www.rdftype.it" title="Go to Riccardo De Franceschi, the Creator of Sonsie One, at www.rdftype.it">Riccardo De Franceschi</LinkExternal> (Copyright 2011 Riccardo De Franceschi) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>
            <p>The in-game music used by Cosmos Cleaner is by <LinkExternal href="https://melodyloops.com/composers/agmusic" title="AGMusic on Melody Loops">AGMusic</LinkExternal> and includes <LinkExternal href="https://melodyloops.com/tracks/sparks" title="Visit the music recording source of Sparks by AGMusic on MelodyLoops.com">Sparks</LinkExternal> (main menu), <LinkExternal href="https://melodyloops.com/tracks/unboxing" title="Visit the music recording source of Unboxing by AGMusic on MelodyLoops.com">Unboxing</LinkExternal> (intro cutscene), <LinkExternal href="https://melodyloops.com/tracks/lift-me-up" title="Visit the music recording source of Lift Me Up by AGMusic on MelodyLoops.com">Lift Me Up</LinkExternal>, <LinkExternal href="https://melodyloops.com/tracks/losing-ground" title="Visit the music recording source of Losing Ground by AGMusic on MelodyLoops.com">Losing Ground</LinkExternal>, and <LinkExternal href="https://melodyloops.com/tracks/open-wings" title="Visit the music recording source of Open Wings by AGMusic on MelodyLoops.com">Open Wings</LinkExternal> (<LinkExternal href="https://creativecommons.org/publicdomain/mark/1.0" title="View the Official Public Domain Mark 1.0 License at creativecommons.org/publicdomain/mark/1.0">Public Domain Mark 1.0</LinkExternal>).</p>
            <p>All sound effects (both UI and in-game) used by Cosmos Cleaner were made in <LinkExternal href="https://sfbgames.itch.io/chiptone" title="Visit ChipTone by Tom Vian or SFB Games on itch.io">ChipTone by Tom Vian / SFB Games</LinkExternal> (<LinkExternal href="https://creativecommons.org/publicdomain/zero/1.0" title="View the Official CC0 1.0 Universal License at creativecommons.org/publicdomain/zero/1.0">CC0 1.0 Universal</LinkExternal>).</p>

            <h3 id="website-licenses">Website Licenses</h3>
            <p>Certain parts of Cosmos Cleaner's website (<LinkInternal href="" title="CosmosCleaner.com">CosmosCleaner.com</LinkInternal>) are licensed content. Below details the individual licenses of website content made and not made by <LinkExternal href="https://derek-perry.com" title="Go to Derek Perry's Website at derek-perry.com">Derek Perry</LinkExternal>.</p>
            <p>The paragraph font used on Cosmos Cleaner's websites <em>(specifically for "Cosmos" in the logo, website paragraphs, and website headings)</em> is <LinkExternal href="https://github.com/cadsondemak/Bai-Jamjuree" title="View Bai Jamjuree on GitHub">Bai Jamjuree</LinkExternal> and was created by <LinkExternal href="https://github.com/itfoundry" title="Go to Cadson Demak, the Creator of Bai Jamjuree, on GitHub">Cadson Demak</LinkExternal> (Copyright 2008 Cadson Demak) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>
            <p>The display font used on Cosmos Cleaner's websites <em>(specifically for "Cleaner" in the logo)</em> is <LinkExternal href="http://www.rdftype.it/?/projects/sonsie/" title="View Sonsie One of Riccardo De Franceschi's Website">Sonsie One</LinkExternal> and was created by <LinkExternal href="http://www.rdftype.it" title="Go to Riccardo De Franceschi, the Creator of Sonsie One, at www.rdftype.it">Riccardo De Franceschi</LinkExternal> (Copyright 2011 Riccardo De Franceschi) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>
            <p><LinkInternal href="" title="CosmosCleaner.com">CosmosCleaner.com</LinkInternal> was created using <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter">Next+Tailwind Starter</LinkExternal> which was created using <LinkExternal href="https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss" title="Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss">Next.js + Tailwind CSS Example</LinkExternal>. <LinkInternal href="" title="CosmosCleaner.com">CosmosCleaner.com</LinkInternal>, <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter">Next+Tailwind Starter</LinkExternal>, and the source <LinkExternal href="https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss" title="Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss">Next.js + Tailwind CSS Example</LinkExternal> are licensed under the <LinkExternal href="https://mit.edu/~amini/LICENSE.md" title="View the Official MIT License at mit.edu/~amini/LICENSE.md">MIT License</LinkExternal>.</p>

            <h2 id="changes">Copyright and License Changes</h2>
            <p>Although most changes are likely to be minor, Cosmos Cleaner may change this copyright and license overview from time to time, and in Cosmos Cleaner’s sole discretion. Cosmos Cleaner encourages users to frequently check this page for any changes to this copyright and license overview. Your continued use of this site after any change in this copyright and license overview will constitute your acceptance of such change.</p>
            <p><i>This copyright and license overview was last updated on July 4, 2024. Visit the <LinkExternal href="https://github.com/derek-perry/cosmoscleaner.com" title="View the repository for CosmosCleaner.com at github.com/derek-perry/cosmoscleaner.com">website files on GitHub</LinkExternal> for version history.</i></p>

            <h2 id="contact-info">Contact Information</h2>
            <p>If you have any questions about this copyright and license overview, please contact Cosmos Cleaner via email at <LinkExternal className="max-sm:break-all" href="mailto:contact@cosmoscleaner.com" title="Contact Cosmos Cleaner via Email at Contact@CosmosCleaner.com">Contact@CosmosCleaner.com</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default CopyrightPage;