
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RaiseCapital() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-fundr-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Raise Capital for Your Startup</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Get the funding you need to take your startup to the next level. Connect with our network of investors who are looking for the next big thing.
              </p>
              <Button className="bg-fundr-600 hover:bg-fundr-700 text-lg px-6 py-3 h-auto">
                Apply Now
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose StartupFundr?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Large Investor Network</h3>
                <p className="text-gray-600">
                  Access our diverse network of angel investors, VCs, and investment firms looking for innovative startups.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
                <p className="text-gray-600">
                  Our platform offers secure transactions, legal documentation, and full compliance with regulations.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-fundr-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-fundr-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Support</h3>
                <p className="text-gray-600">
                  Beyond capital, we provide resources, mentorship, and connections to help your startup grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-fundr-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                    <p className="text-gray-600">
                      Fill out our comprehensive application form with details about your startup, team, product, and funding needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-fundr-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Due Diligence Review</h3>
                    <p className="text-gray-600">
                      Our team reviews your application and conducts due diligence to ensure your startup meets our quality standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-fundr-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Create Your Campaign</h3>
                    <p className="text-gray-600">
                      Work with our team to create a compelling fundraising campaign that showcases your startup's potential.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-fundr-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Connect with Investors</h3>
                    <p className="text-gray-600">
                      Once approved, your campaign goes live and you can begin connecting with potential investors from our network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-fundr-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Startup?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful startups that have raised capital through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="text-fundr-600 bg-white hover:bg-gray-100 text-lg px-6 py-3 h-auto">
                Learn More
              </Button>
              <Button className="bg-success-600 hover:bg-success-700 text-white text-lg px-6 py-3 h-auto">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
