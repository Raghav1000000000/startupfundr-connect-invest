
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-8">
                This Cookie Policy explains how StartupFundr ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
              <p className="mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="mb-4">
                Cookies set by the website owner (in this case, StartupFundr) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Why do we use cookies?</h2>
              <p className="mb-4">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Essential cookies</h3>
                <p className="mb-4">
                  These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Performance cookies</h3>
                <p className="mb-4">
                  These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Functional cookies</h3>
                <p className="mb-4">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Marketing cookies</h3>
                <p className="mb-4">
                  These cookies are used to track advertising effectiveness to provide a more relevant service and deliver better ads to suit your interests.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How can you control cookies?</h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner or you can set or amend your web browser controls to accept or refuse cookies.
              </p>
              <p className="mb-4">
                If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set your browser to block cookies, but if you do, you may not be able to use the website and some features may not function properly.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Cookie preferences</h2>
              <div className="mb-8 bg-gray-50 p-6 rounded-lg border">
                <p className="mb-4">
                  You can manage your cookie preferences at any time by clicking the button below:
                </p>
                <Button 
                  variant="outline" 
                  className="font-medium mb-4"
                  onClick={() => alert("Cookie preferences manager would open here")}
                >
                  Manage Cookie Preferences
                </Button>
                <p className="text-sm text-gray-500">
                  Note: This function is for demonstration purposes. In a production environment, this would open a cookie consent management interface.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to this Cookie Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="mb-4">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or other technologies, please email us at privacy@startupfundr.com or use the contact form on our website.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
