
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p className="mb-4">Last Updated: April 4, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to StartupFundr ("Company", "we", "our", "us")! As you have just clicked our Terms of Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you approximately 20 minutes.
              </p>
              <p className="mb-4">
                These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at www.startupfundr.com (together or individually "Service") operated by StartupFundr.
              </p>
              <p className="mb-4">
                Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: [Privacy Policy Link].
              </p>
              <p className="mb-4">
                Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
              </p>
              <p className="mb-4">
                If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@startupfundr.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Communications</h2>
              <p className="mb-4">
                By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing support@startupfundr.com.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Purchases</h2>
              <p className="mb-4">
                If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
              </p>
              <p className="mb-4">
                You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
              </p>
              <p className="mb-4">
                We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Investment Disclaimer</h2>
              <p className="mb-4">
                Information provided on the StartupFundr platform is for informational purposes only and should not be considered as investment advice. StartupFundr is not a registered broker-dealer, investment advisor, or crowdfunding portal. We do not endorse or recommend any investments listed on our platform.
              </p>
              <p className="mb-4">
                Investing in startups and early-stage businesses involves risks, including the risk of loss of your entire investment. StartupFundr does not guarantee the performance of any investment opportunity. You should only invest an amount you can afford to lose and after carefully reviewing all offering materials.
              </p>
              <p className="mb-4">
                All investments should be made as part of a diversified portfolio, and you should complete your own due diligence before investing. Seek advice from independent financial advisors, accountants, and attorneys as appropriate.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Uses</h2>
              <p className="mb-4">
                You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">In any way that violates any applicable national or international law or regulation.</li>
                <li className="mb-2">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                <li className="mb-2">To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
                <li className="mb-2">In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes To Terms</h2>
              <p className="mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p className="mb-4">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-4">
                StartupFundr<br />
                1234 Innovation Way<br />
                San Francisco, CA 94103<br />
                legal@startupfundr.com<br />
                (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
