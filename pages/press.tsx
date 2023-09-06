import type { NextPage } from 'next'
import SiteHead from "../components/SiteHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"
import ButtonInternal from "../components/Buttons/ButtonInternal"
import Card from "../components/Card"
import Image from 'next/image'

const copyrightPage: NextPage = () => {
  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="Cosmos Cleaner Media/Press Kit" description="This press/media kit features Cosmos Cleaner facts, a description, links, brand color information, and images like logos. The materials in this kit are ready for use in your publications regarding Cosmos Cleaner." url="press" />

      <main className="py-9 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="kit">
          <section id="contentheader" className="py-9">
            <h1 className="text-6xl font-bold">Cosmos Cleaner Media/Press Kit</h1>
            <p className="my-4 text-2xl">
              <LinkInternal href="" title="Go to the home/index page of CosmosCleaner.com">Go to Homepage</LinkInternal>
            </p>
          </section>

          <section id="kitcontent" className="max-w-[1000px] text-left">
              <h2 id="download" className="text-4xl font-bold">Download</h2>
              <p className="my-4 text-2xl">This media/press kit features Cosmos Cleaner facts, a description, links, brand color information, and images like logos. The materials in this kit are ready for use in your publications regarding Cosmos Cleaner. <em>(See <LinkInternal href="press#usage" title="Read the Usage Permission for the Cosmos Cleaner Media/Press Kit">Usage Permission</LinkInternal> Below)</em></p>
              <ButtonInternal className="mt-3 text-2xl" href="kit.zip" title="Download Cosmos Cleaner Media/Press Kit">Download</ButtonInternal>

              <h2 id="facts" className="mt-12 mb-3 text-4xl font-bold">Facts</h2>
              <p className="my-4 text-2xl"><strong>Name:</strong> Cosmos Cleaner</p>
              <p className="my-4 text-2xl"><strong>Short Description:</strong> Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!</p>
              <p className="my-4 text-2xl"><strong>Primary Contact:</strong> Contact@CosmosCleaner.com</p>
              <p className="my-4 text-2xl"><strong>Developer:</strong> Derek Perry, dp@dp.design, <LinkExternal href="https://dp.design" title="Go to Derek Perry, the developer of Cosmos Cleaner, at dp.design">dp.design</LinkExternal></p>
              <p className="my-4 text-2xl"><strong>Platform Information:</strong> Windows 10/Windows 11 Direct Download (<LinkInternal href="play" title="Download and Play Cosmos Cleaner on Windows 10 or 11 at CosmosCleaner.com/play">CosmosCleaner.com/play</LinkInternal>), Mac (Planned), Linux (Planned), Android (Planned), iOS (Planned)</p>
              <p className="my-4 text-2xl"><strong>Price:</strong> Free</p>
              <p className="my-4 text-2xl"><strong>Made Using:</strong> Unreal Engine 5.2.1, Adobe Photoshop, Adobe Illustrator</p>

              <h2 id="links" className="mt-8 mb-3 text-4xl font-bold">Links</h2>
              <p className="my-4 text-2xl"><strong>Game Website:</strong> <LinkInternal href="" title="Visit the game website for Cosmos Cleaner at CosmosCleaner.com">CosmosCleaner.com</LinkInternal></p>
              <p className="my-4 text-2xl"><strong>Game Privacy Policy:</strong> <LinkInternal href="privacy" title="Visit the privacy policy for Cosmos Cleaner at CosmosCleaner.com/privacy">CosmosCleaner.com/privacy</LinkInternal></p>
              <p className="my-4 text-2xl"><strong>Game Copyright Information:</strong> <LinkInternal href="copyright" title="View the copyright information for Cosmos Cleaner at CosmosCleaner.com/copyright">CosmosCleaner.com/copyright</LinkInternal></p>
              <p className="my-4 text-2xl"><strong>Game By:</strong> <LinkExternal href="https://dp.design" title="Go to Derek Perry, the creator of Cosmos Cleaner, at dp.design">Derek Perry - dp.design</LinkExternal></p>
              <p className="my-4 text-2xl"><strong>Game GitHub:</strong> <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="Visit the GitHub for Cosmos Cleaner at github.com/derek-perry/CosmosCleaner">github.com/derek-perry/CosmosCleaner</LinkExternal></p>
              <p className="my-4 text-2xl"><strong>Website GitHub:</strong> <LinkExternal href="https://github.com/derek-perry/CosmosCleaner-Website" title="Visit the GitHub for Cosmos Cleaner's Website at github.com/derek-perry/CosmosCleaner-Website">github.com/derek-perry/CosmosCleaner-Website</LinkExternal></p>

              <h2 id="logos" className="mt-8 mb-3 text-4xl font-bold">Logos</h2>
              <h3 id="logos-vertical" className="mt-8 mb-3 text-3xl font-bold">Vertical</h3>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-4">
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnLight-Padded.svg' || './CosmosCleaner_Logotype_ColorOnLight-Padded.svg'}
                      width={1000}
                      height={500}
                      alt="Cosmos Cleaner Logotype (Color on Light Backgrounds, Padded, Vertical Layout)"
                      className="max-w-[450px] p-2"
                    />
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded.svg'}
                      width={500}
                      height={500}
                      alt="Cosmos Cleaner Logotype (Color on Dark Backgrounds, Padded, Vertical Layout)"
                      className="max-w-[450px] p-2 bg-cyan-900 rounded"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3.5">
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_Black-Padded.svg' || './CosmosCleaner_Logotype_Black-Padded.svg'}
                      width={1000}
                      height={500}
                      alt="Cosmos Cleaner Logotype (Black, Padded, Vertical Layout)"
                      className="max-w-[450px] p-2"
                    />
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_White-Padded.svg' || './CosmosCleaner_Logotype_White-Padded.svg'}
                      width={500}
                      height={500}
                      alt="Cosmos Cleaner Logotype (White, Padded, Vertical Layout)"
                      className="max-w-[450px] p-2 bg-cyan-900 rounded"
                    />
                  </div>
                </div>
                <h3 id="logos-horizontal" className="mt-2 mb-3 text-3xl font-bold">Horizontal</h3>
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-wrap gap-3.5">
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnLight-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg'}
                      width={1000}
                      height={500}
                      alt="Cosmos Cleaner Logotype (Color on Light Backgrounds, Padded, Horizontal Layout)"
                      className="max-w-[450px] p-2"
                    />
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg'}
                      width={500}
                      height={500}
                      alt="Cosmos Cleaner Logotype (Color on Dark Backgrounds, Padded, Horizontal Layout)"
                      className="max-w-[450px] p-2 bg-cyan-900 rounded"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3.5">
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_Black-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg'}
                      width={1000}
                      height={500}
                      alt="Cosmos Cleaner Logotype (Black, Padded, Horizontal Layout)"
                      className="max-w-[450px] p-2"
                    />
                    <Image
                      src={process.env.NEXT_PUBLIC_SITE_URL + '/CosmosCleaner_Logotype_White-Padded-Horizontal.svg' || './CosmosCleaner_Logotype_ColorOnDark-Padded-Horizontal.svg'}
                      width={500}
                      height={500}
                      alt="Cosmos Cleaner Logotype (White, Padded, Horizontal Layout)"
                      className="max-w-[450px] p-2 bg-cyan-900 rounded"
                    />
                  </div>
                </div>
              </div>

              <h2 id="colors" className="mt-8 mb-3 text-4xl font-bold">Colors</h2>
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-wrap gap-3.5">
                  <Card className="text-white bg-lime-500 max-w-[300px]">
                    <p className="text-2xl">
                      <strong>Green Accent</strong>
                    </p>
                    <p>
                      <strong>HEX:</strong> #84cc16
                    </p>
                    <p>
                      <strong>RGB:</strong> 132, 204, 22
                    </p>
                    <p>
                      <strong>CYMK:</strong> 35%, 0%, 89%, 20%
                    </p>
                    <p>
                      <strong>HSV:</strong> 83°, 89%, 80%
                    </p>
                    <p>
                      <strong>HSL:</strong> 83°, 81%, 44%
                    </p>
                    <p>
                      <strong>TailwindCSS:</strong> Lime-500
                    </p>
                  </Card>
                  <Card className="text-white bg-sky-500 max-w-[300px]">
                    <p className="text-2xl">
                      <strong>Blue Accent</strong>
                    </p>
                    <p>
                      <strong>HEX:</strong> #0ea5e9
                    </p>
                    <p>
                      <strong>RGB:</strong> 14, 165, 233
                    </p>
                    <p>
                      <strong>CYMK:</strong> 94%, 29%, 0%, 9%
                    </p>
                    <p>
                      <strong>HSV:</strong> 198°, 94%, 91%
                    </p>
                    <p>
                      <strong>HSL:</strong> 198°, 89%, 48%
                    </p>
                    <p>
                      <strong>TailwindCSS:</strong> Sky-500
                    </p>
                  </Card>
                </div>
                <div className="flex flex-wrap gap-3.5">
                  <Card className="text-white bg-blue-900 max-w-[300px]">
                    <p className="text-2xl">
                      <strong>Main Blue Background</strong>
                    </p>
                    <p>
                      <strong>HEX:</strong> #1e3a8a
                    </p>
                    <p>
                      <strong>RGB:</strong> 30, 58, 138
                    </p>
                    <p>
                      <strong>CYMK:</strong> 78%, 58%, 0%, 46%
                    </p>
                    <p>
                      <strong>HSV:</strong> 224°, 78%, 54%
                    </p>
                    <p>
                      <strong>HSL:</strong> 224°, 64%, 33%
                    </p>
                    <p>
                      <strong>TailwindCSS:</strong> Blue-900
                    </p>
                  </Card>
                  <Card className="text-cyan-900 bg-cyan-100 align-top max-w-[300px]">
                    <p className="text-2xl">
                      <strong>Light Blue Background</strong>
                    </p>
                    <p>
                      <strong>HEX:</strong> #cffafe
                    </p>
                    <p>
                      <strong>RGB:</strong> 207, 250, 254
                    </p>
                    <p>
                      <strong>CYMK:</strong> 19%, 2%, 0%, 0%
                    </p>
                    <p>
                      <strong>HSV:</strong> 186°, 19%, 100%
                    </p>
                    <p>
                      <strong>HSL:</strong> 186°, 100%, 91%
                    </p>
                    <p>
                      <strong>TailwindCSS:</strong> Cyan-100
                    </p>
                  </Card>
                  <Card className="text-white bg-cyan-900 max-w-[300px]">
                    <p className="text-2xl">
                      <strong>Dark Blue Background</strong>
                    </p>
                    <p>
                      <strong>HEX:</strong> #164e63
                    </p>
                    <p>
                      <strong>RGB:</strong> 22, 78, 99
                    </p>
                    <p>
                      <strong>CYMK:</strong> 78%, 21%, 0%, 61%
                    </p>
                    <p>
                      <strong>HSV:</strong> 196°, 78%, 39%
                    </p>
                    <p>
                      <strong>HSL:</strong> 196°, 64%, 24%
                    </p>
                    <p>
                      <strong>TailwindCSS:</strong> Cyan-900
                    </p>
                  </Card>
                </div>
              </div>

              <h2 id="fonts" className="mt-8 mb-4 text-4xl font-bold">Fonts</h2>
              <p className="my-4 text-2xl">The paragraph font used on Cosmos Cleaner's website and in-game <em>(specifically for "Cosmos" in the logo, game/website paragraphs, and game/website headings)</em> is <LinkExternal href="https://github.com/cadsondemak/Bai-Jamjuree" title="View Bai Jamjuree on GitHub">Bai Jamjuree</LinkExternal> and was created by <LinkExternal href="https://github.com/itfoundry" title="Go to Cadson Demak, the Creator of Bai Jamjuree, on GitHub">Cadson Demak</LinkExternal> (Copyright 2008 Cadson Demak) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>
              <p className="my-4 text-2xl">The display font used on Cosmos Cleaner's website and in-game <em>(specifically for "Cleaner" in the logo)</em> is <LinkExternal href="http://www.rdftype.it/?/projects/sonsie/" title="View Sonsie One of Riccardo De Franceschi's Website">Sonsie One</LinkExternal> and was created by <LinkExternal href="http://www.rdftype.it" title="Go to Riccardo De Franceschi, the Creator of Sonsie One, at www.rdftype.it">Riccardo De Franceschi</LinkExternal> (Copyright 2011 Riccardo De Franceschi) (<LinkExternal href="https://scripts.sil.org/ofl" title="View the Official SIL Open Font License 1.1 at scripts.sil.org/ofl">SIL Open Font License 1.1</LinkExternal>).</p>

              <h2 id="usage" className="mt-8 mb-4 text-4xl font-bold">Usage Permission</h2>
              <p className="my-4 text-2xl">If you are writing about, sharing videos of, or streaming Cosmos Cleaner, thank you! Please use this media/press kit, any in-game content, and any website content (all with proper attribution where useful) in your publications, websites, streams, or videos whether commercial or non-commercial.</p>
              <p className="my-4 text-2xl">Use Cosmos Cleaner and its content (in-game content, the website, relevant information, relevant media, etc.) at your own risk. None of the developers, contributors, or anyone else connected with Cosmos Cleaner, in any way whatsoever, can be responsible for your use of the game, the website, this media/press kit, and the information/media contained in or linked to/from the game, the website, and this media/press kit.</p>


              <h2 id="changes" className="mt-8 text-4xl font-bold">Media/Press Kit Changes</h2>
              <p className="my-4 text-2xl">Although most changes are likely to be minor, Cosmos Cleaner may change this media/press kit from time to time, and in Cosmos Cleaner’s sole discretion. Cosmos Cleaner encourages users to frequently check this page for any changes to this kit.</p>
              <p className="my-4 text-2xl"><i>This media/press kit was last updated on September 6, 2023. Visit the <LinkExternal href="https://github.com/derek-perry/CosmosCleaner" title="View Cosmos Cleaner by Derek Perry on GitHub">website files on GitHub</LinkExternal> for version history.</i></p>


              <h2 id="contact-info" className="mt-8 text-4xl font-bold">Contact Information</h2>
              <p className="my-4 text-2xl">If you have any questions about this media/press kit, please contact Cosmos Cleaner via email at <LinkExternal href="mailto:contact@cosmoscleaner.com" title="Contact Cosmos Cleaner via Email at Contact@CosmosCleaner.com">Contact@CosmosCleaner.com</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  )
}

export default copyrightPage