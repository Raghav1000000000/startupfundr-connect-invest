import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Legal Information</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-8">
                At StartupFundr, we're committed to transparency and compliance with applicable laws and regulations. This page provides access to our legal documents and important information regarding our services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">Terms of Service</h3>
                  <p className="text-gray-600 mb-4">
                    The legal agreement between you and StartupFundr governing your use of our platform.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/terms">View Terms of Service</Link>
                  </Button>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">Privacy Policy</h3>
                  <p className="text-gray-600 mb-4">
                    Details on how we collect, use, and protect your personal information.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/privacy">View Privacy Policy</Link>
                  </Button>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">Cookie Policy</h3>
                  <p className="text-gray-600 mb-4">
                    Information about how we use cookies and similar technologies.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Link to="/cookie-policy">View Cookie Policy</Link>
                  </Button>
                </div>
                
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">Investor Agreements</h3>
                  <p className="text-gray-600 mb-4">
                    Templates and examples of our investment agreements.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Investor Agreements
                  </Button>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Regulatory Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg border mb-12">
                <p className="mb-4">
                  StartupFundr facilitates connections between startups and potential investors but is not a registered broker-dealer, investment advisor, or funding portal. We do not offer investment advice or recommend any investments.
                </p>
                <p className="mb-4">
                  Investments made through our platform are subject to various securities laws and regulations depending on your jurisdiction. All users must ensure compliance with applicable laws when using our services.
                </p>
                <p>
                  For U.S. investors, investments in startups on our platform may be offered pursuant to Regulation D, Regulation A, or Regulation CF of the Securities Act of 1933, as amended.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Risk Disclosures</h2>
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-12">
                <h3 className="text-lg font-semibold mb-3">Investment Risks</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">Investing in startups and early-stage businesses involves a high degree of risk.</li>
                  <li className="mb-2">You should only invest an amount you can afford to lose without changing your lifestyle.</li>
                  <li className="mb-2">Startup investments are highly illiquid and you may be unable to sell your investment when you wish.</li>
                  <li className="mb-2">Many startups fail and your investment may lose value or become worthless.</li>
                  <li className="mb-2">Returns on investment are not guaranteed and past performance is not indicative of future results.</li>
                </ul>
                <p className="text-sm text-amber-700 font-medium">
                  We strongly recommend consulting with financial and legal advisors before making any investment decisions.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of the StartupFundr platform, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, are the exclusive property of StartupFundr or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mb-4">
                The StartupFundr name and logo are trademarks of StartupFundr. You may not use these marks without our prior written consent.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
              <p className="mb-4">
                For legal inquiries or concerns, please contact our legal department at:
              </p>
              <p className="mb-4">
                legal@startupfundr.com<br />
                (555) 123-4567
              </p>
              <p className="mb-4">
                Mailing Address:<br />
                StartupFundr Legal Department<br />
                1234 Innovation Way<br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
