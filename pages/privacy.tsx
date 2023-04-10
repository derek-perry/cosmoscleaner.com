import type { NextPage } from 'next'
import PageHead from "../components/PageHead"
import PageFooter from "../components/PageFooter"
import LinkInternal from "../components/Links/LinkInternal"
import LinkExternal from "../components/Links/LinkExternal"

const privacyPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <PageHead title="Cosmos Cleaner Privacy Policy" description="Cosmos Cleaner is a 2.5D space vehicle arcade collect-a-thon game. Cosmos Cleaner respects your privacy and your personal data." url="privacy" />

      <main className="w-full flex flex-1 flex-col items-center justify-center px-20 text-center">
        <article id="policy">
          <section id="contentheader" className="py-9">
            <div className="w-full flex flex-row items-center justify-center text-center">
                <h1 className="text-6xl font-bold">Privacy Policy</h1>
            </div>
            <p className="my-4 text-2xl">
              <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/' || '/'} title="Return to Index Page">Go Home</LinkInternal>
            </p>
          </section>

          <section id="privacypolicy" className="max-w-[800px] text-left">
              <h2 id="overview" className="text-4xl font-bold">Privacy Policy Overview</h2>
              <p className="my-4 text-2xl">It is Cosmos Cleaner’s policy to respect your privacy regarding any information Cosmos Cleaner may collect while operating the game, Cosmos Cleaner. This Privacy Policy applies to <LinkInternal href={process.env.NEXT_PUBLIC_SITE_URL + '/' || 'https://cosmoscleaner.com'} title="Cosmos Cleaner">Cosmos Cleaner</LinkInternal> (hereinafter, “the game”, “Cosmos Cleaner's game”, or “Cosmos Cleaner”). Cosmos Cleaner respects your privacy and is committed to protecting personally identifiable information you may provide Cosmos Cleaner through the game. Cosmos Cleaner has adopted this privacy policy (“Privacy Policy”) to explain what information may be collected in the game, how Cosmos Cleaner uses this information, and under what circumstances Cosmos Cleaner may disclose the information to third parties. This Privacy Policy applies only to information Cosmos Cleaner collects through the game and does not apply to the collection of information from other sources.</p>
              <p className="my-4 text-2xl">This Privacy Policy sets forth the general rules and policies governing your experience with the game. Depending on your activities when playing the game, you may be required to agree to additional terms and conditions.</p>


              <h2 id="user-data" className="text-4xl font-bold">Game User Data</h2>
              <p className="my-4 text-2xl">Like most game developers, Cosmos Cleaner collects non-personally-identifying information of the sort that devices and servers typically make available, such as the device/device type, language preference, and the date and time of each user request. Cosmos Cleaner’s purpose in collecting non-personally identifying information is to better understand how Cosmos Cleaner’s game users play/use the game. From time to time, Cosmos Cleaner may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of the game.</p>


              <h2 id="gathering-info" className="text-4xl font-bold">Gathering of Personally-Identifying Information</h2>
              <p className="my-4 text-2xl">Certain users of Cosmos Cleaner’s games choose to interact with Cosmos Cleaner in ways that require Cosmos Cleaner to gather personally-identifying information. The amount and type of information that Cosmos Cleaner gathers depends on the nature of the interaction. Cosmos Cleaner runs analytics to understand how you interact with the game which should continuously improve your gaming experience (e.g. identifying that a feature is too difficult for most users).</p>


              <h2 id="security" className="text-4xl font-bold">Security</h2>
              <p className="my-4 text-2xl">The security of your Personal Information is important to Cosmos Cleaner, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While Cosmos Cleaner strives to use commercially acceptable means to protect your Personal Information, Cosmos Cleaner cannot guarantee absolute security.</p>


              <h2 id="child-data" className="text-4xl font-bold">Personal Data Concerning Children</h2>
              <p className="my-4 text-2xl">Cosmos Cleaner does not knowingly collect any personal data concerning children under 16 years old. In the unlikely event that Cosmos Cleaner has (or you believe Cosmos Cleaner has) collected information from a child, please contact Cosmos Cleaner by using the contact info at the bottom of this privacy policy. Cosmos Cleaner will take all necessary steps to purge the data from relevant systems.</p>


              <h2 id="external-links" className="text-4xl font-bold">Links To External Sites</h2>
              <p className="my-4 text-2xl">This game may contain links to external sites that are not operated by Cosmos Cleaner. If you click on a third party link, you will be directed to that third party’s site. Cosmos Cleaner strongly advises you to review the Privacy Policy and terms and conditions of every site you visit.</p>
              <p className="my-4 text-2xl">Cosmos Cleaner has no control over, and assumes no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>


              <h2 id="info-protection" className="text-4xl font-bold">Protection of Certain Personally-Identifying Information</h2>
              <p className="my-4 text-2xl">Cosmos Cleaner discloses potentially personally-identifying and personally-identifying information only to those of employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Cosmos Cleaner’s behalf or to provide services available at Cosmos Cleaner’s game, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Cosmos Cleaner’s game, you consent to the transfer of such information to them. Cosmos Cleaner will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to employees, contractors and affiliated organizations, as described above, Cosmos Cleaner discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Cosmos Cleaner believes in good faith that disclosure is reasonably necessary to protect the property or rights of Cosmos Cleaner, third parties or the public at large.</p>
              <p className="my-4 text-2xl">If you send Cosmos Cleaner a request (for example via a support email or via one of the feedback mechanisms), Cosmos Cleaner reserves the right to store it privately in order to help clarify or respond to your request. Cosmos Cleaner takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>


              <h2 id="statistics" className="text-4xl font-bold">Aggregated Statistics</h2>
              <p className="my-4 text-2xl">Cosmos Cleaner may collect statistics about the behavior of users in the game. Cosmos Cleaner may display this information publicly or provide it to others. However, Cosmos Cleaner does not disclose your personally-identifying information.</p>


              <h2 id="transfers" className="text-4xl font-bold">Business Transfers</h2>
              <p className="my-4 text-2xl">If Cosmos Cleaner, or substantially all of his assets, were acquired, or in the unlikely event that Cosmos Cleaner goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Cosmos Cleaner may continue to use your personal information as set forth in this policy.</p>


              <h2 id="changes" className="text-4xl font-bold">Privacy Policy Changes</h2>
              <p className="my-4 text-2xl">Although most changes are likely to be minor, Cosmos Cleaner may change this Privacy Policy from time to time, and in Cosmos Cleaner’s sole discretion. Cosmos Cleaner encourages users to frequently check this page for any changes to this Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
              <p className="my-4 text-2xl"><i>This Privacy Policy was last updated on April 9, 2023.</i></p>


              <h2 id="contact-info" className="text-4xl font-bold">Contact Information</h2>
              <p className="my-4 text-2xl">If you have any questions about this Privacy Policy, please contact Derek Perry via email at <LinkExternal href="mailto:dp@dp.design" title="Email Derek Perry at dp@dp.design">dp@dp.design</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  )
}

export default privacyPage