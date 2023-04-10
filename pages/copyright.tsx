import type { NextPage } from 'next'
import PageHead from "../components/PageHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"

const copyrightPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <PageHead title="Cosmos Cleaner Copyright/Licenses" description="Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game. Some rights reserved." url="copyright" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <article id="policy">
          <section id="contentheader" className="py-9">
            <div className="flex w-full flex-row items-center justify-center text-center">
                <h1 className="text-6xl font-bold">Copyright & License Info</h1>
            </div>
            <p className="my-4 text-2xl">
              <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/' || '/'} title="Return to Index Page">Go Home</LinkInternal>
            </p>
          </section>

          <section id="copyrightlicenseoverview" className="py-9 max-w-[800px] text-left">
              <h2 id="copyrights" className="text-4xl font-bold">Copyright Overview</h2>
              <p className="my-4 text-2xl">Cosmos Cleaner is copyright 2023. Some rights are reserved. Keep reading to learn more.</p>
              <p className="my-4 text-2xl">The name "Cosmos Cleaner" is a trademark starting in 2023 under the sole ownership of <LinkExternal href="https://dp.design" title="Go to Derek Perry's Website at dp.design">Derek Perry</LinkExternal>.</p>
              <p className="my-4 text-2xl">The Cosmos Cleaner logo is a trademark starting in 2023 under the sole ownership of <LinkExternal href="https://dp.design" title="Go to Derek Perry's Website at dp.design">Derek Perry</LinkExternal> and the Cosmos Cleaner brand.</p>
              <p className="my-4 text-2xl">The Cosmos Cleaner's <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="View Cosmos Cleaner by Derek Perry on GitHub">game code on GitHub</LinkExternal> is a trademark starting in 2023 under the sole ownership of <LinkExternal href="https://dp.design" title="Go to Derek Perry's Website at dp.design">Derek Perry</LinkExternal> and the Cosmos Cleaner brand.</p>


              <h2 id="licenses" className="text-4xl font-bold">License Information</h2>
              <p className="my-4 text-2xl">Certain parts of Cosmos Cleaner's game code and website are licensed content. Below details the individual licenses of content made and not made by <LinkExternal href="https://dp.design" title="Go to Derek Perry's Website at dp.design">Derek Perry</LinkExternal>.</p>

              <h3 id="licenses-game" className="text-3xl font-bold">Game Content Licenses</h3>
              <p className="my-4 text-2xl">The Cosmos Cleaner's <LinkExternal href="https://github.com/derek-perry/CosmosCleaner-Website" title="View Cosmos Cleaner's Website by Derek Perry on GitHub">website code on GitHub</LinkExternal> is a trademark starting in 2023 under the sole ownership of <LinkExternal href="https://dp.design" title="Go to Derek Perry's Website at dp.design">Derek Perry</LinkExternal> and the Cosmos Cleaner brand.</p>
              <p className="my-4 text-2xl">The font used in Cosmos Cleaner is <LinkExternal href="https://github.com/itfoundry/poppins" title="View Poppins on GitHub">Poppins</LinkExternal> and was created by <LinkExternal href="https://github.com/itfoundry" title="Go to Indian Type Foundry, the Creator of Poppins, on GitHub">Indian Type Foundry</LinkExternal> (Copyright 2014-2019 Indian Type Foundry) (SIL Open Font License 1.1).</p>
              <p className="my-4 text-2xl">The menu music audio used by Cosmos Cleaner is <LinkExternal href="https://musopen.org/music/306-the-hebrides-fingals-cave-op-26/#recordings" title="Visit the music recording source of Felix Mendelssohn's The Hebrides (Fingal's Cave), Op. 26 on musopen.org">Johannes Brahms – Tragic Overture, Op. 81</LinkExternal> by <LinkExternal href="https://musopen.org/music/performer/musopen-symphony" title="Visit Musopen Symphony, the performer/recorder of the music recording for Felix Mendelssohn's The Hebrides (Fingal's Cave), Op. 26, on musopen.org">Musopen Symphony</LinkExternal> (<LinkExternal href="https://creativecommons.org/publicdomain/mark/1.0" title="View the Official Public Domain Mark 1.0 License at creativecommons.org/publicdomain/mark/1.0">Public Domain Mark 1.0</LinkExternal>).</p>
              <p className="my-4 text-2xl">The in-game music audio used by Cosmos Cleaner is <LinkExternal href="https://musopen.org/music/2120-tragic-overture-op-81/#recordings" title="Visit the music recording source of Johannes Brahms' Tragic Overture, Op. 81 on musopen.org">Felix Mendelssohn – The Hebrides (Fingal’s Cave), Op. 26</LinkExternal> by <LinkExternal href="https://musopen.org/music/performer/musopen-symphony" title="Visit Musopen Symphony, the performer/recorder of the music recording for Johannes Brahms' Tragic Overture, Op. 81, on musopen.org">Musopen Symphony</LinkExternal> (<LinkExternal href="https://creativecommons.org/publicdomain/mark/1.0" title="View the Official Public Domain Mark 1.0 License at creativecommons.org/publicdomain/mark/1.0">Public Domain Mark 1.0</LinkExternal>).</p>
              <p className="my-4 text-2xl">The button hover sound used by Cosmos Cleaner is <LinkExternal href="https://freesound.org/people/deadsillyrabbit/sounds/251389" title="Visit the Button Hover sound source on Freesound.org">Button_Hover (ogg) or “A_SFXHover”</LinkExternal> by <LinkExternal href="https://freesound.org/people/deadsillyrabbit" title="Visit deadsillyrabbit, the creator of the Button Hover sound, on Freesound.org">deadsillyrabbit</LinkExternal> (<LinkExternal href="https://creativecommons.org/publicdomain/zero/1.0" title="View the Official CC0 1.0 Universal License at creativecommons.org/publicdomain/zero/1.0">CC0 1.0 Universal</LinkExternal>).</p>
              <p className="my-4 text-2xl">The button click sound used by Cosmos Cleaner is <LinkExternal href="https://freesound.org/people/DuffyBro/sounds/319107" title="Visit the Pop or Button Click sound source on Freesound.org">Pop or “A_SFXClick”</LinkExternal> by <LinkExternal href="https://freesound.org/people/DuffyBro" title="Visit DuffyBro, the creator of the Pop or Button Click sound, on Freesound.org">DuffyBro</LinkExternal> (<LinkExternal href="https://creativecommons.org/publicdomain/zero/1.0" title="View the Official CC0 1.0 Universal License at creativecommons.org/publicdomain/zero/1.0">CC0 1.0 Universal</LinkExternal>).</p>

              <h3 id="licenses-website" className="text-3xl font-bold">Website Licenses</h3>
              <p className="my-4 text-2xl">The font used on Cosmos Cleaner's website is <LinkExternal href="https://github.com/itfoundry/poppins" title="View Poppins on GitHub">Poppins</LinkExternal> and was created by <LinkExternal href="https://github.com/itfoundry" title="Go to Indian Type Foundry, the Creator of Poppins, on GitHub">Indian Type Foundry</LinkExternal> (Copyright 2014-2019 Indian Type Foundry) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>
              <p className="my-4 text-2xl">The Cosmos Cleaner website was created using <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter">Next+Tailwind Starter</LinkExternal> which was created using <LinkExternal href="https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss" title="Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss">Next.js + Tailwind CSS Example</LinkExternal>. If you use <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter">Next+Tailwind Starter</LinkExternal> or <LinkExternal href="https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss" title="Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss">Next.js + Tailwind CSS Example</LinkExternal>, please retain the licenses which were used in the development of <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter">Next+Tailwind Starter</LinkExternal> and <LinkExternal href="https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss" title="Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss">Next.js + Tailwind CSS Example</LinkExternal>. <LinkExternal href="https://github.com/derek-perry/next-tailwind-starter" title="Visit the GitHub repository for this Next+Tailwind Starter at github.com/derek-perry/next-tailwind-starter">Next+Tailwind Starter</LinkExternal> and the source <LinkExternal href="https://github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss" title="Visit the Official Next.js + Tailwind CSS Example that this Starter was Based On at github.com/vercel/next.js/tree/deprecated-main/examples/with-tailwindcss">Next.js + Tailwind CSS Example</LinkExternal> are licensed under the <LinkExternal href="https://mit.edu/~amini/LICENSE.md" title="View the Official MIT License at mit.edu/~amini/LICENSE.md">MIT License</LinkExternal>.</p>


              <h2 id="changes" className="text-4xl font-bold">Copyright/License Changes</h2>
              <p className="my-4 text-2xl">Although most changes are likely to be minor, Cosmos Cleaner may change this Copyright/License Overview from time to time, and in Cosmos Cleaner’s sole discretion. Cosmos Cleaner encourages users to frequently check this page for any changes to this Copyright/License Overview. Your continued use of this site after any change in this Copyright/License Overview will constitute your acceptance of such change.</p>
              <p className="my-4 text-2xl"><i>This Copyright/License Overview was last updated on April 9, 2023.</i></p>


              <h2 id="contact-info" className="text-4xl font-bold">Contact Information</h2>
              <p className="my-4 text-2xl">If you have any questions about this Copyright/License Overview, please contact Derek Perry via email at <LinkExternal href="mailto:dp@dp.design" title="Email Derek Perry at dp@dp.design">dp@dp.design</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  )
}

export default copyrightPage