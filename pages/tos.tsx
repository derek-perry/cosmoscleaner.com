import type { NextPage } from 'next';
import SiteHead from '../components/SiteHead';
import PageFooter from '../components/PageFooter';
import LinkInternal from '../components/Links/LinkInternal';
import LinkExternal from '../components/Links/LinkExternal';
import ButtonInternal from '../components/Buttons/ButtonInternal';

const tosPage: NextPage = () => {
  return (
    <div className="text-cyan-900 min-h-screen flex flex-col items-center justify-center">
      <SiteHead title="CosmosCleaner.com Terms of Service" description="Cosmos Cleaner respects your privacy and your personal data. - Clean up space junk, upgrade your ship, and become the best cleaner in the cosmos!" url="tos" image="" />

      <main className="max-md:pt-2 md:pt-9 pb-20 px-9 max-w-[1000px] w-full flex flex-1 flex-col items-center justify-center">
        <article id="tos">
          <section id="contentheader">
            <h1><span className="max-md:break-all">CosmosCleaner.com</span> Terms of Service</h1>
            <div className="flex flex-col gap-4 mt-4">
              <ButtonInternal href="" title="Go to the home/index page of CosmosCleaner.com"><p>Go to Homepage</p></ButtonInternal>
              <ButtonInternal href="tosgame" title="Go to the terms of service for the game Cosmos Cleaner"><p>Game TOS</p></ButtonInternal>
            </div>
          </section>

          <section id="termsofservice" className="max-w-[1000px] text-left">
            <h2 id="overview">Terms of Service Overview</h2>
            <p>These terms of service are only relevant to Cosmos Cleaner's website and wiki. For the terms of service related to the game itself, visit <LinkInternal href="tosgame" title="CosmosCleaner.com/tosgame">CosmosCleaner.com/tosgame</LinkInternal>. The Cosmos Cleaner website and wiki are provided by Cosmos Cleaner which is operated by Derek Perry. This document is a legal agreement that sets out the terms and conditions (the “terms of service”) between you and Cosmos Cleaner, which you accept and agree to be bound by when you visit, access, or otherwise use Cosmos Cleaner's website, wiki, or other services which are listed below/linked to or which are otherwise referenced in these terms (individually a “Service”, and collectively the “Services”):</p>
            <ul className="pl-7 pb-2 flex flex-col list-disc">
              <li key="website"><LinkInternal className="inline-block" href="" title="CosmosCleaner.com"><p>CosmosCleaner.com</p></LinkInternal></li>
              <li key="wiki"><LinkExternal className="inline-block" href="https://Wiki.CosmosCleaner.com" title="Wiki.CosmosCleaner.com"><p>Wiki.CosmosCleaner.com</p></LinkExternal></li>
            </ul>
            <p>If you don’t agree to be bound by these terms of service, do not use any Services.</p>
            <p>Please note that any service (including third-party services) may be additionally governed by supplemental terms or contracts specific to that service, which will be presented to you for review prior to accessing those parts of the service that require them; those additional terms become part of your agreement with us if you use those services.</p>

            <h2 id="ip-rights">Intellectual Property Rights</h2>
            <p>Copyright © 2023 Cosmos Cleaner™ and related design and composite marks are trademarks of Cosmos Cleaner owned and operated by Derek Perry. All rights reserved.</p>
            <p>The Services and their contents (including any images, videos, GIFs, sounds, etc.), features, and functionality are owned by Cosmos Cleaner, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            <p>These terms of service permit you to use the Services and view/use the Services and the content. Any use of the Services not expressly permitted by these terms of service is a breach of these terms of service and may violate copyright, trademark, and other laws.</p>
            <p>You may elect to informally provide us with feedback from time to time. You agree that Cosmos Cleaner will own, and you hereby assign to Cosmos Cleaner your intellectual property rights in and to, any and all feedback and that Cosmos Cleaner will be free to use, disclose, reproduce, license or otherwise distribute, and exploit the feedback provided to it, royalty free, entirely without obligation or restriction of any kind on account of intellectual property rights or otherwise. “Feedback” means any feedback or ideas you provide to Cosmos Cleaner regarding the Services or any suggested improvements thereto.</p>

            <h2 id="trademarks">Trademarks</h2>
            <p>Cosmos Cleaner’s name, the term “Cosmos Cleaner”, the Cosmos Cleaner’s logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Cosmos Cleaner or its affiliates or licensors. Any other names, logos, product and service names, designs, and slogans on the Services are the trademarks of their respective owners.</p>

            <h2 id="prohibited-uses">Prohibited Uses</h2>
            <p>You may use the Services only for lawful purposes and in accordance with these terms of service. You agree not to use the Services in any way that violates applicable laws, in order to exploit or harm anyone, to send advertising or promotional material, or to impersonate or attempt to impersonate Cosmos Cleaner or anyone else.</p>
            <p>Additionally, you agree not to:</p>
            <ul className="pl-7 pb-2 flex flex-col list-disc">
              <li key="damage"><p>Disable, overburden, damage, or impair (or attempt to disable, overburden, damage, or impair) the Services, or interfere with any other party’s use of the Services.</p></li>
              <li key="enjoyment"><p>Engage in any other conduct that affects anyone else’s use or enjoyment of the Services, or that, as determined by us, may harm Cosmos Cleaner.</p></li>
              <li key="robot-use"><p>Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services.</p></li>
              <li key="device-use"><p>Use any device, software, or routine that interferes with the proper working of the Services.</p></li>
              <li key="viruses"><p>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</p></li>
              <li key="access"><p>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services are stored, or any server, computer, or database connected to the Services.</p></li>
              <li key="attack"><p>Attack the Services via a denial-of-service attack or a distributed denial-of-service attack.</p></li>
              <li key="interfere"><p>Otherwise attempt to interfere with the proper working of the Services.</p></li>
            </ul>

            <h2 id="info-reliance">Reliance on Information Posted</h2>
            <p>The information presented on or through the Services is made available solely for general information purposes. The accuracy, completeness, or usefulness of this information is not warranted or guaranteed. Any reliance you place on such information is strictly at your own risk. Cosmos Cleaner disclaims all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Services, or by anyone who may be informed of any of its contents.</p>

            <h2 id="linking-to">Linking to Cosmos Cleaner</h2>
            <p>You may link to the Services, provided you do so in a way that is fair and legal and does not damage the reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement with/from Cosmos Cleaner.</p>

            <h2 id="linking-from">Linking from the Services</h2>
            <p>The Services may incorporate or contain links to third-party websites or services that are not owned or controlled by Cosmos Cleaner. Cosmos Cleaner assumes no responsibility for the content, policies, or practices of any third-party websites or services. By viewing/using the Services, you expressly relieve Cosmos Cleaner from any and all liability arising from your use of any third-party website or services. Cosmos Cleaner may modify or discontinue your use of, or access to, any third-party website or service, or any content or services available thereunder, at any time in its sole absolute discretion with or without notice to you.</p>

            <h2 id="warranties">Disclaimer of Warranties</h2>
            <p>Your use of the Services is at your own risk. The Services are provided on an “as is” and “as available” basis, without any warranties of any kind, either express or implied. Neither Cosmos Cleaner nor any person associated with Cosmos Cleaner makes any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Services. Without limiting the foregoing, neither Cosmos Cleaner nor anyone associated with Cosmos Cleaner represents or warrants that the Services or their content will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that the Services are free of viruses or other harmful components, or that the Services will otherwise meet your needs or expectations.</p>
            <p>To the fullest extent provided by law, Cosmos Cleaner hereby disclaims all warranties of any kind, whether express or implied, statutory, or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for particular purpose.</p>
            <p>The foregoing does not affect any warranties that cannot be excluded or limited under applicable law.</p>

            <h2 id="liability">Limitation on Liability</h2>
            <p>To the fullest extent provided by law, in no event will Cosmos Cleaner, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use the Services including any direct, indirect, special, incidental, consequential, or punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable.</p>
            <p>The foregoing does not affect any liability that cannot be excluded or limited under applicable law.</p>

            <h2 id="indemnification">Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Cosmos Cleaner, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to your violation of these terms of service or your use of the Services.</p>

            <h2 id="law">Governing Law and Jurisdiction</h2>
            <p>All matters relating to the Services and these terms of service and any dispute or claim arising therefrom or related thereto, will be governed by and construed in accordance with the internal laws of the State of Florida, without giving effect to any choice or conflict of law provision or rule.</p>
            <p>Any legal suit, action, or proceeding arising out of, or related to, these terms of service or the Services shall be instituted exclusively in the federal and state courts located in Florida, USA. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.</p>

            <h2 id="waiver">Waiver and Severability</h2>
            <p>No waiver by Cosmos Cleaner of any term or condition set out in these terms of service shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Cosmos Cleaner to assert a right or provision under these terms of service shall not constitute a waiver of such right or provision. If any provision of these terms of service is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the terms of service will continue in full force and effect.</p>

            <h2 id="privacy-policy">Privacy Policy</h2>
            <p>All information collected on the Services is subject to <LinkInternal href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>. By using the Services you consent to all actions taken by us with respect to your information in compliance with the <LinkInternal href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal>.</p>

            <h2 id="transfers">Business Transfers</h2>
            <p>If Cosmos Cleaner, or a substantially amount of assets owned by Cosmos Cleaner, were acquired, in the unlikely event that Cosmos Cleaner goes out of business, or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Cosmos Cleaner may continue to use your personal information as set forth in these terms of service.</p>

            <h2 id="entire-agreement">Entire Agreement</h2>
            <p>The terms of service and <LinkInternal href="privacy" title="Privacy Policy">Privacy Policy</LinkInternal> are the sole and entire agreement between you and Cosmos Cleaner regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding their subject matter.</p>

            <h2 id="changes">Terms of Service Changes</h2>
            <p>Although most changes are likely to be minor, Cosmos Cleaner may change these terms of service from time to time, and in Cosmos Cleaner’s sole discretion. Cosmos Cleaner encourages users to frequently check this page for any changes to these terms of service. Your continued use of this site after any change in these terms of service will constitute your acceptance of such change.</p>
            <p><i>These terms of service was last updated on November 14, 2023. Visit the <LinkExternal href="https://github.com/derek-perry/cosmoscleaner.com" title="View the repository for CosmosCleaner.com at github.com/derek-perry/cosmoscleaner.com">website files on GitHub</LinkExternal> for version history.</i></p>

            <h2 id="contact-info">Contact Information</h2>
            <p>If you have any questions about these terms of service, please contact Cosmos Cleaner via email at <LinkExternal className="max-sm:break-all" href="mailto:contact@cosmoscleaner.com" title="Contact Cosmos Cleaner via Email at Contact@CosmosCleaner.com">Contact@CosmosCleaner.com</LinkExternal></p>
          </section>
        </article>
      </main>

      <PageFooter />
    </div>
  );
};

export default tosPage;