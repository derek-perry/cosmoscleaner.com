import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkInternal from '../components/Links/LinkInternal';
import LinkExternal from '../components/Links/LinkExternal';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const privacyPage: NextPage = () => {
  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="CosmosCleaner.com Privacy Policy" description="Cosmos Cleaner respects your privacy and your personal data. - Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!" url="privacy" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="privacy">
          <section id="contentheader">
            <h1>CosmosCleaner.com Privacy Policy</h1>
            <div className="flex flex-col gap-4 mt-4">
              <ButtonInternal href="" title="Go to the home/index page of CosmosCleaner.com"><p>Go to Homepage</p></ButtonInternal>
              <ButtonInternal href="privacygame" title="Go to the privacy policy for Cosmos Cleaner (the game)"><p>Game Privacy Policy</p></ButtonInternal>
            </div>
          </section>

          <section id="privacypolicy" className="max-w-[1000px] text-left">
            <h2 id="overview">Privacy Policy Overview</h2>
            <p>It is Cosmos Cleaner’s policy to respect your privacy regarding any information Cosmos Cleaner may collect while viewing/using Cosmos Cleaner's website and wiki. This privacy policy applies to <LinkExternal href="https://wiki.cosmoscleaner.com" title="Wiki.CosmosCleaner.com">Wiki.CosmosCleaner</LinkExternal> and <LinkInternal href="" title="CosmosCleaner.com">CosmosCleaner.com</LinkInternal> (hereinafter, “the websites”, “Cosmos Cleaner's websites”). Cosmos Cleaner respects your privacy and is committed to protecting personally identifiable information you may provide Cosmos Cleaner through the websites. Cosmos Cleaner has adopted this privacy policy (“privacy policy”) to explain what information may be collected in the websites, how Cosmos Cleaner uses this information, and under what circumstances Cosmos Cleaner may disclose the information to third parties. This privacy policy applies only to information Cosmos Cleaner collects through the websites and does not apply to the collection of information from other sources.</p>
            <p>This privacy policy sets forth the general rules and policies governing your experience with the websites. Depending on your activities when viewing/using the websites (such as clicking third-party links), you may be required to agree to additional terms and conditions.</p>

            <h2 id="user-data">User Data</h2>
            <p>Like most websites, Cosmos Cleaner's websites collects non-personally-identifying information of the sort that devices and servers typically make available, such as the device/device type, language preference, and the date and time of each user request. Cosmos Cleaner’s purpose in collecting non-personally identifying information is to better understand how users of Cosmos Cleaner’s website view/use the websites. From time to time, Cosmos Cleaner may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of the websites.</p>

            <h2 id="gathering-info">Gathering of Personally-Identifying Information</h2>
            <p>Certain users of Cosmos Cleaner’s websites choose to interact with Cosmos Cleaner in ways that require Cosmos Cleaner to gather personally-identifying information. The amount and type of information that Cosmos Cleaner gathers depends on the nature of the interaction. Cosmos Cleaner runs analytics to understand how you interact with the websites which should continuously improve your user experience (e.g. identifying that a feature is too difficult for most users).</p>

            <h2 id="security">Security</h2>
            <p>The security of your personal information is important to Cosmos Cleaner, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While Cosmos Cleaner strives to use commercially acceptable means to protect your Personal Information, Cosmos Cleaner cannot guarantee absolute security.</p>

            <h2 id="child-data">Personal Data Concerning Children</h2>
            <p>A “child” is a person under the age needed to consent to the processing of Personal Data in their country of residence (for example, 13 years old in the United States and between 13 and 16 years old in the European Union).</p>
            <p>Cosmos Cleaner does not knowingly collect any personal data concerning children. In the unlikely event that Cosmos Cleaner has (or you believe Cosmos Cleaner has) collected information from a child, please contact Cosmos Cleaner by using the contact info at the bottom of this privacy policy. Cosmos Cleaner will take all necessary steps to purge the data from relevant systems.</p>

            <h2 id="external-links">Links To External Sites</h2>
            <p>Cosmos Cleaner's websites may contain links to external sites that are not operated by Cosmos Cleaner. If you click on a third party link, you will be directed to that third party’s site. Cosmos Cleaner strongly advises you to review the privacy policy and terms and conditions of every site you visit.</p>
            <p>Cosmos Cleaner has no control over, and assumes no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>

            <h2 id="info-protection">Protection of Certain Personally-Identifying Information</h2>
            <p>Cosmos Cleaner discloses potentially personally-identifying and personally-identifying information only to those of employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Cosmos Cleaner’s behalf or to provide services available at Cosmos Cleaner’s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Cosmos Cleaner’s websites, you consent to the transfer of such information to them. Cosmos Cleaner will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to employees, contractors and affiliated organizations, as described above, Cosmos Cleaner discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Cosmos Cleaner believes in good faith that disclosure is reasonably necessary to protect the property or rights of Cosmos Cleaner, third parties or the public at large.</p>
            <p>If you send Cosmos Cleaner a request (for example via a support email or via one of the feedback mechanisms), Cosmos Cleaner reserves the right to store it privately in order to help clarify or respond to your request. Cosmos Cleaner takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>

            <h2 id="statistics">Aggregated Statistics</h2>
            <p>Cosmos Cleaner may collect statistics about the behavior of users in the websites. Cosmos Cleaner may display this information publicly or provide it to others. However, Cosmos Cleaner does not disclose your personally-identifying information.</p>

            <h2 id="transfers">Business Transfers</h2>
            <p>If Cosmos Cleaner, or a substantially amount of assets owned by Cosmos Cleaner, were acquired, in the unlikely event that Cosmos Cleaner goes out of business, or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Cosmos Cleaner may continue to use your personal information as set forth in this policy.</p>

            <h2 id="entire-agreement">Entire Agreement</h2>
            <p>The <LinkInternal href="tos" title="Terms of Service">terms of services</LinkInternal> and privacy policy are the sole and entire agreement between you and Cosmos Cleaner regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding their subject matter.</p>

            <h2 id="changes">Privacy Policy Changes</h2>
            <p>Although most changes are likely to be minor, Cosmos Cleaner may change this privacy policy from time to time, and in Cosmos Cleaner’s sole discretion. Cosmos Cleaner encourages users to frequently check this page for any changes to this privacy policy. Your continued use of this site after any change in this privacy policy will constitute your acceptance of such change.</p>
            <p><i>This privacy policy was last updated on November 14, 2023. Visit the <LinkExternal href="https://github.com/derek-perry/cosmoscleaner.com" title="View the repository for CosmosCleaner.com at github.com/derek-perry/cosmoscleaner.com">website files on GitHub</LinkExternal> for version history.</i></p>

            <h2 id="contact-info">Contact Information</h2>
            <p>If you have any questions about this privacy policy, please contact Cosmos Cleaner via email at <LinkExternal className="max-sm:break-all" href="mailto:contact@cosmoscleaner.com" title="Contact Cosmos Cleaner via Email at Contact@CosmosCleaner.com">Contact@CosmosCleaner.com</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default privacyPage;